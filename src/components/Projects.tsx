import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FortniteSubwayImage from '../assets/images/SubwaySurferz.jpeg';
import FootBallImage from '../assets/images/FootBall.jpeg';
import BikeParkourImage from '../assets/images/BikeParkour.jpeg';

interface Project {
  title: string;
  description: string;
  about: string; // About the Game
  contributions: string; // My Contributions
  image: string;
  youtubeLink?: string;
  gameLink?: string; // Optional play game link
  gameCode?: string; // Optional code to copy
}

const Projects: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState('UEFN');
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;

  const projects: Record<string, Project[]> = {
    UEFN: [
      {
        title: 'Fortnite Subway Run',
        description: 'Custom Unlimited Runner Game.',
        about: 'This is a custom unlimited runner game built in Fortnite UEFN, inspired by Subway Surfers.',
        contributions: 'Designed levels, created custom blueprints, and implemented mechanics for running and obstacles.',
        image: FortniteSubwayImage,
        youtubeLink: 'https://www.youtube.com/embed/EW2X8L7Pw5A',
        gameLink: 'https://example.itch.io/subwayrun',
        gameCode: 'ABC123',
      },
      {
        title: 'FootBall Game',
        description: 'Football game with a Fall Guys theme.',
        about: 'A fun, multiplayer football game built with Fortnite UEFN, featuring Fall Guys-style gameplay.',
        contributions: 'Designed gameplay mechanics, built football fields, and implemented multiplayer functionality.',
        image: FootBallImage,
        youtubeLink: 'https://www.youtube.com/embed/EW2X8L7Pw5A',
        gameCode: 'XYZ789',
      },
      {
        title: 'Bike Parkour',
        description: 'Challenging parkour map with checkpoints.',
        about: 'A fast-paced bike parkour map featuring challenging obstacles and multiple checkpoints.',
        contributions: 'Created obstacles, checkpoints, and leaderboard mechanics for competitive gameplay.',
        image: BikeParkourImage,
        gameLink: 'https://example.itch.io/bikeparkour',
      },
    ],
    Unity: [
      {
        title: '2D Platformer',
        description: 'Classic platformer with modern mechanics.',
        about: 'A 2D platformer inspired by Mario, with modern physics and challenging levels.',
        contributions: 'Designed levels, implemented platform physics, and developed character controls.',
        image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800',
      },
    ],
    Unreal: [
      {
        title: 'FPS Game',
        description: 'First-person shooter with advanced graphics.',
        about: 'A realistic first-person shooter game featuring dynamic combat mechanics.',
        contributions: 'Developed shooting mechanics, AI for enemies, and realistic level design.',
        image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
        gameLink: 'https://example.itch.io/fpsgame',
      },
    ],
  };

  const totalPages = Math.ceil(projects[activeEngine].length / projectsPerPage);
  const currentProjects = projects[activeEngine].slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const openProjectInNewTab = (project: Project) => {
    const projectDetailsUrl = `/project-details?title=${encodeURIComponent(
      project.title
    )}&description=${encodeURIComponent(
      project.description
    )}&about=${encodeURIComponent(
      project.about
    )}&contributions=${encodeURIComponent(
      project.contributions
    )}&youtubeLink=${encodeURIComponent(
      project.youtubeLink || ''
    )}&gameLink=${encodeURIComponent(
      project.gameLink || ''
    )}&gameCode=${encodeURIComponent(project.gameCode || '')}`;
    window.open(projectDetailsUrl, '_blank');
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center scale-in">Projects</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-6">
            {Object.keys(projects).map((engine) => (
              <button
                key={engine}
                onClick={() => {
                  setActiveEngine(engine);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-lg ${
                  activeEngine === engine
                    ? 'bg-[#ff004f] text-white'
                    : 'text-[#ababab] hover:text-[#ff6b7f]'
                }`}
              >
                {engine}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => openProjectInNewTab(project)}
              className="cursor-pointer project-card scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#ababab]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? 'text-[#666] cursor-not-allowed'
                  : 'text-[#ababab] hover:text-[#ff6b7f]'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-[#ababab]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? 'text-[#666] cursor-not-allowed'
                  : 'text-[#ababab] hover:text-[#ff6b7f]'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
