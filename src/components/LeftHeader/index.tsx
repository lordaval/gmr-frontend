import { Mail, PhoneOutgoing } from "lucide-react"
import Topic from "./Topic"

const Links = [
  { linkName: "Importar Mailing", linkUrl: "/importarMailing" },
  { linkName: "Reusar Mailing", linkUrl: "/reusarMailing" },
]

export default function LeftHeader() {
  return (
    <aside className="w-1/6 h-full flex flex-col justify-between items-center border-r">
      <div className="w-full flex flex-col">
        <Topic title="Mailing" links={Links} icon={<Mail />} />
        <Topic title="Discador" links={Links} icon={<PhoneOutgoing />} />
        <Topic title="Usuários" links={Links} />
        <Topic title="Mailing" links={Links} />
      </div>
      <footer className="flex justify-center items-center text-black/60 p-3">
        &copy; GMR Pesquisas
      </footer>
    </aside>
  )
}
