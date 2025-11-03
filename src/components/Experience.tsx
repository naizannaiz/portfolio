import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);

  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Genzee Technologies LLP',
      location: 'Kochi, Kerala, India',
      duration: 'Jun 2025 - Jul 2025 • 2 months',
      description: [
        'Worked with datasets for cleaning and preprocessing',
        'Performed exploratory data analysis using Pandas and visualization tools',
        'Implemented basic ML models like Linear Regression and Decision Trees',
        'Evaluated models using accuracy, precision, and recall metrics',
        'Applied predictive modeling to solve practical problems',
      ],
      skills: ['Python', 'Pandas', 'Data Analysis', 'Machine Learning', 'Statistical Analysis'],
    },
    {
      title: 'Python Developer',
      company: 'PACE LAB',
      location: 'Kochi, Kerala, India',
      duration: 'Jul 2024 • 1 month',
      description: [
        'Learned fundamentals of AI and Python programming',
        'Explored data science libraries: NumPy, Pandas, Matplotlib',
        'Practiced machine learning with scikit-learn',
        'Built a mini project involving dataset handling',
      ],
      skills: ['Python', 'NumPy', 'Pandas', 'Machine Learning', 'scikit-learn'],
    },
    {
      title: 'Intern',
      company: 'Tata Technologies',
      location: 'Thrissur, Kerala, India',
      duration: 'Jan 2024 • 1 month',
      description: [
        'Gained exposure to industrial automation and robotics',
        'Explored CNC robot systems and robotic arms',
        'Practiced 3D modeling with Fusion 360',
        'Used 3D printer to create prototypes',
      ],
      skills: ['3D Modeling', 'Fusion 360', 'Robotics', '3D Printing'],
    },
  ];

  return (
    <section 
      id="experience" 
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
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4 text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
