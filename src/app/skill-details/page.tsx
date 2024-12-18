import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function SkillDetails() {
  const skills = [
    { 
      name: 'Frontend Development', 
      techniques: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS'], 
      benefits: ['Interactive UIs', 'Smooth User Experience', 'Cross-platform Compatibility'] 
    },
    { 
      name: 'Backend Development', 
      techniques: ['Node.js', 'Java', 'Python'], 
      benefits: ['Scalable Architecture', 'Efficient Data Management', 'Robust Security'] 
    },
    { 
      name: 'Database Management', 
      techniques: ['SQL', 'MongoDB', 'Firebase'], 
      benefits: ['Data Integrity', 'Fast Querying', 'Flexible Schema Design'] 
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Web Development Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dive deep into the core competencies that form the foundation of modern web development. 
          Each skill is crucial in creating robust, efficient, and user-friendly web applications.
        </p>
      </section>

      {skills.map((skill, index) => (
        <section 
          key={index} 
          className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition duration-300"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">{skill.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Techniques</h3>
              <ul className="space-y-2">
                {skill.techniques.map((technique, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 text-lg">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h3>
              <ul className="space-y-2">
                {skill.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-blue-50 p-8 rounded-lg shadow-inner border-t-4 border-blue-500">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center tracking-wide">
          My Journey to Mastery
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            My path to becoming a proficient web developer has been filled with challenges, continuous learning, and exciting breakthroughs. 
            It all started with a curiosity about how websites work, which led me to dive into HTML and CSS.
          </p>
          <p>
            As I progressed, I embraced JavaScript and its ecosystem, exploring frameworks like React and Next.js. 
            The frontend world opened up, and I learned to create responsive, interactive user interfaces.
          </p>
          <p>
            But I didn't stop there. I went into backend development, learning Node.js. 
            This full-stack knowledge allowed me to build complete web applications from the ground up.
          </p>
          <p>
            Along the way, I've worked on numerous projects, collaborated with talented developers, and constantly 
            pushed myself to learn new technologies and best practices. This journey has not only made me a skilled 
            developer but also instilled in me a passion for creating efficient, user-friendly web solutions.
          </p>
        </div>
      </section>
    </div>
  )
}