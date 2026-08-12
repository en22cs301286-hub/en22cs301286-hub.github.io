import { motion } from 'framer-motion';

const skills = [
  "Java", "SQL", "Spring Boot", "Spring Security", "REST API", 
  "Postman", "Eclipse", "HTML", "CSS", "OOPs", "DBMS",
  "AWS (EC2, S3, IAM, VPC)"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 flex-1 bg-gradient-to-l from-pink-primary to-transparent opacity-50" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
            Technical <span className="glowing-text">Skills</span>
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 glass-card text-gray-700 dark:text-gray-200 font-medium 
                         hover:text-pink-primary dark:hover:text-pink-primary 
                         hover:border-pink-primary/50 transition-all duration-300
                         cursor-default text-center"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
