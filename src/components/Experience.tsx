import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Genzee Technologies LLP',
      location: 'Kochi, Kerala, India',
      type: 'Internship',
      duration: 'Jun 2025 - Jul 2025 • 2 months',
      description: [
        'Data Collection & Preprocessing: Worked with structured and unstructured datasets to clean, normalize, and prepare data for modeling',
        'Exploratory Data Analysis (EDA): Identified trends, correlations, and insights using tools like Pandas, Matplotlib, and Seaborn',
        'Machine Learning Modeling: Implemented basic ML algorithms such as Linear Regression, Decision Trees, and K-Means Clustering',
        'Model Evaluation: Used performance metrics (accuracy, precision, recall, confusion matrix) to assess model effectiveness',
        'Real-World Use Case Application: Participated in a project that focused on solving a practical problem using predictive modeling',
      ],
      skills: ['Analytical Skills', 'CRM', 'Statistical Data Analysis', 'Data Analysis', 'Data Modeling', 'Big Data'],
      color: 'blue',
    },
    {
      title: 'Python Developer',
      company: 'PACE LAB',
      location: 'Kochi, Kerala, India',
      type: 'Internship',
      duration: 'Jul 2024 • 1 month',
      description: [
        'Completed a one-week hands-on internship focused on foundational and applied aspects of Artificial Intelligence and Python programming',
        'Introduction to data science libraries: NumPy, Pandas, Matplotlib',
        'Basics of Machine Learning using scikit-learn (classification, regression, model evaluation)',
        'Conceptual understanding of neural networks and AI workflow',
        'Mini project involving dataset handling and model building',
        'Gained practical exposure to building AI-based solutions using Python',
      ],
      skills: ['Python', 'Program Creation', 'Pandas', 'PyTorch', 'Knowledge Engineering', 'AIF'],
      color: 'purple',
    },
    {
      title: 'Intern',
      company: 'Tata Technologies',
      location: 'Thrissur, Kerala, India',
      type: 'Internship',
      duration: 'Jan 2024 • 1 month',
      description: [
        'Completed a 1-week internship at TATA IIC, where I gained hands-on exposure to industrial automation and robotics',
        'Explored CNC robot systems and robotic arms',
        'Practiced 3D modeling using Fusion 360',
        'Worked with a 3D printer to turn designs into prototypes',
        'Deepened interest in intelligent systems and practical engineering',
      ],
      skills: ['3D Modeling', 'Robotic Welding', 'Fusion 360', 'Robot Operating System (ROS)'],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string }> = {
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-600 dark:text-purple-400',
      },
      green: {
        border: 'border-green-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
      },
    };
    return colors[color];
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Hands-on experience in data science, AI development, and robotics through various internships
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl border-l-4 ${colors.border} bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className={`text-lg font-semibold ${colors.text} mb-2`}>
                      {exp.company} • {exp.type}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
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
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <Briefcase className={`w-8 h-8 ${colors.text}`} />
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className={`${colors.text} mt-1 flex-shrink-0`}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

