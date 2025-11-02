import { GraduationCap, Heart, Target } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="space-y-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 leading-relaxed"
          >
            <p className="mb-4">
              I'm an AI Engineering student who enjoys solving problems and working with teams. 
              I'm currently learning about machine learning, data science, and building web applications.
            </p>
            <p>
              I believe in learning by doing, so I spend time on projects and exploring new technologies.
            </p>
          </motion.div>

          {/* What I'm working on */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-start gap-4 mb-4">
              <Target className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What I'm Working On</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Building AI and machine learning projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Learning data science and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Developing web applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Exploring new technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Bachelor of Technology - Artificial Intelligence',
                  institution: 'Jyothi Engineering College, Cheruthuruthy',
                  period: 'Aug 2023 - Jul 2027',
                },
                {
                  title: 'Higher Secondary',
                  institution: 'KPSMM VHSS Varode',
                  period: 'Nov 2021 - May 2023 • 84.25%',
                },
                {
                  title: 'Secondary Education',
                  institution: "St. Raphael's Cathedral School",
                  period: 'Jun 2010 - Mar 2020 • 79.8%',
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <h4 className="font-semibold text-white mb-1">{edu.title}</h4>
                  <p className="text-blue-400 text-sm mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
