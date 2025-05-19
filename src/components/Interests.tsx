import React, { useRef } from 'react';
import { Gamepad2, Music, Book, Camera, Swords, Shield, Trophy, Timer } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import DbDCharacterGrid from './DbDCharacterGrid';

const Interests: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const killerBuilds = [
    {
      name: "The Mastermind",
      perks: ["Eruption", "Call of Brine", "Superior Anatomy", "Brutal Strength"],
      playstyle: "Aggressive gen control with strong chase potential",
      achievements: "4K streak record: 15 matches"
    },
    {
      name: "The Blight",
      perks: ["Dragon's Grip", "Tinkerer", "Blood Echo", "Hex: Undying"],
      playstyle: "High mobility and pressure",
      achievements: "Average chase time: 30 seconds"
    }
  ];

  const survivorBuilds = [
    {
      name: "Renato Lyra",
      perks: ["Wiretap", "Reactive Healing", "Better Than New", "Reassurance"],
      playstyle: "Altruistic support with information gathering",
      achievements: "90% escape rate in solo queue"
    }
  ];

  return (
    <section id="interests" className="section bg-dark-gray/30">
      <div 
        ref={ref}
        className={`fade-in ${isInView ? 'visible' : ''}`}
      >
        <h2 className="heading">Gaming Profile</h2>
        
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-8">
            <Gamepad2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="subheading">Dead by Daylight Main</h3>
              <p className="text-gray-300 mb-6">
                Dedicated Dead by Daylight player specializing in killer gameplay with The Mastermind and The Blight. 
                Also proficient as a survivor main with Renato Lyra, focusing on team support and strategic gameplay.
              </p>
              
              {/* Character Grid */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary-lighter mb-4">Character Roster</h4>
                <DbDCharacterGrid />
              </div>

              {/* Killer Builds */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-semibold text-primary-lighter mb-4">Killer Builds</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {killerBuilds.map((build, index) => (
                    <div key={index} className="card bg-dark/50 hover:bg-dark/70">
                      <div className="flex items-center gap-3 mb-4">
                        <Swords className="h-6 w-6 text-primary" />
                        <h5 className="text-lg font-semibold text-primary-lighter">{build.name}</h5>
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {build.perks.map((perk, i) => (
                            <span key={i} className="bg-primary/20 text-primary-lighter px-3 py-1 rounded-full text-sm">
                              {perk}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm">{build.playstyle}</p>
                        <div className="flex items-center gap-2 text-sm text-primary-lighter">
                          <Trophy className="h-4 w-4" />
                          <span>{build.achievements}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Survivor Builds */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-primary-lighter mb-4">Survivor Build</h4>
                <div className="grid grid-cols-1 gap-6">
                  {survivorBuilds.map((build, index) => (
                    <div key={index} className="card bg-dark/50 hover:bg-dark/70">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h5 className="text-lg font-semibold text-primary-lighter">{build.name}</h5>
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {build.perks.map((perk, i) => (
                            <span key={i} className="bg-primary/20 text-primary-lighter px-3 py-1 rounded-full text-sm">
                              {perk}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm">{build.playstyle}</p>
                        <div className="flex items-center gap-2 text-sm text-primary-lighter">
                          <Trophy className="h-4 w-4" />
                          <span>{build.achievements}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Overview */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card bg-dark/50 flex items-center gap-3">
                  <Timer className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400">Total Hours</p>
                    <p className="text-xl font-semibold text-primary-lighter">1,500+</p>
                  </div>
                </div>
                <div className="card bg-dark/50 flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400">Rank Achievement</p>
                    <p className="text-xl font-semibold text-primary-lighter">Iridescent I</p>
                  </div>
                </div>
                <div className="card bg-dark/50 flex items-center gap-3">
                  <Swords className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400">Killer Win Rate</p>
                    <p className="text-xl font-semibold text-primary-lighter">85%</p>
                  </div>
                </div>
                <div className="card bg-dark/50 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-400">Survival Rate</p>
                    <p className="text-xl font-semibold text-primary-lighter">70%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="subheading">Other Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="card">
            <Music className="h-8 w-8 text-primary mb-4" />
            <h4 className="font-semibold text-primary-lighter mb-2">Music Production</h4>
            <p className="text-gray-400">
              Experimenting with digital audio workstations and creating electronic music tracks in my free time.
            </p>
          </div>
          
          <div className="card">
            <Book className="h-8 w-8 text-primary mb-4" />
            <h4 className="font-semibold text-primary-lighter mb-2">Technical Reading</h4>
            <p className="text-gray-400">
              Staying updated with the latest in technology through books, articles, and research papers.
            </p>
          </div>
          
          <div className="card">
            <Camera className="h-8 w-8 text-primary mb-4" />
            <h4 className="font-semibold text-primary-lighter mb-2">Digital Photography</h4>
            <p className="text-gray-400">
              Capturing and editing urban landscapes and architectural photography.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;