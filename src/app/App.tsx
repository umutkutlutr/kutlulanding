import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProofStrip } from "./components/proof-strip";
import { Expertise } from "./components/expertise";
import { Industries } from "./components/industries";
import { Process } from "./components/process";
import { Work } from "./components/work";
import { DiscoveryCall } from "./components/discovery-call";
import { Maintenance } from "./components/maintenance";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { CursorFollower } from "./components/cursor-follower";
import { ScrollProgress } from "./components/scroll-progress";
import { ScrollVortex } from "./components/scroll-vortex";

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1a1d29] antialiased">
      <ScrollVortex />
      <CursorFollower />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Expertise />
        <Industries />
        <Process />
        <Work />
        <DiscoveryCall />
        <Maintenance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}