import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative">
        {/* Background Video */}
        <video
          className="absolute inset-0 z-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src="/videos/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto py-8 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-60 rounded-lg shadow-lg mt-8">
          <h1 className="text-3xl font-bold mb-6 text-rose-900">About SSVGI</h1>
          <p className="text-lg mb-4 text-gray-700 dark:text-cyan-500">
              Shri Siddhi Vinayak Group of Institutions (SSVGI), aims that education is not limited to classrooms, it is a part of life; with the prime focus on maximizing the competencies, knowledge, inculcating professional ethics and values.
          </p>
          <p className="text-lg mb-4 text-gray-700 dark:text-rose-500">
            SSVGI comprises:
            <ul className="list-disc list-inside ml-4">
              <li className="text-gray-700 dark:text-blue-500"> Shri Siddhi Vinayak Institute of Technology (AKTU code 474)</li>
              <li className="text-gray-700 dark:text-blue-500"> Shri Siddhi Vinayak Institute of Management (AKTU code 703)</li>
              <li className="text-gray-700 dark:text-blue-500"> Shri Siddhi Vinayak School of Nursing (UPSMF code 1049)</li>
              <li className="text-gray-700 dark:text-blue-500"> Shri Siddhi Vinayak Polytechnic (JEE Code 2052)</li>
            </ul>
          </p>
          <p className="text-lg mb-4 text-gray-700 dark:text-emerald-500">
              These institutions were established under the parasol of the Shri Siddhi Vinayak Trust, Bareilly (Uttar Pradesh), a "not for profit organization" with determination and commitment to foster a holistic approach towards development of technical and professional education in the country.
          </p>
          <p className="text-lg mb-4 text-gray-700 dark:text-emerald-500">
            '  Education with a vision for employment' is our motto. We wish to achieve it by guiding the learner with a team of highly experienced, qualified educators and also providing orientation classes for employment. A professional team has been taking custody of providing quality education, which helps students to earn credentials and attain a high level of proficiency.
          </p>
          <p className="text-lg text-gray-700 dark:text-emerald-500">
              The main aspiration of SSVGI is to equip its students with necessary skills, knowledge and expertise in state-of-the-art technology and imbibe confidence, in order to perform their work professionally, with dynamism.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
