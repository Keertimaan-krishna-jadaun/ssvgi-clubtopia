import Image from 'next/image'

export function CollegeInfo() {
  return (
    <div className="space-y-8 bg-blue-100"> {/* Changed background color */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/logo1.png"
            alt="SSVGI Logo"
            width={150}
            height={50}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-3xl font-bold text-rose-900">About SSVGI</h3> {/* Changed font color to dark gray */}
          <p className="text-gray-800">
            Shri Siddhi Vinayak Group of Institutions (SSVGI) is committed to excellence in education, 
            fostering innovation, and nurturing future leaders. Our institution provides a comprehensive 
            learning environment with state-of-the-art facilities, experienced faculty, and diverse 
            opportunities for student growth.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-rose-900">Our Vision</h4> {/* Changed font color to dark gray */}
          <p className="text-gray-700">
            To be a leading institution in education and research, creating global leaders and 
            innovators who contribute positively to society through knowledge and skills.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-rose-900">Our Mission</h4> {/* Changed font color to dark gray */}
          <p className="text-gray-700">
            To provide quality education through innovative teaching methods, industry collaboration, 
            and practical exposure, while fostering values of integrity, leadership, and social responsibility.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-lg">
        <div className="w-full md:w-1/4">
          <Image
            src="/images/chairmen.jpeg"
            alt="Chairman's Portrait"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-3/4 space-y-4">
          <h4 className="text-2xl font-semibold text-blue-500">From the Chairman's Desk</h4> {/* Changed font color to dark gray */}
          <p className="text-gray-700">
            "At SSVGI, we believe in nurturing not just students, but future leaders who will shape 
            tomorrow's world. Our commitment to excellence, innovation, and holistic development sets 
            us apart as an institution of higher learning."
          </p>
        </div>
      </div>
    </div>
  )
}
