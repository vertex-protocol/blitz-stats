import Image from 'next/image';
import blitzLogo from '../../public/blitz-logo.svg';

export default function NavBar() {
  return (
    <nav className="flex justify-between py-4 px-10 bg-gray-3 border-b border-gray-2 text-white">
      <a href="https://blitz.exchange/" target="_blank">
        <Image src={blitzLogo} alt="blitz-logo" height={20} />
      </a>
      <div className="flex gap-4">
        <a href="https://app.blitz.exchange/markets" target="_blank">
          App
        </a>
        <a href="https://docs.blitz.exchange/" target="_blank">
          Docs
        </a>
      </div>
    </nav>
  );
}
