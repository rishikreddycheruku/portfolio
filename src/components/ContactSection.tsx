import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'crishikreddy@gmail.com',
      href: 'mailto:crishikreddy@gmail.com',
      color: 'var(--gradient-primary)',
      target: '_self',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6300436107',
      href: 'tel:+916300436107',
      color: 'var(--gradient-secondary)',
      target: '_self',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tirupati, Andhra Pradesh, India',
      href: 'https://maps.google.com/?q=Tirupati,+Andhra+Pradesh,+India',
      color: 'var(--gradient-accent)',
      target: '_blank',
    },
    {
      icon: Coffee,
      label: 'Coffee Chat',
      value: 'Let\'s grab coffee!',
      href: 'mailto:crishikreddy@gmail.com?subject=Coffee%20Chat%20Request',
      color: 'var(--gradient-primary)',
      target: '_self',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/rishikreddycheruku/', target: '_blank' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rishikreddycheruku/', target: '_blank' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/', target: '_blank', followers: '' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <AnimatedSection>
      <section id="contact" className="py-20 relative overflow-hidden">
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
                Let's <span className="animate-text">Connect</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Want to collaborate? Or just want to say hello? 
                I'd love to hear from you!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.target}
                      rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="flex items-center group hover-lift glass p-6 rounded-2xl"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="p-3 rounded-xl mr-4"
                        style={{ background: item.color }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {item.label}
                        </p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target={social.target}
                        rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="glass p-4 rounded-2xl hover-glow group"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <social.icon size={24} className="text-primary group-hover:text-accent transition-colors" />
                        <div className="text-xs text-muted-foreground mt-2 text-center">
                          {social.followers}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Fun Fact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-12 glass p-6 rounded-2xl"
                >
                  <h4 className="text-lg font-semibold mb-3">💡 Fun Fact</h4>
                  <p className="text-muted-foreground">
                    I'm always up for a good conversation about technology, design, 
                    or the latest sci-fi movie. Coffee is optional but highly recommended! ☕
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="hover-glow focus:glow-primary transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="hover-glow focus:glow-primary transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="hover-glow focus:glow-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="hover-glow focus:glow-primary transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient hover-lift"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </motion.div>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <motion.p
                    className="text-sm text-muted-foreground text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    I typically respond within 24 hours. Looking forward to hearing from you! 🚀
                  </motion.p>
                </form>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="glass p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
                <motion.h3
                  className="text-3xl font-bold mb-6"
                  whileInView={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  viewport={{ once: true }}
                >
                  Ready to Build Something Amazing?
                </motion.h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'm here to help turn your ideas into reality.
                </p>
                <Button 
                  size="lg" 
                  className="btn-gradient hover-lift"
                  onClick={() => window.open('mailto:crishikreddy@gmail.com?subject=Coffee%20Chat%20Request', '_self')}
                >
                  <Coffee size={20} className="mr-2" />
                  Schedule a Coffee Chat
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 -z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-5"
              style={{
                background: `var(--gradient-${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})`,
                width: `${100 + (i * 30)}px`,
                height: `${100 + (i * 30)}px`,
                bottom: `${Math.random() * 50}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + (i * 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactSection;