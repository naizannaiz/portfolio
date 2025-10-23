import { GraduationCap, Heart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Mohamed Naizan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image not found
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-white dark:bg-gray-900 flex items-center justify-center">
                          <div class="text-center p-8">
                            <div class="text-6xl mb-4">🚀</div>
                            <p class="text-lg text-gray-600 dark:text-gray-400">
                              Building the future with AI
                            </p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about solving real problems and enjoy being part of teams 
                that push each other to grow. I show up with curiosity, commitment, and a 
                genuine willingness to contribute wherever I can.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently pursuing my Bachelor's in Artificial Intelligence, I'm diving deep 
                into machine learning, data science, and intelligent systems. I believe in 
                learning by doing and constantly challenging myself with new projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg">Bachelor of Technology - Artificial Intelligence</h4>
                  <p className="text-blue-600 dark:text-blue-400">Jyothi Engineering College, Cheruthuruthy</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2023 - Jul 2027</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg">Higher Secondary Education</h4>
                  <p className="text-blue-600 dark:text-blue-400">KPSMM VHSS Varode</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nov 2021 - May 2023 • Grade: 84.25%</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg">Secondary Education</h4>
                  <p className="text-blue-600 dark:text-blue-400">St. Raphael's Cathedral School</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2010 - Mar 2020 • Grade: 79.8%</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-600" />
                What Drives Me
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▸</span>
                  <span>Building intelligent systems that solve real-world problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▸</span>
                  <span>Collaborating with teams that challenge and inspire growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▸</span>
                  <span>Continuous learning and exploring emerging technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▸</span>
                  <span>Turning data into meaningful insights and predictions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

