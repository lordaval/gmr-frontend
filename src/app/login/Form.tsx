"use client"

import { API } from "@/utils/API"
import { Loader2 } from "lucide-react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function Form() {
  const router = useRouter()

  async function Logar(event: FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)
    if (validateData()) {
      try {
        const result = await signIn("credentials", {
          username,
          password,
          redirect: true,
          callbackUrl: "/",
        })
      } catch {
        alert("Os dados inseridos são inválidos")
        setPassword("")
      } finally {
        setIsSubmitting(false)
      }
    } else {
      alert("Erro nos dados inseridos")
      setIsSubmitting(false)
    }
  }

  function validateData() {
    if (!username || !password) return false

    return true
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form className="flex flex-col items-center gap-5" onSubmit={Logar}>
      <div className="flex items-center gap-2">
        <label htmlFor="username" className="text-xl font-medium w-20">
          Usuário:
        </label>
        <input
          type="text"
          id="username"
          className="px-2 py-1.5 rounded-md text-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="password" className="text-xl font-medium w-20">
          Senha:
        </label>
        <input
          type="password"
          id="password"
          className="px-2 py-1.5 rounded-md text-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 mt-1 bg-primary-blue text-white text-lg font-medium rounded-md"
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : "ENTRAR"}
      </button>
    </form>
  )
}
