import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-down tracking-tight">
          Welcome to WebMastery
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
          Embark on my journey to master the art and science of modern web development. 
          Explore techniques, best practices, and innovative solutions.
        </p>
        <Link 
          href="/skill-details" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-300"
        >
          Explore Skills
          <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800 tracking-wide">
            Why Web Development Matters
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            In today's digital age, web development is more crucial than ever. It’s the backbone of our online experiences, 
            powering everything from social media platforms to e-commerce sites and beyond.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Creates engaging user experiences</li>
            <li>Drives business growth and innovation</li>
            <li>Connects people across the globe</li>
            <li>Constantly evolving with new technologies</li>
          </ul>
        </div>
        <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-inner">
          <Image
            src="/weblaptop.jpg"
            alt="Web Development Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 tracking-tight">
          Key Areas of Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Frontend Development', 'Backend Development', 'Full-Stack Integration'].map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-blue-500"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{skill}</h3>
              <p className="text-gray-600 leading-relaxed">
                Master the intricacies of <span className="font-semibold">{skill.toLowerCase()}</span> to create seamless, efficient, and scalable web applications.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}