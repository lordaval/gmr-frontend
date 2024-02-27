import Image from "next/image"
import Form from "./Form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "GMR",
  description: "CMR do GMR Pesquisas",
}

export default function Login() {
  return (
    <main className="w-full h-screen bg-primary-blue bg-banner-gmr bg-center bg-cover">
      <div className="w-full h-full bg-primary-blue/80 flex justify-center items-center">
        <div className="w-1/3 h-1/3 bg-slate-200 rounded-2xl flex flex-col items-center">
          <Image
            src="/gmr.png"
            alt="Logo da GMR"
            width={123}
            height={104}
            className="mt-1"
          />
          <Form />
        </div>
      </div>
    </main>
  )
}
