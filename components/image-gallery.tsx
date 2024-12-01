import Image from 'next/image'

const images = [
  { src: "/placeholder.svg?height=400&width=600", alt: "College Campus", width: 600, height: 400 },
  { src: "/placeholder.svg?height=400&width=600", alt: "Students in Class", width: 600, height: 400 },
  { src: "/placeholder.svg?height=400&width=600", alt: "Library", width: 600, height: 400 },
  { src: "/placeholder.svg?height=400&width=600", alt: "Sports Facility", width: 600, height: 400 },
]

export function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((img, index) => (
        <div key={index} className="relative h-64 overflow-hidden rounded-lg">
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

