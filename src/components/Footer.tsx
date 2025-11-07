// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => (
  <footer className="flex flex-col gap-6 px-5 py-10 text-center @container border-t border-border-light dark:border-border-dark mt-10">
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 @[480px]:flex-row @[480px]:justify-center">
      <Link className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal hover:text-primary dark:hover:text-primary" href="#">Privacy Policy</Link>
      <Link className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal hover:text-primary dark:hover:text-primary" href="#">Terms of Service</Link>
      <Link className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal hover:text-primary dark:hover:text-primary" href="#">Contact</Link>
    </div>
    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">© 2024 DocuConvert. All Rights Reserved.</p>
  </footer>
);

export default Footer;

