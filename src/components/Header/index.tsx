import { User } from "lucide-react"
import Image from "next/image"
import LogoutButton from "./LogoutButton"

export default function Header() {
  return (
    <header className="w-full bg-white flex items-center justify-center">
      <div className="w-full h-full border flex justify-between items-center px-4">
        <Image
          src="/gmr.png"
          alt="Logo da GMR"
          width={123}
          height={104}
          className="w-28"
        />
        <LogoutButton />
      </div>
    </header>
  )
}
