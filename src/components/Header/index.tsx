import { User } from "lucide-react"
import Image from "next/image"

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
        <div className="mr-3 flex flex-col justify-center items-center h-full hover:opacity-40 transition-colors">
          <User size={32} />
          {/* <h1 className="text-lg font-medium">Rodrigo</h1> */}
        </div>
      </div>
    </header>
  )
}
