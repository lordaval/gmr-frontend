import Header from "@/components/Header"
import LeftHeader from "@/components/LeftHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "GMR",
  description: "CMR do GMR Pesquisas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
