import React from 'react';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta sea correcta

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;
