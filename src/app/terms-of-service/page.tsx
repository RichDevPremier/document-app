// src/app/terms-of-service/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for DocuConvert.',
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-background-dark/30 p-8 rounded-lg shadow-md border border-border-light dark:border-border-dark">
        <h1 className="text-3xl font-bold text-text-light dark:text-white mb-6">Terms of Service</h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>Last updated: [Date]</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">1. Agreement to Terms</h2>
          <p>By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">2. Use of Service</h2>
          <p>DocuConvert provides a free file conversion service. You agree to use our service only for lawful purposes. You are solely responsible for the content of the files you upload. You agree not to upload any files that infringe on any copyright, patent, trademark, or other proprietary rights.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">3. Disclaimer of Warranties</h2>
          <p>Our service is provided "as is" without any warranties of any kind. We do not guarantee that the service will be error-free or that the converted files will be accurate or reliable. You use our service at your own risk.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">4. Limitation of Liability</h2>
          <p>In no event shall DocuConvert be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use our service.</p>

          <h2 className="text-2xl font-semibold text-text-light dark:text-white mt-6 mb-2">5. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

