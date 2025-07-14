import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Signal, Smartphone, BarChart, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const skills = [
    {
      icon: Signal,
      title: 'Networks',
      description: 'Designing and managing reliable, secure, and scalable communication systems.',
      color: 'var(--gradient-primary)',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Building cross-platform mobile apps with optimized performance and usability.',
      color: 'var(--gradient-secondary)',
    },
    {
      icon: BarChart,
      title: 'Data Analysis',
      description: 'Extracting insights from data through statistical methods and visualization.',
      color: 'var(--gradient-accent)',
    },
    {
      icon: Cpu,
      title: 'IoT',
      description: 'Developing smart, connected systems with real-time data from physical devices.',
      color: 'var(--gradient-primary)',
    },
  ];


  return (
    <AnimatedSection>
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="animate-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm a passionate developer with hands-on experience in creating real-world projects across Networking, Mobile Application Development, Data Analysis, and Internet of Things.
                Over the years, I've built cross-platform mobile apps, worked with connected devices for smart environments, explored meaningful insights from data, and implemented communication systems for reliable data transfer. 
                I enjoy building solutions that are both practical and user-friendly, and I'm always motivated to explore new technologies and bring creative ideas to life.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '100+', label: 'Contributions' },
                { number: '5+', label: 'Events & Hackathons' },
                { number: '100%', label: 'Learning Commitment' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center glass p-6 rounded-2xl hover-lift"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold animate-text mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="glass p-8 rounded-2xl hover-lift group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="p-3 rounded-xl"
                      style={{ background: skill.color }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon size={32} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Personal Touch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="glass p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
                <motion.div
                  className="text-2xl lg:text-3xl font-semibold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  "Code is like humor. When you have to explain it, it's bad."
                </motion.div>
                <motion.p
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  I believe in writing clean, efficient code that tells a story. 
                  When I'm not coding, you'll find me exploring new coffee shops, 
                  reading tech blogs, or working on side projects that push the boundaries of what's possible.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-5"
              style={{
                background: `var(--gradient-${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})`,
                width: `${200 + (i * 100)}px`,
                height: `${200 + (i * 100)}px`,
                top: `${30 + (i * 20)}%`,
                right: `${-50 + (i * 30)}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 30 + (i * 10),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default AboutSection;