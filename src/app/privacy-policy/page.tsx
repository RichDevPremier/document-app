// src/app/privacy-policy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy for DocuConvert to understand how we handle your data.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-background-dark/30 p-8 rounded-lg shadow-md border border-border-light dark:border-border-dark">
        <h1 className="text-3xl font-bold text-text-light dark:text-white mb-6">Privacy Policy</h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>Last updated: [Date]</p>
          
          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">1. Introduction</h2>
          <p>Welcome to DocuConvert. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">2. Information We Collect</h2>
          <p>We do not collect any personal information from you when you use our service. The files you upload for conversion are processed on our servers and are automatically deleted after a short period (e.g., 1 hour). We do not store your files or any of the data contained within them.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">3. Use of Cookies</h2>
          <p>We use cookies to enhance your experience, to display advertisements, and to analyze our website traffic. A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.</p>
          <p>We use third-party advertising companies, such as Google AdSense, to serve ads when you visit the website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">4. Your Consent</h2>
          <p>By using our site, you consent to our website's privacy policy.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">5. Changes to our Privacy Policy</h2>
          <p>If we decide to change our privacy policy, we will post those changes on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via our contact page.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

