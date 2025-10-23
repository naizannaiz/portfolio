import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'ICCCA 2026 Conference Website',
      description: 'A fully responsive conference website for the International Conference on Contemporary Catalysis and Applications. Features include registration system, abstract submission, event schedule, and payment integration. Built with modern web technologies and deployed on Vercel.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      github: 'https://github.com/naizannaiz/iccs2026',
      demo: 'https://iccca2026.vercel.app/',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      title: 'CopyGo - Smart Clipboard Manager',
      description: 'An intelligent clipboard management tool that helps users organize and manage their copied content efficiently. Features instant access, history tracking, and seamless synchronization across devices.',
      technologies: ['React', 'TypeScript', 'Web APIs', 'Modern UI/UX'],
      demo: 'https://copygo.vercel.app/',
      color: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      title: 'AI vs Real Image Classifier',
      description: 'A TypeScript-based machine learning application that classifies images as AI-generated or real. Uses advanced neural network models to detect subtle differences in image patterns.',
      technologies: ['TypeScript', 'Machine Learning', 'Neural Networks', 'Image Processing'],
      github: 'https://github.com/naizannaiz/ai-vs-real-classifier',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Karthavya',
      description: 'A web application built with modern CSS techniques focusing on responsive design and user experience. Features clean UI/UX principles and accessibility standards.',
      technologies: ['CSS', 'HTML', 'Responsive Design', 'UI/UX'],
      github: 'https://github.com/naizannaiz/karthavya',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Print Kada',
      description: 'A JavaScript-powered college print shop management system. Streamlines the printing workflow with features for order management, queue handling, and user authentication.',
      technologies: ['JavaScript', 'Node.js', 'Web Development', 'Database Management'],
      github: 'https://github.com/naizannaiz/printkada',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Coder Platform',
      description: 'An HTML-based coding practice and learning platform. Includes coding challenges, tutorials, and interactive examples for aspiring developers.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Education Tech'],
      github: 'https://github.com/naizannaiz/coder',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in AI, web development, and software engineering
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800' : ''
              }`}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              {project.featured && (
                <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    ⭐ Featured - Live Demo Available
                  </span>
                </div>
              )}
              
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/naizannaiz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

