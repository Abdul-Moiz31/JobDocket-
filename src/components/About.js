import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <span className="section-tag">About JobDocket</span>
            <h2 className="section-title">
              Simplify Your Job Search Journey
            </h2>
            <p className="section-description">
              Job hunting can be overwhelming. Keep track of every application, 
              never miss a follow-up, and stay organized—all in one place.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Your Data, Your Control</h3>
              <p>
                All your job applications are stored in your own Google Sheets. 
                You own the data, you control access, and you can export it anytime.
              </p>
            </motion.div>

            <motion.div 
              className="about-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>
                Save job applications with a single click. Auto-fill from popular 
                job boards means less typing and more applying.
              </p>
            </motion.div>

            <motion.div 
              className="about-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Secure & Private</h3>
              <p>
                We use industry-standard OAuth 2.0 authentication. No passwords stored, 
                no data shared with third parties. Your privacy is our priority.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="about-cta"
            variants={itemVariants}
          >
            <div className="cta-content">
              <h3>Ready to Get Started?</h3>
              <p>Join thousands of job seekers staying organized with JobDocket</p>
              <motion.a
                href="https://chromewebstore.google.com/detail/jobdocket/joajmfmkodfoolemphjehilkcfjeegbi"  
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Install Now - It's Free
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

