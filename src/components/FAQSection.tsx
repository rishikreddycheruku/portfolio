import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern network technologies along with C++, and Python. I also have experience with cloud platforms like AWS and modern database systems like PostgreSQL and MongoDB. I'm always learning new technologies to stay current with industry trends."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple landing page might take 1-2 weeks, while a full-stack web application could take 2-3 months. I always provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you work with remote teams?",
      answer: "Absolutely! I've worked with remote teams and have excellent communication skills. I'm comfortable using various collaboration tools like Slack, Discord, Zoom, and project management platforms. Clear communication and regular updates are key to successful remote collaboration."
    },
    {
      question: "What's your development process like?",
      answer: "I follow an agile development approach with regular milestones and feedback loops. The process typically includes: discovery and planning, wireframing and design, development with regular check-ins, testing and quality assurance, deployment, and ongoing support. I believe in transparent communication throughout the entire process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! I offer ongoing support and maintenance packages to ensure your application stays secure, performant, and up-to-date. This includes regular updates, security patches, performance monitoring, and feature enhancements as your business grows."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Definitely! I can help with code reviews, bug fixes, performance optimization, feature additions, and refactoring legacy code. I'm experienced in jumping into existing codebases and can quickly understand and improve upon existing architecture."
    },
    {
      question: "What makes you different from other developers?",
      answer: "I combine technical expertise with a strong focus on user experience and business outcomes. I don't just write code – I solve problems. My background in both development and design allows me to create solutions that are not only technically sound but also beautiful and user-friendly."
    },
    {
      question: "How do you handle project pricing?",
      answer: "I offer both fixed-price and hourly rate options depending on the project scope. For well-defined projects, I prefer fixed pricing to give you budget certainty. For ongoing work or projects with evolving requirements, hourly rates work better. I always provide detailed estimates upfront."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked <span className="animate-text">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Got questions? I've got answers! Here are some common questions I receive from clients.
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-2xl overflow-hidden hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center"
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus size={18} className="text-white" />
                      ) : (
                        <Plus size={18} className="text-white" />
                      )}
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="px-6 pb-6"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="h-px bg-gradient-primary mb-4 rounded-full" />
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't hesitate to reach out! I'm always happy to discuss your project 
                  and answer any specific questions you might have.
                </p>
                <motion.button
                  className="btn-gradient px-8 py-3 rounded-full font-medium hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute top-1/2 right-0 w-1/3 h-full -z-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-5"
              style={{
                background: `var(--gradient-${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})`,
                width: `${150 + (i * 75)}px`,
                height: `${150 + (i * 75)}px`,
                top: `${20 + (i * 25)}%`,
                right: `${-50 + (i * 20)}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                x: [0, 20, -20, 0],
              }}
              transition={{
                duration: 20 + (i * 5),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FAQSection;