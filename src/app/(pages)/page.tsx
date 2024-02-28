import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession()

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-3xl">Bem-Vindo, {session?.user?.name}!</h1>
    </div>
  )
}
