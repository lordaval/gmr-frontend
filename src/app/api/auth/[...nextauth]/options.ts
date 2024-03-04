import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "login" ||
            "http://localhost:3333/login",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        const data = await res.json()

        if (res.ok && data.code === "AUTHORIZED") {
          console.log(data.user)
          return data.user as {
            id: string
            username: string
            email: string
          }
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
}
