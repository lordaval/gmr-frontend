import Header from "@/components/Header"
import LeftHeader from "@/components/LeftHeader"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "GMR",
  description: "CMR do GMR Pesquisas",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header />
      <main className="w-full h-full flex justify-between items-center">
        <LeftHeader />
        {children}
      </main>
    </div>
  )
}
