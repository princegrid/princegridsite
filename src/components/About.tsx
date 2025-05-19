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
              hi, i'm princegrid
            </p>
            <p className="text-gray-300 mb-6">
              i’m a young guy from the uk with asd and adhd. i’m also heavily addicted to dbd.<br />
              wesker main. exploiting is fun. don't judge me.
            </p>
            <p className="text-gray-300 mb-6">
              i’m a comp sci student (almost finished) with a deep connection to tech and how it works.<br />
              i like breaking things, learning how they tick, and occasionally making cool stuff too.
            </p>
            <p className="text-gray-300">
              this site’s a work in progress, so bear with me while i fix it up.
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