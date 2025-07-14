import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ExperienceSection = () => {
  const experiences = [
    // {
    //   id: 1,
    //   title: 'Senior Full-Stack Developer',
    //   company: 'TechCorp Solutions',
    //   period: '2022 - Present',
    //   location: 'San Francisco, CA',
    //   type: 'Full-time',
    //   description: 'Led a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Improved application performance by 40% and implemented CI/CD pipelines.',
    //   achievements: [
    //     'Architected microservices handling 1M+ daily requests',
    //     'Mentored 3 junior developers and conducted code reviews',
    //     'Reduced deployment time by 60% with automated workflows',
    //   ],
    //   color: 'var(--gradient-primary)',
    // },
    // {
    //   id: 2,
    //   title: 'Frontend Developer',
    //   company: 'Digital Innovations Inc.',
    //   period: '2020 - 2022',
    //   location: 'New York, NY',
    //   type: 'Full-time',
    //   description: 'Developed responsive web applications using React and TypeScript. Collaborated with UX/UI designers to create intuitive user interfaces and improved user engagement by 35%.',
    //   achievements: [
    //     'Built component library used across 5+ products',
    //     'Implemented accessibility standards (WCAG 2.1)',
    //     'Optimized bundle size reducing load time by 50%',
    //   ],
    //   color: 'var(--gradient-secondary)',
    // },
    // {
    //   id: 3,
    //   title: 'Junior Web Developer',
    //   company: 'StartupX',
    //   period: '2019 - 2020',
    //   location: 'Austin, TX',
    //   type: 'Full-time',
    //   description: 'Contributed to the development of the company\'s main product using Vue.js and PHP. Gained experience in agile development and learned to work in fast-paced environments.',
    //   achievements: [
    //     'Developed 15+ feature modules from scratch',
    //     'Fixed 200+ bugs and improved code quality',
    //     'Participated in daily standups and sprint planning',
    //   ],
    //   color: 'var(--gradient-accent)',
    // },
  ];

  const certifications = [
    {
      name: 'Python',
      issuer: 'Udemy',
      year: '2025',
      icon: Award,
    },
    {
      name: 'Mobile Application (Flutter)',
      issuer: 'Guvi',
      year: '2024',
      icon: Award,
    },
    {
      name: 'Machine Learning',
      issuer: 'Coursera',
      year: '2024',
      icon: Award,
    },
  ];

  const achievements = [
    // {
    //   title: 'Best Innovation Award',
    //   description: 'Recognized for developing an AI-powered code review tool',
    //   year: '2023',
    // },
    // {
    //   title: 'Tech Conference Speaker',
    //   description: 'Presented "Building Scalable React Applications" at ReactConf',
    //   year: '2022',
    // },
    // {
    //   title: 'Open Source Contributor',
    //   description: 'Contributed to 10+ open source projects with 500+ stars',
    //   year: '2021-Present',
    // },
  ];

  return (
    <AnimatedSection>
      <section id="experience" className="py-20 relative overflow-hidden">
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
                Experience & <span className="animate-text">Journey</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                My professional journey through different, unique, and exciting projects shaped my career.
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className="relative mb-20">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-primary transform lg:-translate-x-1/2"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-0 lg:left-1/2 w-8 h-8 rounded-full border-4 border-background transform lg:-translate-x-1/2 z-10"
                    style={{ background: exp.color }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  />

                  {/* Content */}
                  <motion.div
                    className={`ml-16 lg:ml-0 lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="glass p-8 rounded-2xl hover-lift">
                      <motion.div
                        className="flex items-start justify-between mb-4"
                        whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div>
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                        </div>
                        <motion.div
                          className="p-2 rounded-lg"
                          style={{ background: exp.color }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase size={20} className="text-white" />
                        </motion.div>
                      </motion.div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h5 className="font-semibold mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 + (achIndex * 0.1) }}
                              viewport={{ once: true }}
                            >
                              <motion.div
                                className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"
                                whileInView={{ scale: [0, 1.5, 1] }}
                                transition={{ duration: 0.4, delay: 0.8 + (achIndex * 0.1) }}
                                viewport={{ once: true }}
                              />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className="animate-text">Certifications</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="glass p-6 rounded-2xl text-center hover-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  >
                    <motion.div
                      className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <cert.icon size={32} className="text-white" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-primary">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-center mb-12">
                {/* <span className="animate-text">Achievements</span> */}
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="glass p-6 rounded-2xl hover-lift"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                      <motion.div
                        className="text-2xl font-bold text-primary"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {achievement.year}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ExperienceSection;