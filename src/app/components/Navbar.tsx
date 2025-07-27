'use client';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide"> Memorama</h1>

      <div className="flex space-x-4">
        <a href="/" className="hover:text-gray-200 transition">Inicio</a>
        <a href="/jugar" className="hover:text-gray-200 transition">Jugar</a>
        <a href="/ranking" className="hover:text-gray-200 transition">Ranking</a>
        <a href="/acerca-de" className="hover:text-gray-200 transition">Acerca de</a>
        

      </div>
    </nav>
  );
};

export default Navbar;
