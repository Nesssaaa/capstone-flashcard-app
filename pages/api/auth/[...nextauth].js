import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/db/models/User";
import { dbToUser } from "@/db/utils";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // this is only here in order to make it easier for people to test the application
        const testUser = dbToUser(
          await User.findOne({ name: credentials.username })
        );
        console.log(testUser);
        console.log(process.env);

        if (
          credentials.username === "fuchs" &&
          credentials.password === "fuchs"
        ) {
          return testUser;
        } else {
          return null;
        }
      },
    }),
  ],

  // adapter: MongoDBAdapter(clientPromise),
  // session: {
  //   strategy: "jwt",
  // },

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
