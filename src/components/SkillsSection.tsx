import { motion } from 'framer-motion';
import { 
  Code2, Database, Smartphone, Palette, 
  Server, Globe, Zap, Shield,
  Cpu, Cloud, GitBranch, Terminal
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Full Stack',
      icon: Code2,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Node.js', level: 95 },
        { name: 'REST APIs', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Express.js', level: 95 },
      ],
      color: 'var(--gradient-primary)',
    },
    {
      title: 'Programming',
      icon: Server,
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 82 },
        { name: 'Java', level: 77 },
        { name: 'Dart', level: 90 },
      ],
      color: 'var(--gradient-secondary)',
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 80 },
        { name: 'Prisma', level: 85 },
      ],
      color: 'var(--gradient-accent)',
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      skills: [
        { name: 'Linux', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 90 },
      ],
      color: 'var(--gradient-primary)',
    },
  ];

  const tools = [
    { name: 'VS Code', icon: Code2 },
    { name: 'Postman', icon: Zap },
    { name: 'GitHub', icon: GitBranch },
    { name: 'Docker', icon: Cpu },
    { name: 'AWS', icon: Cloud },
    { name: 'Notion', icon: Shield },
  ];

  return (
    <AnimatedSection>
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Skills & <span className="animate-text">Expertise</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
              </p>
            </motion.div>

            {/* Skills Categories */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="glass p-8 rounded-2xl hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="flex items-center mb-8"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="p-3 rounded-xl mr-4"
                      style={{ background: category.color }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </motion.div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: category.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold mb-8">
                Favorite <span className="animate-text">Tools</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="glass p-6 rounded-2xl text-center hover-glow group w-full max-w-[140px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <tool.icon size={40} className="mx-auto text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <p className="text-sm font-medium">{tool.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Learning Section */}
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
                  Always Learning, Always Growing
                </motion.div>
                <motion.p
                  className="text-muted-foreground text-lg mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  languages, and tools to stay at the forefront of web development.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  {['WiFi 7', '6G', 'Security Analysis', 'PQC', 'AI/ML'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute top-0 right-0 w-1/3 h-full -z-10">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-5"
              style={{
                background: `var(--gradient-${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})`,
                width: `${150 + (i * 50)}px`,
                height: `${150 + (i * 50)}px`,
                top: `${20 + (i * 20)}%`,
                right: `${-25 + (i * 15)}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25 + (i * 5),
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

export default SkillsSection;