import type { NextApiHandler } from "next"
import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  pages: {
    signIn: "/auth/signin"
  }
}
