import React, { useRef, useEffect, useState } from 'react';
import { Code2, Database, Cloud, Laptop } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  icon: JSX.Element;
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isInView]);
  
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, description: 'Advanced: GUI development, automation, APIs' },
        { name: 'C++', level: 65, description: 'Intermediate: Automation applications' },
        { name: 'JavaScript/TypeScript', level: 80, description: 'Game development, React' },
        { name: 'SQL', level: 75, description: 'Database management' }
      ]
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: 'Technologies & Frameworks',
      skills: [
        { name: 'React with Vite.js', level: 85, description: 'Modern web applications' },
        { name: 'Flask', level: 70, description: 'Web framework for Python' },
        { name: 'MySQL', level: 75, description: 'Database management' },
        { name: 'Kaboom.js', level: 60, description: 'Game development' }
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 70, description: 'Cloud services' },
        { name: 'Linux CLI', level: 80, description: 'Command line operations' },
        { name: 'Networking', level: 75, description: 'Virtual network simulation' },
        { name: 'Server Management', level: 65, description: 'Deployment and configuration' }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Tools & Libraries',
      skills: [
        { name: 'Pandas & Plotly', level: 85, description: 'Data analysis' },
        { name: 'Socket Programming', level: 70, description: 'Network communications' },
        { name: 'Git/GitHub', level: 80, description: 'Version control' },
        { name: 'Python Libraries', level: 90, description: 'Various (Turtle, APIs, etc.)' }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div 
        ref={ref}
        className={`fade-in ${isInView ? 'visible' : ''}`}
      >
        <h2 className="heading">My Skills</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="subheading mb-0">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="card">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-primary-lighter">{skill.name}</h4>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-meter mb-2">
                      <div 
                        className="skill-level" 
                        style={{ 
                          width: animate ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;