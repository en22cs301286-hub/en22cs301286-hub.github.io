import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-card text-pink-primary font-medium text-sm">
            Hello, World! 👋
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">
            I'm <span className="glowing-text">Chahak Rashinkar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
            Aspiring Java Developer
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Building scalable, secure enterprise apps with Java, Spring Boot, MySQL & AWS.
            Passionate about problem-solving and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#contact" className="btn-primary group w-full sm:w-auto">
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href="https://github.com/chahak-28" target="_blank" rel="noopener noreferrer" className="p-3 glass-card text-gray-600 hover:text-pink-primary dark:text-gray-300 dark:hover:text-pink-primary transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/chahak-rashinkar-c2" target="_blank" rel="noopener noreferrer" className="p-3 glass-card text-gray-600 hover:text-pink-primary dark:text-gray-300 dark:hover:text-pink-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:chahakrashinkar@gmail.com" className="p-3 glass-card text-gray-600 hover:text-pink-primary dark:text-gray-300 dark:hover:text-pink-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
