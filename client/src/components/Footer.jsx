import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold">KinzaTechSolutions</p>
        <p className="text-sm text-slate-500">Engineering digital experiences that scale.</p>
      </div>
      <div className="flex items-center gap-4 text-xl">
        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://twitter.com" aria-label="Twitter"><FaXTwitter /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
