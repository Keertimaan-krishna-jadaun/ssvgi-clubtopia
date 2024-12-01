export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">SSVGI</h3>
            <p className="text-gray-400">Empowering minds, shaping futures.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Academics</a></li>
              <li><a href="#" className="hover:text-white">Admissions</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <ul className="text-gray-400">
              <li><a href="https://www.facebook.com/ssvgiofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
              <li><a href="https://twitter.com/ssvgi" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com/shrisiddhivinayakofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href="https://in.linkedin.com/school/shri-siddhi-vinayak-institute-of-management-nainital-road-bareilly/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; Keertimaan Krishna Jadaun/ Ananya Vaish/ Anshita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

