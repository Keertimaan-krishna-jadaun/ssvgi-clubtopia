'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ClubSection from '@/components/club-section'
import { EnhancedGallery } from '@/components/enhanced-gallery'
import { CollegeInfo } from '@/components/college-info'
import { WelcomePage } from '@/components/welcome-page'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Bell } from 'lucide-react'
import Search from '@/components/search'

const clubs = [
  {
    name: "Oasis Club",
    description: "Immerse yourself in a world of cultural activities, from melodious singing to graceful dancing.",
    icon: "music",
    slug: "oasis",
  },
  {
    name: "Digitech Club",
    description: "Explore the digital realm and master the art of social media management and digital marketing.",
    icon: "smartphone",
    slug: "digitech",
  },
  {
    name: "Technical Club",
    description: "Dive into the world of technology, coding, and innovative projects that shape our future.",
    icon: "code",
    slug: "technical",
  },
  {
    name: "Kalanjali Club",
    description: "Unleash your creativity through various forms of art, decoration, and cultural expressions.",
    icon: "palette",
    slug: "kalanjali",
  },
  {
    name: "Rotract Club",
    description: "Make a difference in society through community service, blood donations, and social work.",
    icon: "heart",
    slug: "rotract",
  },
  {
    name: "Gladiator Club",
    description: "Embrace the spirit of sportsmanship and push your physical limits through various sports activities.",
    icon: "trophy",
    slug: "gladiator",
  },
  {
    name: "Konnexions Club",
    description: "Connect, network, and build relationships that will last a lifetime and shape your future career.",
    icon: "network",
    slug: "konnexions",
  }
]

const upcomingEvents = [
  { name: "YANTROHAN (The Model Making Competition)", date: "30th December 2024", club: "Technical Club" },
  { name: "The Campus Chronicles 2024", date: "10th December 2024", club: "DigiTech Club" },
  { name: "Championship league", date: "5th February 2025", club: "Gladiator club" }
];

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const handleExplore = () => setShowWelcome(false)

  return (
    <div className="min-h-screen flex flex-col">
      {showWelcome ? (
        <WelcomePage onExplore={handleExplore} />
      ) : (
        <>
          <Header />
          <main className="flex-grow">
            <section className="py-12 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900">
              <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4 text-amber-800">Welcome to SSVGI</h1>
                <p className="text-xl mb-8 text-amber-700">Discover our vibrant college life through our diverse clubs</p>
                <Search />
              </div>
            </section>

            <section className="py-16 bg-white dark:bg-gray-900">
              <div className="container mx-auto">
                <CollegeInfo />
              </div>
            </section>

            <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
              <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-amber-800 dark:text-amber-200">Our Vibrant Clubs</h2>
                <p className="text-center text-amber-700 dark:text-amber-300 mb-12 max-w-2xl mx-auto">
                  Join our diverse range of clubs and societies to explore your passions, develop new skills, and connect with like-minded individuals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {clubs.map((club) => (
                    <ClubSection key={club.name} {...club} />
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 bg-white dark:bg-gray-900">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-amber-800 dark:text-amber-100">Campus Life at SSVGI</h2>
                <EnhancedGallery />
              </div>
            </section>
          </main>
          <Footer />

          <div className="fixed bottom-4 right-4 space-x-2">
            <Button onClick={() => setShowFeedbackDialog(true)} className="bg-amber-500 hover:bg-amber-600 text-white">Feedback and Join Us</Button>
            <Button onClick={() => setShowNotifications(true)} className="bg-yellow-500 hover:bg-yellow-600">
              <Bell className="mr-2 h-4 w-4" /> Notifications
            </Button>
          </div>

          <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Feedback and Join Us</DialogTitle>
                <DialogDescription>
                  Leave your feedback or join our mailing list to stay updated.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Input placeholder="Your Feedback" />
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upcoming Events</DialogTitle>
              </DialogHeader>
              <ul className="space-y-2">
                {upcomingEvents.map((event, index) => (
                  <li key={index} className="bg-amber-100 dark:bg-amber-800 p-2 rounded">
                    <strong>{event.name}</strong> - {event.date} by {event.club}
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  )
}

