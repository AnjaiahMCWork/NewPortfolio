import React from 'react';
import { Gamepad2, Code2, Palette, Cpu, Joystick, Layers, Brain, Rocket, Target } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Gamepad2 size={40} />,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences using Unreal Engine, Unity, and UEFN.'
    },
    {
      icon: <Code2 size={40} />,
      title: 'Game Programming',
      description: 'Implementing game mechanics and systems using C++, C#, and Blueprint.'
    },
    {
      icon: <Palette size={40} />,
      title: 'Level Design',
      description: 'Designing engaging and balanced game levels with compelling gameplay.'
    },
    {
      icon: <Cpu size={40} />,
      title: 'Game Optimization',
      description: 'Optimizing game performance for smooth gameplay across platforms.'
    },
    {
      icon: <Joystick size={40} />,
      title: 'Game Mechanics',
      description: 'Developing unique and engaging gameplay mechanics and systems.'
    },
    {
      icon: <Layers size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and responsive game interfaces and menus.'
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Development',
      description: 'Implementing intelligent NPCs and game AI systems.'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Game Prototyping',
      description: 'Rapid development of game concepts and mechanics.'
    },
    {
      icon: <Target size={40} />,
      title: 'Multiplayer Systems',
      description: 'Implementing networking and multiplayer functionality.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center scale-in">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-[#333] hover:border-[#ff004f] transition-all duration-300 scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#ff004f] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-[#ababab]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;