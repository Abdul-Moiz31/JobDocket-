import React from 'react';
import { motion } from 'framer-motion';
import './HowToUse.css';

const HowToUse = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Extension",
      description: "Add JobDocket to Chrome from the Chrome Web Store. It's free and takes just a few seconds.",
      icon: "📥"
    },
    {
      number: "02",
      title: "Sign In with Google",
      description: "Click the extension icon and sign in with your Google account. We use secure OAuth authentication.",
      icon: "🔑"
    },
    {
      number: "03",
      title: "Create Your Sheet",
      description: "Click 'Create My Google Sheet' to set up your tracking spreadsheet. It's automatically saved to your Drive.",
      icon: "📊"
    },
    {
      number: "04",
      title: "Start Tracking Jobs",
      description: "Visit any job posting, click the extension icon, and save! Auto-fill works on LinkedIn, Indeed, and more.",
      icon: "✨"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-to-use" className="how-to-use">
      <div className="how-to-use-container">
        <motion.div
          className="how-to-use-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="how-to-use-header" variants={itemVariants}>
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">
              Get Started in 4 Simple Steps
            </h2>
            <p className="section-description">
              Setting up JobDocket is quick and easy. Start tracking your applications in minutes.
            </p>
          </motion.div>

          <div className="steps-container">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="step-connector"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="how-to-use-cta"
            variants={itemVariants}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>Ready to streamline your job search?</h3>
            <motion.a
              href="https://chromewebstore.google.com/detail/jobdocket/joajmfmkodfoolemphjehilkcfjeegbi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Install JobDocket Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;

