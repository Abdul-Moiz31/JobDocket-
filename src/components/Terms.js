import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import './Terms.css';

const Terms = () => {
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
    hidden: { y: 20, opacity: 0 },
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
    <div className="terms-page">
      <motion.div
        className="terms-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="terms-header" variants={itemVariants}>
          <div className="terms-logo-title">
            <img src="/logo.png" alt="JobDocket Logo" className="terms-logo" />
            <h1>Terms of Service</h1>
          </div>
          <p className="last-updated">
            <strong>Last Updated:</strong> December 2024
          </p>
        </motion.div>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the JobDocket Chrome extension ("Extension"), you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, please do not use 
            this service.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>2. Description of Service</h2>
          <p>
            JobDocket is a Chrome browser extension that helps users track job applications by integrating with 
            Google Sheets. The Extension allows you to:
          </p>
          <ul>
            <li>Save job application information to your personal Google Sheets</li>
            <li>Auto-fill job details from various job posting websites</li>
            <li>Track application status and manage your job search</li>
            <li>Access your data through your Google Drive account</li>
          </ul>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>3. User Accounts and Google Authentication</h2>
          <p>
            To use JobDocket, you must sign in with your Google account. By signing in, you:
          </p>
          <ul>
            <li>Grant JobDocket permission to access your Google Sheets and Google Drive (limited to files created by the Extension)</li>
            <li>Agree to comply with Google's Terms of Service and Privacy Policy</li>
            <li>Are responsible for maintaining the security of your Google account</li>
            <li>Are responsible for all activities that occur under your account</li>
          </ul>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>4. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use the Extension only for lawful purposes and in accordance with these Terms</li>
            <li>Not use the Extension to violate any applicable laws or regulations</li>
            <li>Not attempt to gain unauthorized access to any portion of the Extension</li>
            <li>Not interfere with or disrupt the Extension or servers connected to it</li>
            <li>Provide accurate and complete information when using the Extension</li>
            <li>Maintain the confidentiality of your account credentials</li>
          </ul>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>5. Data Ownership and Storage</h2>
          <p>
            All data created and stored through JobDocket belongs to you. Your job application data is stored in 
            your personal Google Sheets, which you own and control. JobDocket:
          </p>
          <ul>
            <li>Does not claim ownership of your data</li>
            <li>Does not access your data except as necessary to provide the service</li>
            <li>Does not share your data with third parties (except Google APIs as authorized by you)</li>
            <li>Does not store your data on our servers</li>
          </ul>
          <p>
            You are responsible for backing up your data and managing access to your Google Sheets.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>6. Third-Party Services</h2>
          <p>
            JobDocket integrates with Google services (Google Sheets API and Google Drive API). Your use of these 
            services is subject to:
          </p>
          <ul>
            <li>
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                Google Terms of Service
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="external-link-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="external-link-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </li>
          </ul>
          <p>
            JobDocket is not responsible for the availability, accuracy, or reliability of Google services.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>7. Intellectual Property</h2>
          <p>
            The JobDocket Extension, including its design, code, graphics, and functionality, is the property of 
            JobDocket and is protected by copyright and other intellectual property laws. You may not:
          </p>
          <ul>
            <li>Copy, modify, or distribute the Extension without permission</li>
            <li>Reverse engineer or attempt to extract the source code</li>
            <li>Use the Extension's name or logo without authorization</li>
            <li>Remove any copyright or proprietary notices</li>
          </ul>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>8. Service Availability</h2>
          <p>
            JobDocket is provided "as is" and "as available." We do not guarantee that:
          </p>
          <ul>
            <li>The Extension will be available at all times or without interruption</li>
            <li>The Extension will be error-free or free from defects</li>
            <li>The Extension will meet your specific requirements</li>
            <li>Any errors will be corrected</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue the Extension at any time without notice.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, JobDocket and its developers shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including but not limited to:
          </p>
          <ul>
            <li>Loss of data or information</li>
            <li>Loss of profits or business opportunities</li>
            <li>Service interruptions or failures</li>
            <li>Errors or inaccuracies in the Extension</li>
          </ul>
          <p>
            Your use of the Extension is at your own risk. You are responsible for maintaining backups of your data.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>10. Disclaimer of Warranties</h2>
          <p>
            The Extension is provided "as is" without warranties of any kind, either express or implied, including but 
            not limited to:
          </p>
          <ul>
            <li>Warranties of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy or reliability</li>
          </ul>
          <p>
            We do not warrant that the Extension will be uninterrupted, secure, or error-free.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless JobDocket, its developers, and affiliates from any claims, 
            damages, losses, liabilities, and expenses (including legal fees) arising out of:
          </p>
          <ul>
            <li>Your use of the Extension</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your violation of any applicable laws or regulations</li>
          </ul>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>12. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Extension at any time, without prior notice, 
            for any reason, including but not limited to:
          </p>
          <ul>
            <li>Violation of these Terms</li>
            <li>Fraudulent or illegal activity</li>
            <li>Misuse of the Extension</li>
            <li>At our sole discretion</li>
          </ul>
          <p>
            You may stop using the Extension at any time by uninstalling it from your browser. Upon termination, your 
            data will remain in your Google Sheets as it is stored in your Google Drive.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>13. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
          </p>
          <ul>
            <li>Updating the "Last Updated" date at the top of this page</li>
            <li>Posting a notice in the Chrome Web Store listing (if significant changes occur)</li>
          </ul>
          <p>
            Your continued use of the Extension after changes become effective constitutes acceptance of the updated Terms. 
            If you do not agree to the modified Terms, you must stop using the Extension.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict 
            of law principles. Any disputes arising from these Terms or your use of the Extension shall be subject to the 
            exclusive jurisdiction of the courts in the applicable jurisdiction.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions 
            shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that 
            most closely reflects the intent of the original provision.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <h2>16. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and JobDocket 
            regarding your use of the Extension and supersede all prior agreements and understandings.
          </p>
        </motion.section>

        <motion.section className="terms-section" variants={itemVariants}>
          <div className="terms-contact">
            <h2>17. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li><strong>Email</strong>: <a href="mailto:abdulmoiz3140@gmail.com">abdulmoiz3140@gmail.com</a></li>
            </ul>
          </div>
        </motion.section>

        <motion.div className="terms-back-link" variants={itemVariants}>
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Terms;

