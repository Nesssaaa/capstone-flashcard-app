import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/db/models/User";
import { dbToUser } from "@/db/utils";
import clientPromise from "@/db/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import dbConnect from "@/db/connect";
import { Types } from "mongoose";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Benutzer und Passwort",
      credentials: {
        username: {
          label: "Benutzername",
          type: "text",
          placeholder: "Benutzername",
        },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        const testaccounts = ["fuchs", "marie", "nicole", "vanessa", "lisa"];
        // this is only here in order to make it easier for people to test the application
        if (
          testaccounts.indexOf(credentials.username) != -1 &&
          credentials.password === process.env.PASSWORD
        ) {
          // check if test user already exits
          await dbConnect();

          let testUser = await User.findOne({ name: credentials.username });

          // if not, create it
          if (!testUser) {
            testUser = {
              name: credentials.username,
              _id: new Types.ObjectId(),
            };
            testUser = await User.create(testUser);
          }

          return dbToUser(testUser);
        } else {
          return null;
        }
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.id;

        return session;
      } else {
        return null;
      }
    },
  },
};
export default NextAuth(authOptions);
