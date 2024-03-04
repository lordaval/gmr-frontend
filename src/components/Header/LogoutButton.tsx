"use client"

import { User } from "lucide-react"
import React from "react"
import { signOut } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LogoutButton() {
  function handleSignOut() {
    if (!confirm("Deseja realmente sair?")) return
    signOut()
    redirect("/login")
  }

  return (
    <button
      onClick={handleSignOut}
      className="mr-3 flex flex-col justify-center items-center h-full hover:opacity-40 transition-colors"
    >
      <User size={32} />
    </button>
  )
}
