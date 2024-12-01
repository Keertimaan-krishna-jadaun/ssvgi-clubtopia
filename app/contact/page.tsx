import Header from '@/components/header'
import Footer from '@/components/footer'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-900 dark:text-rose-500">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative z-10 container mx-auto py-8 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-60 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-emerald-500">Get in Touch</h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-orange-500" />
              <Input type="email" placeholder="Your Email" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-orange-500" />
              <Textarea placeholder="Your Message" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-blue-500" />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Send Message</Button>
            </form>
          </div>
          <div className="relative z-10 container mx-auto py-8 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-60 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">Contact Information</h2>
            <p className="mb-2 text-gray-800 dark:text-cyan-200"><strong>Address:</strong> Nainital Road, Near Dohna Railway Station, Bareilly, Uttar Pradesh 243001</p>
            <p className="mb-2 text-gray-800 dark:text-red-600"><strong>Phone:</strong> 7599471144 </p>
            <p className="mb-2 text-gray-800 dark:text-green-500"><strong>Email:</strong> contact@ssvgi.org </p>
            <p className="text-gray-800 dark:text-blue-500"><strong>Website:</strong> https://www.ssvgi.org/ </p>
          </div>
        </div>
      </main>
      <Footer />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="\videos\contact.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
