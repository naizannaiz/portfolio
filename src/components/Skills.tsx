import { 
  Code2, 
  Database, 
  Brain, 
  Wrench, 
  Palette, 
  Cloud,
  GitBranch,
  Box
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'blue',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML5', 'CSS'],
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      color: 'purple',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'PyTorch', 'Data Mining'],
    },
    {
      title: 'Web Development',
      icon: Palette,
      color: 'green',
      skills: ['React.js', 'Node.js', 'Django', 'Tailwind CSS', 'Figma', 'JSON'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'orange',
      skills: ['MySQL', 'Firebase', 'Cloud Firestore', 'Data Modeling'],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'red',
      skills: ['Git', 'GitHub', 'CI/CD', 'Nginx', 'DevOps'],
    },
    {
      title: '3D & Design',
      icon: Box,
      color: 'cyan',
      skills: ['3D Modeling', 'Fusion 360', 'Robotic Welding', 'Robot Operating System (ROS)'],
    },
    {
      title: 'Cloud & Analytics',
      icon: Cloud,
      color: 'indigo',
      skills: ['Big Data', 'Statistical Data Analysis', 'CRM', 'Knowledge Engineering'],
    },
    {
      title: 'Soft Skills',
      icon: GitBranch,
      color: 'pink',
      skills: ['Analytical Skills', 'Team Collaboration', 'Problem Solving', 'Project Management'],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
      green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
      red: { bg: 'bg-red-50 dark:bg-red-900/20', text: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
      cyan: { bg: 'bg-cyan-50 dark:bg-cyan-900/20', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-200 dark:border-cyan-800' },
      indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' },
      pink: { bg: 'bg-pink-50 dark:bg-pink-900/20', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-800' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning AI, data science, web development, and emerging technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`p-2 rounded-lg ${colors.text}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className={`font-bold text-lg ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Languages</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Malayalam</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Native</p>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Hindi</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full Professional</p>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Tamil</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full Professional</p>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              <p className="font-semibold text-gray-900 dark:text-white mb-2">English</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Elementary</p>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

