"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

const clubs = [
  { name: "Oasis Club", slug: "oasis" },
  { name: "Digitech Club", slug: "digitech" },
  { name: "Gizmofreaks Club", slug: "Gizmofreaks" },
  { name: "Kalanjali Club", slug: "kalanjali" },
  { name: "Rotract Club", slug: "rotract" },
  { name: "Gladiator Club", slug: "gladiator" },
  { name: "Konnexions Club", slug: "konnexions" },
]

export function ClubsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
          Clubs <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-gray-800 text-white rounded-lg shadow-lg">
        {clubs.map((club) => (
          <DropdownMenuItem key={club.slug} asChild>
            <Link
              href={`/clubs/${club.slug}`}
              className="w-full cursor-pointer px-4 py-2 hover:bg-gray-700 rounded"
            >
              {club.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
