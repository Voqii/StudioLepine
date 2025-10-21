import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cobweb from '../components/Cobweb';
import FlyingBats from '../components/FlyingBats';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 🎃 Halloween Decorations */}
      <Cobweb corner="top-left" />
      <Cobweb corner="top-right" />
      <FlyingBats />

      {/* Spooky gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/5 via-transparent to-halloween-orange/5 pointer-events-none" />

      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
