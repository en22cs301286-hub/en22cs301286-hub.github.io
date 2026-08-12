import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    institution: "Medicaps University",
    degree: "B.Tech CSE",
    period: "2022–2026",
    score: "CGPA 8.41/10",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    institution: "Mount Carmel H.Sec. School",
    degree: "12th Standard",
    period: "2022",
    score: "89.40%",
    icon: <Award className="w-6 h-6" />
  },
  {
    institution: "Mount Carmel H.Sec. School",
    degree: "10th Standard",
    period: "2020",
    score: "94%",
    icon: <Award className="w-6 h-6" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
            <span className="glowing-text">Education</span> Journey
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
        </div>

        <div className="relative border-l-2 border-pink-primary/30 ml-4 md:ml-6 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[17px] top-1 bg-pink-blush dark:bg-gray-900 border-2 border-pink-primary rounded-full p-1 text-pink-primary shadow-[0_0_10px_rgba(255,79,163,0.5)]">
                {edu.icon}
              </div>
              
              <div className="glass-card p-6 group hover:border-pink-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-pink-primary transition-colors">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-medium text-pink-primary bg-pink-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-1">
                  {edu.degree}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Score: <span className="font-semibold text-gray-700 dark:text-gray-200">{edu.score}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
