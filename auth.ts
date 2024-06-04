import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from './lib/prisma'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'

const githubID = process.env.GITHUB_ID
const githubSecret = process.env.GITHUB_SECRET
const googleID = process.env.GOOGLE_ID
const googleSecret = process.env.GOOGLE_SECRET
const resendKey = process.env.RESEND_KEY

if (!githubID || !githubSecret || !googleID || !googleSecret || !resendKey) {
  throw new Error(
    'Define all .env variables: GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, RESEND_KEY',
  )
}

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      apiKey: resendKey,
    }),
    GitHubProvider({
      clientId: githubID,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleID,
      clientSecret: googleSecret,
    }),
  ],
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
