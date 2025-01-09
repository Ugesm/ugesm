import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="UGESM Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="font-bold text-xl text-gray-900">UGESM</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              À propos
            </Link>
            <Link href="/sections" className="text-gray-600 hover:text-green-600">
              Sections
            </Link>
            <Link href="/sections/tetouan" className="text-gray-600 hover:text-green-600">
              Tétouan
            </Link>
            <Link href="/sections/tanger" className="text-gray-600 hover:text-green-600">
              Tanger
            </Link>
            <Link href="/sections/oujda" className="text-gray-600 hover:text-green-600">
              Oujda
            </Link>
            <Link href="/sections/benguerir" className="text-gray-600 hover:text-green-600">
              Ben Guerir
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
