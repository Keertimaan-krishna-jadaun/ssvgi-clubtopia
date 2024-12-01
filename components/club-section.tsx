import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Smartphone, Code, Palette, Heart, Trophy, Network } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const iconMap = {
  music: Music,
  smartphone: Smartphone,
  code: Code,
  palette: Palette,
  heart: Heart,
  trophy: Trophy,
  network: Network
}

const colorMap = {
  music: 'from-orange-600 to-orange-700 dark:from-orange-800 dark:to-orange-900',
  smartphone: 'from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800',
  code: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
  palette: 'from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700',
  heart: 'from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800',
  trophy: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
  network: 'from-white to-gray-100 dark:from-gray-200 dark:to-gray-300'
}

interface ClubSectionProps {
  name: string
  description: string
  icon: keyof typeof iconMap
  slug: string
  memberCount?: number
}

export default function ClubSection({ name, description, icon, slug, memberCount = Math.floor(Math.random() * 50) + 10 }: ClubSectionProps) {
  const Icon = iconMap[icon]
  const bgColor = colorMap[icon]

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${bgColor}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-white dark:bg-gray-800">
              <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <CardTitle className={`text-xl font-bold ${icon === 'network' || icon === 'palette' ? 'text-gray-800 dark:text-gray-900' : 'text-white'}`}>
              {name}
            </CardTitle>
          </div>
          <Badge variant="secondary" className={`${icon === 'network' || icon === 'palette' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-800'}`}>
            {memberCount} members
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className={`mb-4 ${icon === 'network' || icon === 'palette' ? 'text-gray-700 dark:text-gray-800' : 'text-white dark:text-gray-100'}`}>
          {description}
        </CardDescription>
        <Link href={`/clubs/${slug}`} passHref>
          <Button className={`w-full ${icon === 'network' || icon === 'palette' ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'}`}>
            Explore Club
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

