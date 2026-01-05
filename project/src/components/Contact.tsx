import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = 'service_7f9pz18';
    const TEMPLATE_ID = 'template_z6apcp6';
    const PUBLIC_KEY = 'dJjqtTiW6xUVDSweV';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('FAILED...', error);
      alert(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-12 py-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-300 backdrop-blur-sm";
  const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1";

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-lime-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-color)] to-lime-500 border-none">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info / visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-lime-500 rounded-3xl opacity-30 blur-2xl transform rotate-6 scale-105" />
              <div className="relative bg-white/80 dark:bg-[var(--card-bg)] p-8 rounded-3xl border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-green-50 dark:bg-white/5 hover:bg-green-100 dark:hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 dark:text-green-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                      <p className="text-gray-900 dark:text-white font-medium">janartanan47@gmail.com</p>
                    </div>
                  </div>
                  {/* Add more contact info or social links here if available */}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-green-50 dark:bg-white/5 border border-green-100 dark:border-white/5">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    “Choose a job you love, and you will never have to work a day in your life.”
                  </p>
                  <p className="text-[var(--accent-color)] mt-4 font-semibold">- Confucius</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-[var(--card-bg)] p-8 rounded-3xl border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden">

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white/95 dark:bg-[var(--card-bg)] z-50 flex flex-col items-center justify-center p-8 backdrop-blur-xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30"
                    >
                      <CheckCircle size={40} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">Thank you for reaching out. I'll get back to you soon.</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-full text-gray-900 dark:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-1">
                <label className={labelClasses}>Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelClasses}>Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelClasses}>Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-gray-500 dark:text-gray-400" size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={inputClasses}
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[var(--accent-color)] to-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 flex items-center justify-center space-x-2 hover:shadow-green-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;