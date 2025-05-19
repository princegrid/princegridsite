import React, { useRef } from 'react';
import { Code, Terminal, Database, Cloud } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const qualities = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'Software Development',
      description: 'Creating efficient, scalable applications with modern technologies.'
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: 'Data Engineering',
      description: 'Building robust data pipelines and analytical solutions.'
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: 'Cloud Technologies',
      description: 'Leveraging cloud infrastructure for optimal performance and scalability.'
    },
    {
      icon: <Terminal className="h-10 w-10 text-primary" />,
      title: 'Rapid Learning',
      description: 'Quickly adapting to new tools and technologies as needed.'
    }
  ];

  return (
    <section id="about" className="section">
      <div 
        ref={ref}
        className={`fade-in ${isInView ? 'visible' : ''}`}
      >
        <h2 className="heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              I'm a passionate technology enthusiast and software developer with a strong background in
              data analysis and engineering. My journey in tech has been driven by curiosity and the
              desire to create innovative solutions to complex problems.
            </p>
            <p className="text-gray-300 mb-6">
              With experience in both frontend and backend development, I enjoy working across the
              full stack and continuously expanding my knowledge in emerging technologies. I thrive in
              collaborative environments and am always eager to learn from peers and mentors.
            </p>
            <p className="text-gray-300">
              My approach combines technical expertise with analytical thinking, allowing me to develop
              efficient and maintainable solutions that meet real-world needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <div 
                key={index} 
                className="card hover:bg-dark-gray/80 hover:-translate-y-1"
              >
                <div className="mb-4">{quality.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-primary-lighter">{quality.title}</h3>
                <p className="text-gray-400 text-sm">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;