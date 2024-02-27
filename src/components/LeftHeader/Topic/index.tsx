"use client"
import { ChevronDown, ChevronRight, ChevronUp, Pickaxe } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

interface TopicProps {
  title: string
  links: { linkName: string; linkUrl: string }[]
  icon?: React.ReactNode
}

const Topic = ({ title, links, icon }: TopicProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full mx-auto flex flex-col bg-gray-200">
      <div className="border-b border-b-black/20">
        <div
          className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
            isOpen && "border-b border-b-black/20"
          }`}
          onClick={toggleAccordion}
        >
          <div className="flex items-center gap-3">
            {icon || <Pickaxe />}
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
          <span className="text-gray-600">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {isOpen && (
          <ul>
            {links.map((link, index) => (
              <li
                key={index}
                className="p-1 pl-4 flex items-center hover:bg-primary-blue/15"
              >
                <ChevronRight />
                <Link href={link.linkUrl} className="w-full h-full">
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Topic
