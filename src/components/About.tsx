import React, { useState } from 'react';
import verseIcon from '../assets/images/Verse.jpg'; // Local image for Verse Programming

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    programming: [
      { name: 'Verse Programming', icon: verseIcon },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    ],
    engines: [
      { name: 'Unreal Editor for Fortnite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
      { name: 'Unity', icon: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg' },
      { name: 'Unreal Engine', icon: 'https://raw.githubusercontent.com/kenangundogan/fontisto/master/icons/svg/brand/unreal-engine.svg' },
    ],
  };

  const experience = [
    {
      position: 'UEFN Game Developer',
      company: 'Mayaavi Game Studio',
      duration: 'Mar 2024 - Present',
      description: 'Developed more than 25+ games in UEFN.',
    },
    {
      position: 'Unity Game Developer',
      company: 'Mayaavi Game Studio',
      duration: 'Feb 2024 - Mar 2024',
      description: 'Developed a snake and ladder game in 3D using Unity Engine.',
    },
  ];

  const education = [
    {
      degree: 'BE in Electronics and Communication',
      year: '2019 - 2023',
    },
    {
      degree: 'Intermediate Education',
      year: '2017 - 2019',
    },
    {
      degree: 'Secondary Education',
      year: 'Completed in 2017',
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center scale-in">About Me</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {['skills', 'experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg capitalize ${
                  activeTab === tab
                    ? 'bg-[#ff004f] text-white'
                    : 'text-[#ababab] hover:text-[#ff6b7f]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="fade-in">
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Programming Languages */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Programming Languages</h3>
                <div className="grid grid-cols-3 gap-8">
                  {skills.programming.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="text-center scale-in hover:-translate-y-2 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-lg">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Engines */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Game Engines</h3>
                <div className="grid grid-cols-3 gap-8">
                  {skills.engines.map((engine, index) => (
                    <div
                      key={engine.name}
                      className="text-center scale-in hover:-translate-y-2 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <img src={engine.icon} alt={engine.name} className="w-16 h-16 mx-auto mb-2 invert" />
                      <p className="text-lg">{engine.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg scale-in mx-auto max-w-2xl">
                  <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                  <p className="text-[#ababab] mb-2">{exp.company}</p>
                  <p className="text-[#ff004f] mb-2">{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg scale-in mx-auto max-w-2xl">
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-[#ff004f]">{edu.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
