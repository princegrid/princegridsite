import React, { useRef } from 'react';
import { ExternalLink, GitBranch, Code } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const projects: Project[] = [
    {
      title: 'Steam Purchase Exporter',
      description: 'GUI browser extension tool that extracts and exports your Steam purchase history as structured JSON.',
      technologies: ['Python', 'Steam', 'CLI'],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      githubUrl: 'https://github.com/princegrid/steampurchaseexporter'
    },
    {
      title: 'DBD Server Blocker (Public)',
      description: 'Blocks known bad DBD servers to improve matchmaking quality. (Or if u cant afford a vpn u can use this i think)',
      technologies: ['Python', 'Windows Batch', 'Firewall Rules'],
      image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      githubUrl: 'https://github.com/princegrid/dbdserverblocker'
    },
    {
      title: 'Video Compressor',
      description: 'GUI tool that compresses videos using FFmpeg, with options for quality and format.',
      technologies: ['Electron', 'FFmpeg', 'Node.js'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      githubUrl: 'https://github.com/princegrid/videocompressor'
    }
  ];

  return (
    <section id="projects" className="section bg-dark-gray/30">
      <div 
        ref={ref}
        className={`fade-in ${isInView ? 'visible' : ''}`}
      >
        <h2 className="heading">Technical Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden flex flex-col h-full">
              <div 
                className="h-48 overflow-hidden relative rounded-t-lg mb-4 -mx-6 -mt-6"
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-dark/70 text-primary-lighter text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-auto">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-lighter transition-colors"
                >
                  <Code size={18} />
                  View Code
                </a>
                
                <div className="flex gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter transition-colors">
                    <GitBranch size={18} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
