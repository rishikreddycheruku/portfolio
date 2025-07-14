import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Fog Computing-Based Air Quality Monitoring System',
      description: 'This project implements a distributed air quality monitoring system using fog computing and LoRa communication. Raspberry Pi-based edge devices handle local data processing for real-time insights, minimizing latency and cloud reliance. LoRa enables long-range, low-power data transmission between sensor nodes and edge devices. The system integrates with AWS (EC2, IoT Core, cloud database) for scalable storage and secure management. A React + Node.js dashboard offers real-time visualization, alerts, and analytics, making the solution scalable and effective for both urban and rural environments.',
      image: project1,
      technologies: ['Fog Computing', 'Arduino', 'Raspberry Pi', 'LoRa', 'AWS (EC2, IoT Core, Database)', 'React', 'Node.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rishikreddycheruku/ENVIRO-Web',
      featured: true,
    },
    {
      id: 2,
      title: 'AgroESP - Smart Polyhouse Solar Drying System',
      description: 'As part of the Sony Semiconductor Solutions University Partnership (SSUP) at Amrita Vishwa Vidyapeetham, contributed to the development of AgroESP, a smart agriculture system for solar drying automation in polyhouse environments. Designed and developed a cross-platform Flutter mobile application that interfaces with Sony Spresense-based edge devices, allowing farmers to monitor and control solar drying conditions in real time. The system integrated REST APIs for sensor data visualization, actuator control, and communication with on-device learning models. The application was optimized for field deployment, offering a user-friendly interface tailored for use in small-scale and rural agricultural settings.',
      image: project2,
      technologies: ['Flutter (Dart)', 'REST APIs', 'Cyber-Physical Systems', 'Sony Spresense'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Safe Guard - Emergency Alert Application',
      description: 'Developed Safe Guard, a real-time emergency alert mobile application designed to ensure personal safety during critical situations. Built using Flutter, the app provides GPS-based live location sharing, auto-dials emergency contacts, and includes an offline SMS fallback to maintain communication without internet access. Integrated third-party APIs to enhance location accuracy and messaging reliability. Emphasized accessibility and emergency UX principles through large tap targets, readable fonts, and low-latency response design. The app was field-tested on Android devices to ensure reliability and responsiveness under real-world conditions.',
      image: project3,
      technologies: ['Flutter (Dart)', 'GPS', 'SMS', 'Android'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
  ];

  const allProjects = [
    ...projects,
    // {
    //   id: 4,
    //   title: 'Task Management System',
    //   description: 'Collaborative project management tool with real-time updates.',
    //   technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 5,
    //   title: 'Weather Forecast App',
    //   description: 'Beautiful weather application with location-based forecasts.',
    //   technologies: ['React', 'OpenWeather API', 'Chart.js'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 6,
    //   title: 'Social Media Dashboard',
    //   description: 'Multi-platform social media management and analytics tool.',
    //   technologies: ['Angular', 'Node.js', 'PostgreSQL'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    // },
  ];

  return (
    <AnimatedSection>
      <section id="projects" className="py-20 relative overflow-hidden">
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
                Featured <span className="animate-text">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A showcase of my best work, from web applications to mobile apps and everything in between.
              </p>
            </motion.div>

            {/* Featured Projects */}
            <div className="mb-20">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 mb-20 last:mb-0`}
                >
                  {/* Project Image */}
                  <motion.div
                    className="lg:w-1/2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative group">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button size="sm" className="btn-gradient">
                          <Play size={16} className="mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3
                      className="text-3xl font-bold mb-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-muted-foreground text-lg mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-3 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 + (techIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <Button className="btn-gradient hover-lift">
                        <ExternalLink size={18} className="mr-2" />
                        Live Project
                      </Button>
                      <Button variant="outline" className="hover-glow">
                        <Github size={18} className="mr-2" />
                        View Code
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* All Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* <h3 className="text-3xl font-bold text-center mb-12">
                More <span className="animate-text">Projects</span>
              </h3> */}
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.slice(3).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass p-6 rounded-2xl hover-lift group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="h-2 bg-gradient-primary rounded-full mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                  />
                  
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="flex-1 hover-glow">
                      <ExternalLink size={14} className="mr-2" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 hover-glow">
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsSection;