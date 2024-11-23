import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Code, 
  Database, 
  Globe, 
  LineChart, 
  Search, 
  Laptop,
  Cloud,
  Server
} from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      y: [y, y - 10, y],
      x: [x, x + 5, x]
    }}
    transition={{
      duration: 3,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    className="absolute text-blue-500/20"
  >
    <Icon size={24} />
  </motion.div>
);

const ContactForm = () => {
  const [focused, setFocused] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const inputClasses = `
    w-full px-6 py-4 bg-[#1d1d2b]/50 text-gray-300 rounded-xl 
    outline-none focus:ring-2 focus:ring-blue-600 
    backdrop-blur-sm border border-blue-600/20
    transform transition-all duration-300 hover:scale-[1.02] 
    focus:scale-[1.02] placeholder-gray-500/50
  `;

  const floatingIcons = [
    { Icon: Code, x: '10%', y: '20%', delay: 0 },
    { Icon: Database, x: '85%', y: '15%', delay: 0.5 },
    { Icon: Globe, x: '75%', y: '75%', delay: 1 },
    { Icon: LineChart, x: '15%', y: '85%', delay: 1.5 },
    { Icon: Cloud, x: '90%', y: '45%', delay: 2 },
    { Icon: Server, x: '5%', y: '50%', delay: 2.5 }
  ];

  return (
    <div className="min-h-screen bg-[#1101d] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-slate-900/10" />
      
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon 
          key={index}
          icon={icon.Icon}
          delay={icon.delay}
          x={icon.x}
          y={icon.y}
        />
      ))}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-800/10 rounded-2xl blur-3xl" />
        
        <div className="relative bg-[#1d1d2b]/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-blue-500/10">
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-2">
              <Laptop className="w-6 h-6 text-blue-400" />
              <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <Search className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-gray-400 text-center text-lg">
              Ready to elevate your digital presence?
            </p>
          </motion.div>

          <form 
            action="https://formsubmit.co/6fc5eaa03d06a86f2bd54eb032746ed3"
            method="POST"
            className="space-y-6"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={inputClasses}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                />
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-slate-600 transition-all duration-300 ${focused === 'name' ? 'w-full' : ''}`} />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className={inputClasses}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                />
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-slate-600 transition-all duration-300 ${focused === 'email' ? 'w-full' : ''}`} />
              </div>
              <div className="group relative">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  className={inputClasses}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused('')}
                />
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-slate-600 transition-all duration-300 ${focused === 'phone' ? 'w-full' : ''}`} />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="group relative"
            >
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className={`${inputClasses} h-40 resize-none`}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
              />
              <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-slate-600 transition-all duration-300 ${focused === 'message' ? 'w-full' : ''}`} />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-4 text-lg font-semibold text-white rounded-xl 
                relative overflow-hidden group transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-800 transition-all duration-300 group-hover:scale-110" />
              <div className="relative flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </div>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;