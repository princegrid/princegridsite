import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const roles = [
  'cat lover',
  'dbd exploiter',
  'tech lover',
  'coding genius',
];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const fullText = roles[currentRole];
    let updatedText = '';

    if (isDeleting) {
      updatedText = fullText.substring(0, displayText.length - 1);
      setTypingSpeed(25);
    } else {
      updatedText = fullText.substring(0, displayText.length + 1);
      setTypingSpeed(50);
    }

    const timeout = setTimeout(() => {
      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      <div 
        ref={ref}
        className={`text-center px-4 max-w-5xl transition-all duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          hi im <span className="gradient-text">princegrid :3</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
          <span className="typing">{displayText}</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#about" className="btn btn-primary flex items-center justify-center gap-2">
            About Me <ArrowRight size={18} />
          </a>
          <a href="#projects" className="btn btn-outline flex items-center justify-center gap-2">
            See My Work <ArrowRight size={18} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
