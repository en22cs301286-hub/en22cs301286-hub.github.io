import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Trophy } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-pink-primary" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
              Internship <span className="glowing-text">Experience</span>
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
          </div>

          <div className="glass-card p-8 border-l-4 border-l-pink-primary group hover:shadow-[0_0_20px_rgba(255,79,163,0.15)] transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Medicaps University IT/Software Intern
              </h3>
              <span className="text-sm font-medium text-pink-primary bg-pink-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                Jun–Jul 2025
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              AWS Cloud Foundations & Architecting via AWS Academy. Gained hands-on experience with core services including EC2, S3, IAM, and VPC.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-primary" />
                Practiced Infrastructure as Code (IaC) with CloudFormation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-primary" />
                Explored Serverless application patterns
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-primary" />
                Implemented cost-optimization strategies
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Trainings Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 flex-1 bg-gradient-to-l from-pink-primary to-transparent opacity-50 hidden sm:block" />
            <BookOpen className="w-8 h-8 text-pink-primary" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
              Trainings & <span className="glowing-text">Workshops</span>
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-primary">
                Java Programming
              </h3>
              <p className="text-sm text-pink-primary mb-3">Universal Informatics</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Core/Advanced Java, OOP, Exception Handling, Multithreading, and Lambdas.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-primary">
                Spring Framework
              </h3>
              <p className="text-sm text-pink-primary mb-3">Universal Informatics</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Spring Core, Boot, Security, Hibernate, DI/IoC, and ORM integration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-8 h-8 text-pink-primary" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
              <span className="glowing-text">Achievements</span>
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
          </div>

          <div className="glass-card p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy className="w-24 h-24 text-pink-primary -mt-6 -mr-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 relative z-10">
              Smart India Hackathon Top 10 Finalist
            </h3>
            <p className="text-sm text-pink-primary mb-4 relative z-10">Medicaps University</p>
            <p className="text-gray-600 dark:text-gray-300 relative z-10">
              Recognized for excellent teamwork and problem-solving under pressure while developing innovative solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
