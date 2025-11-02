import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <img
              src="/profile.jpg"
              alt="Mohamed Naizan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Mohamed Naizan
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-300 mb-6"
        >
          AI Engineering Student
        </motion.h2>

        {/* Brief intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Learning and building with AI, machine learning, and web technologies.
          <br />
          Always curious about what's next.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={handleContactClick}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </button>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition-colors"
          >
            View Work
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/naizannaiz', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamednaizan/', label: 'LinkedIn' },
            { icon: Instagram, href: 'https://www.instagram.com/naizz.af/', label: 'Instagram' },
            { icon: Mail, href: 'mailto:naizan9846@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-xs mb-2">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
