import React, { useState } from 'react';
import { Skull, Users } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  type: 'killer' | 'survivor';
  difficulty: 1 | 2 | 3;
  bio: string;
  image: string;
  perks: {
    name: string;
    description: string;
    cooldown: string;
    icon: string;
  }[];
}

const characters: Character[] = [
  {
    id: 'mastermind',
    name: 'The Mastermind',
    type: 'killer',
    difficulty: 2,
    bio: 'Albert Wesker, a powerful and calculating killer who uses his superior abilities to dominate the trial.',
    image: '/wesker.png',
    perks: [
      {
        name: 'Superior Anatomy',
        description: `Decades of research have culminated in you: something faster, stronger, and more dangerous than any human.
Whenever a Survivor performs a Rushed Vault within 8 metres of your location, Superior Anatomy activates:

Increases your Vaulting speed by 30/35/40%.
Superior Anatomy deactivates after vaulting.
Superior Anatomy has a cool-down of 30 seconds.`,
        cooldown: '30 seconds',
        icon: '/perks/superioranatomy.png'
      },
      {
        name: 'Awakened Awareness',
        description: `Your genes have been altered to heighten your senses in intense situations. While carrying a Survivor, you benefit from the following effect:
The Auras of all Survivors within 16/18/20 metres of your location are revealed to you.`,
        cooldown: 'None',
        icon: '/perks/awakenedawareness.png'
      },
      {
        name: 'Terminus',
        description: `You are a brilliant tactician who prepares for every eventuality.
Once the Exit Gates are powered, Terminus activates:

All Survivors who are either injured, dying, or hooked, suffer from the Broken Status Effect until an Exit Gate is opened.
This effect lingers for an additional 20/25/30 seconds.`,
        cooldown: 'Lingers for 20/25/30 seconds',
        icon: '/perks/terminus.png'
      }
    ]
  },
  {
    id: 'blight',
    name: 'The Blight',
    type: 'killer',
    difficulty: 3,
    bio: 'A scientific killer who uses his serum-enhanced speed to rush down survivors.',
    image: '/theblight.png',
    perks: [
      {
        name: "Dragon's Grip",
        description: `Performing the Damage Generator action on a Generator activates Dragon's Grip for the next 30 seconds:
The first Survivor interacting with the damaged Generator will scream, revealing their location for 4 seconds, and suffer from the Exposed

 Status Effect for 60 seconds.
Dragon's Grip has a cool-down of 60/50/40 seconds.`,
        cooldown: '60/50/40 seconds',
        icon: '/perks/dragonsgrip.png'
      },
      {
        name: 'Hex: Blood Favor',
        description: 'Pallets near your successful basic attacks are blocked for 15 seconds.',
        cooldown: 'Passive while hex active',
        icon: '/perks/bloodfavour.png'
      },
      {
        name: 'Hex: Undying',
        description: 'Your hex totems transfer to a dull totem when cleansed.',
        cooldown: 'Passive',
        icon: '/perks/undying.png'
      }
    ]
  },
  {
    id: 'renato',
    name: 'Renato Lyra',
    type: 'survivor',
    difficulty: 2,
    bio: 'Renato Lyra always keeps his eyes on the prize, and he expects the same from his teammates.',
    image: '/renato.png',
    perks: [
      {
        name: 'Background Player',
        description: `You are not usually the centre of attention and in some cases, this can be a good thing.
Whenever another Survivor is picked up, Background Player activates for 10 seconds.
Starting to run while it is active causes the following effect:

Grants a +50% Haste Status Effect for 5 seconds.
Background Player causes the Exhausted Status Effect for 30/25/20 seconds.
Background Player cannot be used when Exhausted.
`,
        cooldown: '30/25/20 seconds',
        icon: '/perks/bgp.png'
      },
      {
        name: 'Blood Rush',
        description: `Your mind and body are honed for great feats, allowing you to push through with extra effort when necessary.
After unhooking yourself or being unhooked, Blood Rush activates for 40/50/60 seconds:

Press the Active Ability button to instantly recover from the Exhausted Status Effect.
Blood Rush is deactivated after use or performing a Conspicuous Action.
Blood Rush is disabled for the remainder of the Trial once the Exit Gates are powered.
`,
        cooldown: 'Once per trial after Exit Gates powered',
        icon: '/perks/bloodrush.png'
      },
      {
        name: 'Teamwork: Collective Stealth',
        description: `When someone helps you out, you respond in kind.
Whenever another Survivor finishes healing you, Teamwork: Collective Stealth activates, and both you and the Survivor who healed you benefit from the following effect:

Suppresses your Scratch Marks for as long as you stay within 8/12/16 metres of one another.
This effect lingers for 4 seconds once out of range and resumes upon re-entering it before that timer elapses.
Survivors can only be affected by one instance of Teamwork: Collective Stealth at a time.
`,
        cooldown: 'Passive',
        icon: '/perks/collectivestealth.png'
      }
    ]
  }
];

const DbDCharacterGrid: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className="card bg-dark/50 hover:bg-dark/70 p-4"
          data-character-type={character.type}
        >
          {/* Character Portrait */}
          <div className="relative mb-4">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            
            {/* Character Info Tooltip */}
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/80 rounded-full transition-opacity duration-300">
              <div className="text-center p-4">
                <h4 className="text-primary-lighter font-semibold mb-1">{character.name}</h4>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(character.difficulty)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                  ))}
                </div>
                <p className="text-xs text-gray-300">{character.bio}</p>
              </div>
            </div>
          </div>

          {/* Character Type Icon */}
          <div className="flex justify-center mb-4">
            {character.type === 'killer' ? (
              <Skull className="h-6 w-6 text-primary" />
            ) : (
              <Users className="h-6 w-6 text-primary" />
            )}
          </div>

          {/* Perks */}
          <div className="grid grid-cols-3 gap-2">
            {character.perks.map((perk, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveTooltip(`${character.id}-${index}`)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <img
                  src={perk.icon}
                  alt={perk.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
                {/* Perk Tooltip */}
                {activeTooltip === `${character.id}-${index}` && (
                  <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-dark-gray rounded-lg p-3 shadow-xl">
                    <h5 className="text-primary-lighter font-semibold mb-1">{perk.name}</h5>
                    <p className="text-xs text-gray-300 mb-1">{perk.description}</p>
                    <p className="text-xs text-primary">Cooldown: {perk.cooldown}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DbDCharacterGrid;