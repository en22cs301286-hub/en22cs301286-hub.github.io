import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 flex-1 bg-gradient-to-l from-pink-primary to-transparent opacity-50" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
            Get in <span className="glowing-text">Touch</span>
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect!
            </p>

            <div className="space-y-4">
              <a href="mailto:chahakrashinkar@gmail.com" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-pink-primary dark:hover:text-pink-primary transition-colors group">
                <div className="p-3 glass-card rounded-full text-pink-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span>chahakrashinkar@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 glass-card rounded-full text-pink-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Indore, MP, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/chahak-28" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-gray-600 hover:text-pink-primary dark:text-gray-400 dark:hover:text-pink-primary transition-all hover:-translate-y-1">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/chahak-rashinkar-c2" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-gray-600 hover:text-pink-primary dark:text-gray-400 dark:hover:text-pink-primary transition-all hover:-translate-y-1">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="glass-card p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-primary/50 focus:border-pink-primary transition-all dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-primary/50 focus:border-pink-primary transition-all dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-primary/50 focus:border-pink-primary transition-all dark:text-white resize-none"
                  placeholder="Hello Chahak, I'd like to talk about..."
                />
              </div>
              <button type="submit" className="btn-primary w-full group">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
