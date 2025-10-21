import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cobweb from '../components/Cobweb';
import FlyingBats from '../components/FlyingBats';
import HauntedBackground from '../components/HauntedBackground';
import FogParticles from '../components/FogParticles';
import HalloweenSounds from '../components/HalloweenSounds';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-halloween-black text-white">
      {/* 🎃 HALLOWEEN ATMOSPHERE LAYERS */}

      {/* Layer 1: Haunted house scene with moon */}
      <HauntedBackground />

      {/* Layer 2: Fog particles */}
      <FogParticles />

      {/* Layer 3: Cobwebs in three corners (bottom-right removed to avoid blocking mute button) */}
      <Cobweb corner="top-left" />
      <Cobweb corner="top-right" />
      <Cobweb corner="bottom-left" />

      {/* Layer 4: Flying bats */}
      <FlyingBats />

      {/* Sound system with mute toggle */}
      <HalloweenSounds />

      {/* Main content */}
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
