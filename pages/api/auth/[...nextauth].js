import NextAuth from "next-auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/db/models/User";

export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    GoogleOAuthProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // this is only here in order to make it easier for people to test the application
        const testUser = await User.findOne({ email: "testuser@example.com" });

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
  adapter: MongoDBAdapter(clientPromise),

  // callbacks: {
  //   async session({ session, user }) {
  //     dbConnect();

  //     const currentUser = await User.findById(user.id);

  //     if (currentUser.favoritePonies == null) {
  //       currentUser.favoritePonies = [];

  //       currentUser.save();
  //     }

  //     return { ...session, user: { ...session.user, id: user.id } };
  //   },
  // },
  // TODO: add callbacks
});
