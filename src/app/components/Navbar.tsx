'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"> Memorama</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-yellow-300 transition">Inicio</Link>
          <Link href="/jugar" className="hover:text-yellow-300 transition">Jugar</Link>
          <Link href="/ranking" className="hover:text-yellow-300 transition">Ranking</Link>
          <Link href="/modo-reloj" className="hover:text-yellow-300 transition">Modo Reloj</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
