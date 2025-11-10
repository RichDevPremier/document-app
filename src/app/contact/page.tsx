// src/app/contact/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the DocuConvert team.',
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-background-dark/30 p-8 rounded-lg shadow-md border border-border-light dark:border-border-dark">
        <h1 className="text-3xl font-bold text-text-light dark:text-white mb-6">Contact Us</h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>If you have any questions, feedback, or concerns, please do not hesitate to reach out to us. We are here to help and will do our best to respond as quickly as possible.</p>
          
          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">Our Email</h2>
          <p>For any inquiries, you can email us at:</p>
          <a href="mailto:support@docuconvert.com" className="text-primary hover:underline">support@docuconvert.com</a>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">Business Inquiries</h2>
          <p>For any business-related inquiries, please contact us at:</p>
          <a href="mailto:business@docuconvert.com" className="text-primary hover:underline">business@docuconvert.com</a>

          <p className="mt-6">Please note that we do not offer phone support at this time.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

