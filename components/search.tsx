'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

const clubsData = [
  { name: "Oasis Club", slug: "oasis", events: ["Annual Cultural Fest", "Inter-College Dance Competition"] },
  { name: "Digitech Club", slug: "digitech", events: ["Reel Of The Week", "Vlog Of The Month"] },
  { name: "Technical Club", slug: "technical", events: ["Robotics Competition", "Coding Marathon"] },
  { name: "Kalanjali Club", slug: "kalanjali", events: ["Art Exhibition", "Rangoli Making Competition"] },
  { name: "Rotract Club", slug: "rotract", events: ["Blood Donation Camp", "Clothes Distribution Drive"] },
  { name: "Gladiator Club", slug: "gladiator", events: ["Inter-College Chess Competition", "Inter-College Volleyball Tournament"] },
  { name: "Konnexions Club", slug: "konnexions", events: ["Networking Workshop", "Industry Connect Seminar"] },
]

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Array<{ name: string, slug: string, type: 'club' | 'event' }>>([])

  const handleSearch = () => {
    const filteredResults = clubsData.flatMap(club => {
      const clubMatch = club.name.toLowerCase().includes(searchTerm.toLowerCase())
      const eventMatches = club.events.filter(event => 
        event.toLowerCase().includes(searchTerm.toLowerCase())
      )
      
      return [
        ...(clubMatch ? [{ name: club.name, slug: club.slug, type: 'club' as const }] : []),
        ...eventMatches.map(event => ({ name: event, slug: club.slug, type: 'event' as const }))
      ]
    })
    
    setResults(filteredResults)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search clubs or events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-amber-50 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
        />
        <Button onClick={handleSearch} aria-label="Search" className="bg-amber-600 hover:bg-amber-700 text-white">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>
      {results.length > 0 && (
        <div className="mt-4 bg-amber-50 dark:bg-amber-900 shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index}>
                <Link href={`/clubs/${result.slug}`} className="text-amber-700 dark:text-amber-300 hover:underline">
                  {result.name} {result.type === 'event' && <span className="text-sm text-gray-500">(Event)</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

