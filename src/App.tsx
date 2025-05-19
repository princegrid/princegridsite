import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Interests />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;