import React, { useRef } from 'react';
import { GraduationCap, Award, AlignCenterVertical as Certificate } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface EducationItem {
  icon: JSX.Element;
  title: string;
  institution: string;
  period: string;
  achievements: string[];
}

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const educationItems: EducationItem[] = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: 'Extended Diploma in Computing',
      institution: 'Technology Institute',
      period: '2022 - Present',
      achievements: [
        'Predicted D*D*D*A',
        'Top performer in programming modules',
        'Award for innovative project work',
        'Selected for advanced placement program'
      ]
    },
    {
      icon: <Certificate className="h-8 w-8 text-primary" />,
      title: 'Cisco NetAcad Certifications',
      institution: 'Cisco Networking Academy',
      period: '2021 - 2022',
      achievements: [
        'Networking Essentials',
        'Ethical Hacking',
        'Cybersecurity',
        'IoT Fundamentals'
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Academic Achievements',
      institution: 'Education Board',
      period: '2020 - 2021',
      achievements: [
        'GCSE Mathematics: Grade 9',
        'GCSE Computer Science: Grade 9',
        'GCSE Physics: Grade 8',
        'Additional qualifications in IT'
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div 
        ref={ref}
        className={`fade-in ${isInView ? 'visible' : ''}`}
      >
        <h2 className="heading">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="card flex flex-col h-full hover:bg-dark-gray/80"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-primary-lighter mb-1">{item.title}</h3>
              <p className="text-gray-300 mb-1">{item.institution}</p>
              <p className="text-sm text-gray-400 mb-4">{item.period}</p>
              
              <div className="mt-auto">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Achievements</h4>
                <ul className="space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 text-sm flex gap-2 items-start">
                      <span className="text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;