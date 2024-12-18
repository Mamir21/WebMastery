'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Intel-O-Flash",
      description: "An advanced AI-driven flashcards application designed to help users learn and review information with maximum efficiency. It features secure login powered by Google Firebase and AI-enhanced flashcard generation for a personalized learning experience.",
      imageUrl: "/aiflashcard.png",
      technologies: ["Next.js", "JavaScript", "Firebase", "Tailwind CSS", "MUI"]
    },    
    {
      id: 2,
      title: "ChatterBot",
      description: "An AI-driven chatbot application designed to provide real-time answers to any questions users may have. It features seamless integration for inquiries, backed by a secure login system using Google Firebase and a responsive frontend.",
      imageUrl: "/chatterbot.png",
      technologies: ["Next.js", "JavaScript", "CSS", "Firebase", "Material-UI"]
    },    
    {
      id: 3,
      title: 'Waitlist',
      description: 'A customizable application that allows users to set a countdown timer for a waitlist. It includes interactive animations, dynamic themes, and a modern, responsive design to enhance the user experience.',
      imageUrl: '/WaitList.png',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion.js', 'Clerk']
    }
    
  ]

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Project Showcase</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore a collection of projects that demonstrate my web development skills in action. 
          Each project showcases different aspects of frontend, backend, and full-stack development.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={300}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-2xl relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">{selectedProject.title}</h2>
            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              width={600}
              height={400}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4 leading-relaxed">{selectedProject.description}</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}