import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);

  const projects = [
    {
      title: 'ICCCA 2026 Conference Website',
      description: 'A responsive conference website with registration, abstract submission, event schedule, and payment integration.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/naizannaiz/iccs2026',
      demo: 'https://iccca2026.vercel.app/',
    },
    {
      title: 'CopyGo - Clipboard Manager',
      description: 'A clipboard management tool for organizing copied content with history tracking.',
      technologies: ['React', 'TypeScript', 'Web APIs'],
      demo: 'https://copygo.vercel.app/',
    },
    {
      title: 'AI vs Real Image Classifier',
      description: 'A machine learning application that classifies images as AI-generated or real using neural networks.',
      technologies: ['TypeScript', 'Machine Learning', 'Neural Networks'],
      github: 'https://github.com/naizannaiz/ai-vs-real-classifier',
    },
    {
      title: 'Karthavya',
      description: 'A web application focusing on responsive design and user experience.',
      technologies: ['CSS', 'HTML', 'Responsive Design'],
      github: 'https://github.com/naizannaiz/karthavya',
    },
    {
      title: 'Print Kada',
      description: 'A college print shop management system for order management and queue handling.',
      technologies: ['JavaScript', 'Node.js', 'Web Development'],
      github: 'https://github.com/naizannaiz/printkada',
    },
    {
      title: 'Coder Platform',
      description: 'A coding practice platform with challenges and tutorials.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/naizannaiz/coder',
    },
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
