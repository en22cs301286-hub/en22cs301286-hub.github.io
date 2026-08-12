import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
              About <span className="glowing-text">Me</span>
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
          </div>

          <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-24 h-24 text-pink-primary" />
            </div>
            
            <div className="relative z-10 space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Hi there! I'm an aspiring Java Backend Developer with a passion for building robust, scalable, and secure enterprise applications. Currently pursuing my B.Tech in Computer Science at Medicaps University.
              </p>
              <p>
                My expertise lies in crafting efficient RESTful APIs, managing data with MySQL, and architecting backend services using Java and Spring Boot. I'm a strong problem-solver who enjoys diving deep into complex logic to find elegant solutions.
              </p>
              <p>
                Beyond code, I have hands-on familiarity with AWS cloud services (EC2, S3, IAM, VPC), ensuring that the applications I build are not just functional, but also deployable and scalable in modern cloud environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
