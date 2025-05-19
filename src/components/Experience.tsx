import React, { useRef } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const experiences: ExperienceItem[] = [
    {
      title: 'Chief Technology Officer',
      company: 'XXX Tech',
      period: '2023 - Present',
      description: 'Leading platform development and technical strategy, managing a team of developers to enhance the platform and implement new features.',
      achievements: [
        'Rebuilt core platform architecture, improving performance by 35%',
        'Implemented data-driven decision making processes',
        'Designed scalable system architecture',
        'Led successful migration to cloud infrastructure'
      ],
      technologies: ['Python', 'React', 'AWS', 'SQL', 'Node.js', 'PostgreSQL', 'Supabase']
    },
    {
      title: 'Hardware Support Technician',
      company: 'XXX Town Hall',
      period: '2022 - 2023',
      description: 'Provided comprehensive hardware support and troubleshooting services, evaluating and repairing equipment to ensure optimal performance.',
      achievements: [
        'Reduced average repair time by 20%',
        'Developed automated diagnostic tools',
        'Trained junior technicians in advanced troubleshooting',
        'Created documentation for common repair procedures'
      ],
      technologies: ['Networking', 'Linux', 'Hardware Diagnostics', 'Repair Tools']
    },
    {
      title: 'Data Analysis Project Lead',
      company: 'A very big american bank 😉',
      period: '2021 - 2022',
      description: 'Led a research team analyzing financial market data, developing predictive models and generating actionable insights for stakeholders.',
      achievements: [
        'Created predictive models with 85% accuracy',
        'Automated data collection processes',
        'Presented findings to executive stakeholders',
        'Developed interactive visualization dashboard'
      ],
      technologies: ['Python', 'Pandas', 'SQL', 'Plotly', 'Data Mining']
    },
    {
      title: 'Computing Club Leader',
      company: 'Educational Institution',
      period: '2020 - 2021',
      description: 'Founded and led a computing club focused on teaching programming skills and mentoring students in technology projects.',
      achievements: [
        'Grew membership from 10 to 50+ students',
        'Developed custom learning curriculum',
        'Organized successful coding competitions',
        'Mentored members in project development'
      ],
      technologies: ['Python', 'Web Development', 'Teaching', 'Project Management']
    }
  ];

  return (
    <section id="experience" className="section bg-dark-gray/30">
      <div 
        ref={ref}
        className={`fade-in ${isInView ? 'visible' : ''}`}
      >
        <h2 className="heading">Experience Highlights</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card border-l-4 border-primary hover:border-primary-lighter"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-lighter">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <p className="text-sm bg-primary/20 text-primary-lighter px-3 py-1 rounded-full inline-block">
                  {exp.period}
                </p>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-dark/50 text-primary-lighter text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;