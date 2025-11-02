import { Heart, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Mohamed Naizan
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              The one who stands out from the crowd.
              <br />
              Building extraordinary solutions through AI and innovation.
            </p>
            <p className="text-sm text-gray-500">
              Based in Kerala, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-2 duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {[
                { icon: Github, href: 'https://github.com/naizannaiz', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamednaizan/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/naizz.af/', label: 'Instagram' },
                { icon: Mail, href: 'mailto:naizan9846@gmail.com', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-sm text-gray-400">
              Let's create something extraordinary together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Mohamed Naizan. All rights reserved.
            </p>
            <motion.p
              className="text-sm text-gray-400 flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              Made with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> and passion for innovation
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
