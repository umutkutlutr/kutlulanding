import { useEffect, lazy, Suspense } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ScrollProgress } from "./components/scroll-progress";

// Lazy load heavy components for better initial load performance
const ScrollVortex = lazy(() => 
  import("./components/scroll-vortex").then(m => ({ default: m.ScrollVortex }))
);
const CursorFollower = lazy(() => 
  import("./components/cursor-follower").then(m => ({ default: m.CursorFollower }))
);
const ProofStrip = lazy(() => 
  import("./components/proof-strip").then(m => ({ default: m.ProofStrip }))
);
const Expertise = lazy(() => 
  import("./components/expertise").then(m => ({ default: m.Expertise }))
);
const Industries = lazy(() => 
  import("./components/industries").then(m => ({ default: m.Industries }))
);
const Process = lazy(() => 
  import("./components/process").then(m => ({ default: m.Process }))
);
const Work = lazy(() => 
  import("./components/work").then(m => ({ default: m.Work }))
);
const DiscoveryCall = lazy(() => 
  import("./components/discovery-call").then(m => ({ default: m.DiscoveryCall }))
);
const Maintenance = lazy(() => 
  import("./components/maintenance").then(m => ({ default: m.Maintenance }))
);
const Contact = lazy(() => 
  import("./components/contact").then(m => ({ default: m.Contact }))
);
const Footer = lazy(() => 
  import("./components/footer").then(m => ({ default: m.Footer }))
);

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1a1d29] antialiased">
      <Suspense fallback={null}>
      <ScrollVortex />
      <CursorFollower />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
        <ProofStrip />
        <Expertise />
        <Industries />
        <Process />
        <Work />
        <DiscoveryCall />
        <Maintenance />
        <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
      <Footer />
      </Suspense>
    </div>
  );
}