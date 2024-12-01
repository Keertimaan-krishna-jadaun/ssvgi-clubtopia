'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ClubDetails from '@/components/club-details'

const clubsData = {
  oasis: {
    name: "Oasis Club",
    description: "Cultural activities like singing, dancing, etc.",
    members: [
      { role: "Mentor", name: "Mr. Abhinav Saxena ", course: "Faaculty (Btech)", contact: "+91 98765 43210" },
      { role: "Mentor", name: "Miss preety Rathore", course: "Faculty", contact: "+91 98765 43210" },
      { role: "Co-Mentor", name: "Sanila Chist", course: "Btech", contact: "+91 87654 32109" },
      { role: "Co-Mentor", name: "Deepak Mahar", course: "MBA", contact: "+91 87654 32109" },
      { role: "Co-Mentor", name: "Mohit Kr Mishra", course: "Polytechnic", contact: "+91 87654 32109" },
      { role: "Coordinator", name: "Lovely Pandey", course: "Btech", contact: "+91 76543 21098" },
      { role: "Coordinator", name: "Arpit Jha", course: "BCA", contact: "+91 76543 21098" },
      { role: "Coordinator", name: "Sonu Yadav", course: "polytechnic", contact: "+91 76543 21098" },
      { role: "Convenor", name: "Khushi saxena", course: "Btech", contact: "+91 65432 10987" },
      { role: "Convenor", name: "Taneesha Dhawan", course: "Btech", contact: "+91 65432 10987" },
      { role: "Volunteer", name: "sneha", course: "Btech", contact: "+91 54321 09876" },
    ],
    events: [
      { name: "talant Hunt", date: "9th november 2024", winners: ["krishna", "Karan", "Khushi saxena"] },
      { name: "Orientation Program", date: "5th september 2024", winners: ["Rishita rastogi", "Kratika Singh", "Sehejdeep"] }
    ]
  },
  digitech: {
    name: "Digitech Club",
    description: "Social media club",
    members: [
      { role: "Mentor", name: "Mr. Anand Bajpai", course: "Faculty (Btech)", contact: "+91 98765 43211" },
      { role: "Co-Mentor", name: "Miss Bhawana Chaudhary", course: "faculty (Btech)", contact: "+91 87654 32110" },
      { role: "Co-Mentor", name: "Mr. Kashif Raja", course: "Faculty (BSC)", contact: "+91 87654 32110" },
      { role: "Co-Mentor", name: "Mr. Sachin", course: " Admin (Btech)", contact: "+91 87654 32110" },
      { role: "Coordinator", name: "Mani Arora", course: "Btech", contact: "+91 76543 21099" },
      { role: "Coordinator", name: "Sneha gaur ", course: "BSC", contact: "+91 76543 21099" },
      { role: "Coordinator", name: "Sachin Yadav", course: "Paramedical", contact: "+91 76543 21099" },
      { role: "Coordinator", name: "Lazeena Rizvi", course: "Btech", contact: "+91 76543 21099" },
      { role: "Convenor", name: "Keertimaan krishna jadaun", course: "Btech", contact: "+91 65432 10988" },
      { role: "Convenor", name: "krishna kumar gupta", course: "Btech", contact: "+91 65432 10988" },
      { role: "Volunteer", name: "Rishita Rastogi", course: "Btech", contact: "+91 54321 09877" },
    ],
    events: [
      { name: "Reel Of The Week", date: "25th November 2024", winners: ["Keertimaan Krishna Jadaun from B-tech","Sneha gour from BSC"] },
      { name: "Vlog Of The Month", date: "10th November 2024", winners: ["Keertimaan Krishna Jadaun from B-tech","Sneha gour from BSC"] }
    ]
  },
  Gizmofreaks: {
    name: "Gizmofreaks Club",
    description: "Gizmofreaks activities and projects",
    members: [
      { role: "Mentor", name: "Mr.Tanuj bisht ", course: "Btech", contact: "+91 98765 43212" },
      { role: "Mentor", name: "Mr. Ankit Sinha ", course: "Faculty", contact: "+91 98765 43212" },
      { role: "Co-Mentor", name: "Mr. Saurabh Kumar Singh", course: "Btech", contact: "+91 87654 32111" },
      { role: "Co-Mentor", name: "Mr. Alok  ", course: "Paramedical", contact: "+91 87654 32111" },
      { role: "Coordinator", name: "Samuel John", course: "Btech", contact: "+91 76543 21100" },
      { role: "Coordinator", name: "Swati Saxena", course: "MBA", contact: "+91 76543 21100" },
      { role: "Convenor", name: "Kushagra", course: "Btech", contact: "+91 65432 10989" },
      { role: "Convenor", name: "Shreya Tripathi", course: "Btech", contact: "+91 65432 10989" },
      { role: "Convenor", name: "Ananya ", course: "Btech", contact: "+91 54321 09878" },
      { role: "Convenor", name: "Anshita ", course: "Btech", contact: "+91 54321 09878" },
      { role: "Volunteer", name: "Yashaswi ", course: "Btech", contact: "+91 54321 09878" },
      { role: "Volunteer", name: "Arkaan Siddiqui ", course: "Btech", contact: "+91 54321 09878" },
      
    ],
    events: [
      { name: "Robotics Competition", date: "12th May 2023", winners: ["Arjun Mehta", "Riya Sharma", "Karan Patel"] },
      { name: "Coding Marathon", date: "8th November 2023", winners: ["Aisha Khan", "Rahul Gupta", "Neha Singh"] }
    ]
  },
  kalanjali: {
    name: "Kalanjali Club",
    description: "Decoration club",
    members: [
      { role: "Mentor", name: "Mr. Anirudh Sharma", course: "Btech", contact: "+91 98765 43213" },
      { role: "Co-Mentor", name: "Miss Chanchal ", course: "Design", contact: "+91 87654 32112" },
      { role: "Co-Mentor", name: "MIss Neeshu ", course: "Management", contact: "+91 87654 32112" },
      { role: "Co-Mentor", name: "Prachi ", course: "Nursing", contact: "+91 87654 32112" },
      { role: "Coordinator", name: "Ankit Kumar ", course: "Btech", contact: "+91 76543 21101" },
      { role: "Coordinator", name: "Nishad ", course: "Management", contact: "+91 76543 21101" },
      { role: "Convenor", name: "Adnan Ansari", course: "Btech", contact: "+91 65432 10990" },
      { role: "Volunteer", name: "Fariyad ", course: "Btech", contact: "+91 54321 09879" },
    ],
    events: [
      { name: "Diya making compitetion", date: "29th october 2024", winners: ["Sneha Gour (bsc Final year)", "Lazeena rixvi {Btech 3rd year}", "Krishna Gupta (Btech 2nd Year)"] },
      { name: "Rangoli Making Competition", date: "29nd October 2024", winners: ["Ananya (Btech 2nd year)", "Lovely Pandey (Btech 3rd year)", "Mariyam Sefie (ZBC 2nd year)"] }
    ]
  },
  rotract: {
    name: "Rotract Club",
    description: "Social worker club (blood donation, clothes serving, etc.)",
    members: [
      { role: "Mentor", name: "Mr. Lalit Kumar", course: "Faculty", contact: "+91 98765 43214" },
      { role: "Co-Mentor", name: "Miss Anushka", course: "Nursing", contact: "+91 87654 32113" },
      { role: "Co-Mentor", name: "Mr. Ashu Saxena", course: "Btech", contact: "+91 87654 32113" },
      { role: "Co-Mentor", name: "Mr Raju", course: "Paramedical", contact: "+91 87654 32113" },
      { role: "Coordinator", name: "Siddhant Shukla", course: "MBA", contact: "+91 76543 21102" },
      { role: "Convenor", name: "Chiranjeet dev narayn", course: "Btech", contact: "+91 65432 10991" },
      { role: "Volunteer", name: "Lavejot Singh", course: "Btech", contact: "+91 54321 09880" },
      { role: "Volunteer", name: "Lakshya Vardhan Saxena", course: "Btech", contact: "+91 54321 09880" },
    ],
    events: [
      { name: "Spending time with Orphans on Children's day", date: "14th November 2024", participants: 80 },
      { name: "Clothes Distribution Drive", date: "30th September 2023", beneficiaries: 150 }
    ]
  },
  gladiator: {
    name: "Gladiator Club",
    description: "Sports club",
    members: [
      { role: "Mentor", name: "Mr. Vidhan Banerjee", course: "Faculty (BCA) ", contact: "+91 98765 43215" },
      { role: "Co-Mentor", name: "Miss Chandini ", course: "Management", contact: "+91 87654 32114" },
      { role: "Co-Mentor", name: "Mr. Arun Kumar", course: "BSC", contact: "+91 87654 32114" },
      { role: "Co-Mentor", name: " Mr.Satyam Sharma ", course: "Nursing", contact: "+91 87654 32114" },
      { role: "Co-Mentor", name: "Mr. Manish Dev Chauhan ", course: "Paramedical", contact: "+91 87654 32114" },
      { role: "Coordinator", name: "Vikash ", course: "BCA (Final Year)", contact: "+91 76543 21103" },
      { role: "Convenor", name: "Aman Maurya", course: "BCA (2nd year)", contact: "+91 65432 10992" },
      { role: "Volunteer", name: "Abhishek Goswami", course: "Btech", contact: "+91 54321 09881" },
    ],
    events: [
      { name: "Inter-College Chess Competition", date: "10th November 2024", winners: ["Arjun Singh"] },
      { name: "Inter-College Volleyball Tournament", date: "18th March 2024", topAthletes: ["B-Tech Team"] }
    ]
  },
  konnexions: {
    name: "Konnexions Club",
    description: "Connect, network, and build relationships",
    members: [
      { role: "Mentor", name: "Dr. Sanjeev Kumar", course: "Faculty", contact: "+91 98765 43216" },
      { role: "Co-Mentor", name: "Mr. Karan Singh", course: "Btech", contact: "+91 87654 32115" },
      { role: "Co-Mentor", name: "Miss princy", course: "BSC", contact: "+91 87654 32115" },
      { role: "Co-Mentor", name: "Mr. SWati Kanojia", course: "MBA", contact: "+91 87654 32115" },
      { role: "Co-Mentor", name: "Mr. Raju", course: "Paramedical", contact: "+91 87654 32115" },
      { role: "Coordinator", name: "Price Agrawal ", course: "Management", contact: "+91 76543 21104" },
      { role: "Coordinator", name: "Siddhant Shukla ", course: "MBA", contact: "+91 76543 21104" },
      { role: "Convenor", name: "Anita Sharma", course: "BBA", contact: "+91 65432 10993" },
      { role: "Volunteer", name: "Vikram Singh", course: "B.Tech ", contact: "+91 54321 09882" },
    ],
    events: [
      { name: "NO DATA FOUND", date: "", participants: "" },
     { name: "NO DATA FOUND", date: "", speakers: [""] }
    ]
  }
}

export default function ClubPage() {
  const params = useParams()
  const slug = params.slug as string
  const clubInfo = clubsData[slug as keyof typeof clubsData]

  if (!clubInfo) {
    return <div>Club not found</div>
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/editing.mp4" // Replace with your video path
        autoPlay
        loop
        muted
      />
      {/* Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30  z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6">{clubInfo.name}</h1>
          <p className="text-xl mb-8">{clubInfo.description}</p>
          <ClubDetails name={clubInfo.name} members={clubInfo.members} />
          <h2 className="text-2xl font-semibold mt-12 mb-4">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubInfo.events?.map((event, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${
                index % 4 === 0 ? 'bg-blue-100 dark:bg-blue-800' :
                index % 4 === 1 ? 'bg-green-100 dark:bg-green-800' :
                index % 4 === 2 ? 'bg-yellow-100 dark:bg-yellow-800' :
                'bg-pink-100 dark:bg-pink-800'
              }`}>
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                {'winners' in event && (
                  <p><strong>Winners:</strong> {event.winners.join(', ')}</p>
                )}
                {'participants' in event && (
                  <p><strong>Participants:</strong> {event.participants}</p>
                )}
                {'beneficiaries' in event && (
                  <p><strong>Beneficiaries:</strong> {event.beneficiaries}</p>
                )}
                {'topAthletes' in event && (
                  <p><strong>Top Athletes:</strong> {event.topAthletes.join(', ')}</p>
                )}
                {'speakers' in event && (
                  <p><strong>Speakers:</strong> {event.speakers.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}