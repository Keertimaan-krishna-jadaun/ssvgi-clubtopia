'use client' // Add this line at the top to mark the file as a Client Component

import Link from 'next/link'
import { useState } from 'react' // Import useState
import { ClubsDropdown } from './clubs-dropdown'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">SSVGI</Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4 items-center">
            <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
            <li><ClubsDropdown /></li>
            <li><Link href="/about" passHref><Button variant="ghost">About</Button></Link></li>
            <li><Link href="/contact" passHref><Button variant="ghost">Contact</Button></Link></li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}
