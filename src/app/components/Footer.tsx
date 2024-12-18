import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">WebMastery</h3>
            <p className="text-gray-400">Empowering the next generation of web developers</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link href="/skill-details" className="text-gray-300 hover:text-blue-400 transition duration-300">Skill Details</Link></li>
              <li><Link href="/project-showcase" className="text-gray-300 hover:text-blue-400 transition duration-300">Project Showcase</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <p>Copyright © 2024 Muhammad Amir</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer