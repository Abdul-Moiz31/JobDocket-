import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div 
            className="hero-badge"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span className="badge-icon">🚀</span>
            <span>New Chrome Extension</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Apply Smarter, Not Harder
            <span className="gradient-text"> Track It All in Google Sheets</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            JobDocket helps you stay organized while job hunting. Automatically log your applications 
            straight to your personal Google Sheet and never lose track again.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="https://chromewebstore.google.com/detail/jobdocket/joajmfmkodfoolemphjehilkcfjeegbi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Add to Chrome
            </motion.a>
            
            <motion.a
              href="https://youtu.be/24yK8EXoibs"
              target="_blank"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Watch Demo
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">⚡</div>
              <div className="stat-label">Instant Setup</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">🔒</div>
              <div className="stat-label">Your Data</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          variants={itemVariants}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-image-container">
            <div className="hero-mockup">
              <div className="mockup-browser">
                <div className="mockup-browser-bar">
                  <div className="mockup-dot"></div>
                  <div className="mockup-dot"></div>
                  <div className="mockup-dot"></div>
                </div>
                <div className="mockup-content">
                    <div className="mockup-extension">
                      <div className="extension-header">
                        <img src="/logo.png" alt="JobDocket" className="extension-logo-img" />
                        <div className="extension-title">JobDocket</div>
                      </div>
                    <div className="extension-form">
                      <div className="form-field">
                        <label>Company</label>
                        <div className="form-input">Google</div>
                      </div>
                      <div className="form-field">
                        <label>Job Title</label>
                        <div className="form-input">Software Engineer</div>
                      </div>
                      <div className="form-buttons">
                        <button className="btn-save">Save</button>
                        <button className="btn-applied">Applied</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="floating-card card-1"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="card-icon">✅</div>
              <div className="card-text">Auto-filled!</div>
            </motion.div>
            <motion.div
              className="floating-card card-2"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="card-icon">📊</div>
              <div className="card-text">Saved to Sheets</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;

