import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession()
  // @ts-expect-error
  const user: {
    id: string
    username: string
    email?: string
  } = session?.user

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-3xl">Bem-Vindo, {user.id}!</h1>
    </div>
  )
}
