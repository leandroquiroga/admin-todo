import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProdivder from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";
import SpotifyProvider from "next-auth/providers/spotify";
import CredentialsProvider from "next-auth/providers/credentials";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { singInEmailPassword } from "@/auth/components/actions/auth-actions";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: 'example@gmail.com' },
        password: { label: "Password", type: "password", placeholder: '********' },
      },
      async authorize(credentials, req) {
        const user = singInEmailPassword(credentials!.email, credentials!.password);

        if (user) return user;
        return null;
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),

    GoogleProdivder({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
    }),

    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true; // Return `true` to allow sign in or return `false` to deny access
    },

    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
        select: { id: true, role: true, isActive: true },
      }); // find user in db

      if (dbUser?.isActive === false) {
        throw new Error("User is not active");
      }
      // Add role to the token
      token.role = dbUser?.role ?? ["no-role"];
      // Add id to the token
      token.id = dbUser?.id ?? "no-id";
      return token;
    },

    async session({ session, token, user }) {
      // Add property to session, like an access_token from a provider.
      if (session && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
