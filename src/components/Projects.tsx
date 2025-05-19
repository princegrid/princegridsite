import React, { useRef, useState } from 'react';
import { ExternalLink, Code, Eye, GitBranch, Code2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeSnippet?: string;
  image: string;
}

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Network Optimization Tool',
      description: 'An advanced tool for analyzing and optimizing network traffic patterns. Implements algorithms for finding optimal routing solutions and bandwidth allocation.',
      technologies: ['Python', 'NetworkX', 'Flask', 'Plotly'],
      codeSnippet: `def optimize_network_flow(graph, source, sink):
    # Algorithm to find maximum flow
    flow_value, flow_dict = nx.maximum_flow(
        graph, source, sink, flow_func=nx.algorithms.flow.edmonds_karp
    )
    return flow_value, flow_dict`,
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets. Features customizable charts, filters, and real-time data updates. Designed for financial data analysis.',
      technologies: ['JavaScript', 'React', 'D3.js', 'Firebase'],
      codeSnippet: `const createVisualization = (data, element) => {
    const svg = d3.select(element)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
        
    // Add visualization elements
    const chart = svg.append('g')
        .attr('transform', \`translate(\${margin.left},\${margin.top})\`);
}`,
      image: 'https://images.pexels.com/photos/7947404/pexels-photo-7947404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Game Automation Utility',
      description: 'A utility for automating repetitive tasks in gaming environments. Includes pattern recognition, decision-making algorithms, and a user-friendly interface.',
      technologies: ['Python', 'OpenCV', 'PyAutoGUI', 'Tkinter'],
      codeSnippet: `class GameAutomation:
    def __init__(self, game_window):
        self.window = game_window
        self.patterns = self.load_patterns()
        
    def recognize_pattern(self, screen):
        # Image processing to find patterns
        for pattern in self.patterns:
            result = cv2.matchTemplate(
                screen, pattern.template, cv2.TM_CCOEFF_NORMED
            )
            # Process matches`,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Educational Platform',
      description: 'A platform designed for interactive learning experiences. Features content management, progress tracking, and adaptive learning paths based on user performance.',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      codeSnippet: `function createAdaptivePath(userPerformance, availableModules) {
    // Calculate difficulty based on performance
    const recommendedLevel = analyzePerformance(userPerformance);
    
    // Filter and sort modules
    return availableModules
        .filter(module => module.level === recommendedLevel)
        .sort((a, b) => a.relevance - b.relevance);
}`,
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

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
                <button 
                  onClick={() => toggleProject(index)}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-lighter transition-colors"
                >
                  {activeProject === index ? <Eye size={18} /> : <Code size={18} />}
                  {activeProject === index ? 'Hide Code' : 'View Code'}
                </button>
                
                <div className="flex gap-2">
                  <button className="text-primary hover:text-primary-lighter transition-colors">
                    <GitBranch size={18} />
                  </button>
                  <button className="text-primary hover:text-primary-lighter transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              
              {activeProject === index && project.codeSnippet && (
                <div className="mt-4 bg-dark rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-300 text-sm">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;