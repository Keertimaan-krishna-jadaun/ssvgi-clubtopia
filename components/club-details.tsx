import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ClubMember {
  role: string
  name: string
  course: string
  contact: string
}

interface ClubDetailsProps {
  name: string
  members: ClubMember[]
}

const roleColors = {
  "Mentor": "bg-gradient-to-br from-purple-500 to-indigo-600",
  "Co-Mentor": "bg-gradient-to-br from-blue-500 to-cyan-600",
  "Coordinator": "bg-gradient-to-br from-green-500 to-emerald-600",
  "Convenor": "bg-gradient-to-br from-yellow-500 to-amber-600",
  "Volunteer": "bg-gradient-to-br from-red-500 to-pink-600",
}

export default function ClubDetails({ name, members }: ClubDetailsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Club Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Card key={index} className={`overflow-hidden ${roleColors[member.role as keyof typeof roleColors]}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-white">{member.role}</CardTitle>
              <CardDescription className="text-gray-200">{member.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-100">Course: {member.course}</p>
              <p className="text-sm text-gray-100">Contact: {member.contact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

