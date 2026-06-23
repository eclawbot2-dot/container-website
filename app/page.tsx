import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Lineup } from '@/components/Lineup';
import { Visit } from '@/components/Visit';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ember focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Lineup />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
