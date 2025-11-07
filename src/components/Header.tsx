// src/components/Header.tsx
import Link from 'next/link';
import AdPlaceholder from './AdPlaceholder';

const Header = () => (
  <header className="w-full">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-text-light dark:text-white">
        DocuConvert
      </Link>
      {/* Dark Mode Toggle would go here */}
    </div>
    <AdPlaceholder width={728} height={90} text="AdSense Leaderboard (728x90)" />
  </header>
);

export default Header;
