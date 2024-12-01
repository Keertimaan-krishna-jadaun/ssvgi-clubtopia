import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const collegeImages = [
  {
    src: "/images/welcome5.jpeg",
    alt: "SSVGI Campus Aerial View",
    description: "Our sprawling campus features state-of-the-art facilities surrounded by beautiful landscaping, providing an ideal environment for learning and growth.",
    width: 800,
    height: 400
  },
  {
    src: "/images/welcome4.jpeg",
    alt: "SSVGI Modern Building",
    description: "Our iconic circular building represents our modern approach to education and stands as a symbol of innovation in architecture.",
    width: 800,
    height: 400
  },
  {
    src: "/images/classrom.jprg.png",
    alt: "Academic Excellence",
    description: "Our well-equipped classrooms provide the perfect setting for focused learning and academic achievement.",
    width: 800,
    height: 400
  },
  {
    src: "/images/buses.jpeg",
    alt: "Transportation Fleet",
    description: "We maintain a fleet of modern buses ensuring safe and comfortable transportation for our students from various parts of the city.",
    width: 800,
    height: 400
  },
  {
    src: "/images/per2.jpeg",
    alt: "Cultural Performance",
    description: "Students showcase their talents through vibrant cultural performances and events throughout the academic year.",
    width: 800,
    height: 400
  },
  {
    src: "/images/fac.jpeg",
    alt: "Dedicated Faculty",
    description: "Our experienced faculty members are committed to providing quality education and mentoring to shape future leaders.",
    width: 800,
    height: 400
  }
]

export function EnhancedGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collegeImages.map((img, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">{img.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

