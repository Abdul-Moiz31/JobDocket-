import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: "🔐",
      title: "Secure Google Authentication",
      description: "Sign in with your Google account using industry-standard OAuth 2.0. Your credentials are never stored."
    },
    {
      icon: "📊",
      title: "Automatic Sheet Creation",
      description: "Creates a beautifully organized Google Sheet in your Drive. No manual setup required."
    },
    {
      icon: "🤖",
      title: "Smart Auto-Fill",
      description: "Extracts job information from LinkedIn, Indeed, Glassdoor, and more. Save time with one-click filling."
    },
    {
      icon: "💾",
      title: "One-Click Save",
      description: "Save job applications instantly. Mark as 'Saved' for later or 'Applied' if already submitted."
    },
    {
      icon: "🔄",
      title: "Persistent Storage",
      description: "Your sheet is saved and reused across sessions. Never lose your application history."
    },
    {
      icon: "✅",
      title: "Status Tracking",
      description: "Easily track which jobs you've saved vs. applied. Filter and organize in Google Sheets."
    },
    {
      icon: "🎨",
      title: "Modern UI",
      description: "Clean, intuitive interface with real-time notifications. Beautiful design that's easy to use."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Works seamlessly in Chrome popup window. Optimized for quick access and efficiency."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="features">
      <div className="features-container">
        <motion.div
          className="features-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="features-header" variants={itemVariants}>
            <span className="section-tag">Features</span>
            <h2 className="section-title">
              Everything You Need to Stay Organized
            </h2>
            <p className="section-description">
              Powerful features designed to make job application tracking effortless
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

