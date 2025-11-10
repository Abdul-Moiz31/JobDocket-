import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
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
    <div className="privacy-policy-page">
      <motion.div
        className="privacy-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="privacy-header" variants={itemVariants}>
          <div className="privacy-logo-title">
            <img src="/logo.png" alt="JobDocket Logo" className="privacy-logo" />
            <h1>JobDocket Privacy Policy</h1>
          </div>
          <p className="last-updated">
            <strong>Last Updated:</strong> December 2024
          </p>
        </motion.div>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Introduction</h2>
          <p>
            JobDocket ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, store, and protect your 
            information when you use the JobDocket Chrome extension ("Extension").
          </p>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Data Collection</h2>
          <h3>Information We Collect</h3>
          <p>The Extension collects the following types of data:</p>

          <h3>1. Personally Identifiable Information</h3>
          <ul>
            <li>
              <strong>Google Account Information</strong>: When you sign in with Google, we collect your:
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Profile picture (if available)</li>
              </ul>
            </li>
          </ul>
          <p>
            This information is obtained through Google OAuth 2.0 authentication and is used 
            solely to identify you within the Extension and display your profile in the user interface.
          </p>

          <h3>2. Authentication Information</h3>
          <p>
            <strong>OAuth Access Tokens</strong>: We use OAuth tokens to authenticate with Google APIs 
            (Google Sheets API and Google Drive API) on your behalf. These tokens are stored securely 
            in Chrome's encrypted identity cache and are never shared with third parties.
          </p>

          <h3>3. Website Content</h3>
          <p>When you visit job posting pages, the Extension extracts:</p>
          <ul>
            <li>Company name</li>
            <li>Job title</li>
            <li>Job URL (web page address)</li>
            <li>Page content (to identify structured data like JSON-LD and microdata)</li>
            <li>Source/platform name (e.g., LinkedIn, Indeed)</li>
          </ul>
          <p>
            This data is only extracted when you actively interact with the Extension (click the 
            extension icon) and is used to auto-fill job application forms within the Extension.
          </p>

          <h3>4. User Activity (Limited)</h3>
          <p><strong>Extension Usage</strong>: We track basic interactions with the Extension such as:</p>
          <ul>
            <li>Button clicks within the Extension interface</li>
            <li>Form submissions (saving job applications)</li>
            <li>Extension icon clicks</li>
          </ul>
          <p><strong>We do NOT collect:</strong></p>
          <ul>
            <li>Keystroke logging</li>
            <li>Mouse movement tracking</li>
            <li>General browsing history</li>
            <li>Network monitoring</li>
            <li>Activity outside of the Extension interface</li>
          </ul>

          <h3>5. Job Application Data</h3>
          <p>When you save a job application, the Extension collects and stores:</p>
          <ul>
            <li>Job ID (auto-generated)</li>
            <li>Company name</li>
            <li>Job title</li>
            <li>Job URL</li>
            <li>Date of application</li>
            <li>Source/platform</li>
            <li>Application status ("Saved" or "Applied")</li>
            <li>Notes (optional, user-provided)</li>
          </ul>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>How We Use Your Data</h2>
          <h3>Primary Use Cases</h3>
          <ol>
            <li>
              <strong>Google Sheets Integration</strong>: Your job application data is saved to your 
              personal Google Sheets spreadsheet, which you own and control.
            </li>
            <li>
              <strong>Auto-Fill Functionality</strong>: Website content extraction is used to automatically 
              populate job application forms within the Extension, saving you time and reducing manual data entry.
            </li>
            <li>
              <strong>User Authentication</strong>: Your Google account information is used to authenticate 
              and identify you within the Extension, enabling secure access to Google Sheets.
            </li>
            <li>
              <strong>Local Storage</strong>: User profile information and spreadsheet ID are stored locally 
              in your browser using Chrome's secure local storage to maintain your session and preferences.
            </li>
          </ol>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Data Storage and Location</h2>
          <h3>Local Storage</h3>
          <p>
            <strong>Chrome Local Storage</strong>: User profile information (name, email, picture) and your 
            Google Spreadsheet ID are stored locally on your device using Chrome's encrypted local storage API. 
            This data remains on your device and is not transmitted to our servers.
          </p>

          <h3>Google Sheets</h3>
          <p>
            <strong>Google Drive</strong>: All job application data is stored in your personal Google Sheets 
            spreadsheet, which is created in your Google Drive. This data is:
          </p>
          <ul>
            <li>Owned and controlled entirely by you</li>
            <li>Subject to Google's Privacy Policy and Terms of Service</li>
            <li>Stored on Google's servers</li>
            <li>Accessible only to you (unless you explicitly share the spreadsheet)</li>
          </ul>

          <div className="privacy-highlight">
            <strong>No Third-Party Servers</strong><br />
            We do NOT transmit, store, or access your data on our own servers.<br />
            We do NOT use analytics services or tracking tools.<br />
            We do NOT share your data with third parties (except Google APIs, which you authorize directly).
          </div>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Third-Party Services</h2>
          <h3>Google Services</h3>
          <p>The Extension integrates with the following Google services:</p>
          <ul>
            <li><strong>Google OAuth 2.0</strong>: For secure user authentication</li>
            <li><strong>Google Sheets API v4</strong>: For creating and updating spreadsheets</li>
            <li><strong>Google Drive API</strong>: For managing spreadsheet files</li>
          </ul>
          <p>Your use of Google services is subject to:</p>
          <ul>
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="external-link-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                Google Terms of Service
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="external-link-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </li>
          </ul>
          <p>We only request the minimum permissions necessary:</p>
          <ul>
            <li><code>https://www.googleapis.com/auth/spreadsheets</code> - To read/write spreadsheet data</li>
            <li><code>https://www.googleapis.com/auth/drive.file</code> - To create spreadsheet files</li>
            <li><code>profile</code> and <code>email</code> - To identify you</li>
          </ul>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Data Security</h2>
          <p>We implement the following security measures:</p>
          <ol>
            <li><strong>OAuth 2.0 Authentication</strong>: Industry-standard secure authentication protocol</li>
            <li><strong>Chrome Encrypted Storage</strong>: All local data is stored using Chrome's encrypted storage API</li>
            <li><strong>No Remote Code Execution</strong>: All Extension code is bundled locally - no remote code execution</li>
            <li><strong>HTTPS Only</strong>: All API communications with Google use encrypted HTTPS connections</li>
            <li><strong>Minimal Data Collection</strong>: We only collect data necessary for the Extension's functionality</li>
          </ol>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Your Rights and Choices</h2>
          <h3>Access and Control</h3>
          <ul>
            <li><strong>View Your Data</strong>: All job application data is accessible in your Google Sheets spreadsheet</li>
            <li><strong>Edit Your Data</strong>: You can edit, delete, or modify any data directly in Google Sheets</li>
            <li><strong>Delete Local Data</strong>: Uninstalling the Extension removes locally stored data (profile, spreadsheet ID)</li>
          </ul>

          <h3>Authentication</h3>
          <ul>
            <li><strong>Sign Out</strong>: You can sign out of the Extension at any time, which revokes OAuth tokens</li>
            <li>
              <strong>Revoke Access</strong>: You can revoke the Extension's access to your Google account at any time 
              through <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                Google Account Settings
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="external-link-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </li>
          </ul>

          <h3>Data Deletion</h3>
          <ul>
            <li><strong>Delete Spreadsheet</strong>: You can delete your Google Sheets spreadsheet at any time through Google Drive</li>
            <li><strong>Remove Extension</strong>: Uninstalling the Extension removes all locally stored data</li>
          </ul>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Children's Privacy</h2>
          <p>
            The Extension is not intended for users under the age of 13. We do not knowingly collect personal 
            information from children under 13. If you believe we have collected information from a child under 13, 
            please contact us immediately.
          </p>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul>
            <li>Updating the "Last Updated" date at the top of this policy</li>
            <li>Posting a notice in the Chrome Web Store listing (if significant changes occur)</li>
          </ul>
          <p>
            Your continued use of the Extension after changes become effective constitutes acceptance of the 
            updated Privacy Policy.
          </p>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Data Retention</h2>
          <ul>
            <li>
              <strong>Local Storage</strong>: Data stored locally (user profile, spreadsheet ID) persists until 
              you uninstall the Extension or clear Chrome's extension data.
            </li>
            <li>
              <strong>Google Sheets</strong>: Job application data stored in your Google Sheets persists until 
              you delete the spreadsheet. You have full control over this data.
            </li>
          </ul>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>International Data Transfers</h2>
          <p>
            If you use the Extension outside the United States, your data (stored in Google Sheets) may be 
            transferred to and processed in the United States or other countries where Google operates. This 
            transfer is governed by Google's Privacy Policy and Terms of Service.
          </p>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <h2>Compliance</h2>
          <p>This Extension complies with:</p>
          <ul>
            <li>Chrome Web Store Developer Program Policies</li>
            <li>General Data Protection Regulation (GDPR) principles</li>
            <li>California Consumer Privacy Act (CCPA) requirements</li>
          </ul>
        </motion.section>

        <motion.section className="privacy-section" variants={itemVariants}>
          <div className="privacy-contact">
            <h2>Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <ul>
              <li><strong>Email</strong>: <a href="mailto:abdulmoiz3140@gmail.com">abdulmoiz3140@gmail.com</a></li>
            </ul>
          </div>
        </motion.section>

        <motion.div className="privacy-highlight privacy-note" variants={itemVariants}>
          <strong>Important Note</strong><br />
          This Extension does not use analytics, tracking pixels, cookies for tracking purposes, or any 
          third-party services beyond Google APIs. All data remains under your control.
        </motion.div>

        <motion.div className="privacy-back-link" variants={itemVariants}>
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

