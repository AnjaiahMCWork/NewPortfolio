import React from 'react';
import { Clipboard } from 'lucide-react'; // Clipboard icon
import { motion } from 'framer-motion'; // Framer Motion for animations

const ProjectDetails: React.FC = () => {
  const query = new URLSearchParams(window.location.search);
  const title = query.get('title');
  const about = query.get('about'); // About the game
  const contributions = query.get('contributions')?.split(','); // Split contributions into bullet points
  const youtubeLink = query.get('youtubeLink'); // Optional YouTube link
  const gameLink = query.get('gameLink'); // Optional game link
  const gameCode = query.get('gameCode'); // Optional game code

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Game Code "${code}" copied to clipboard!`);
  };

  return (
    <motion.section
      className="min-h-screen py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h1
          className="text-6xl font-extrabold text-center mb-12 text-white leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title || 'Project Details'}
        </motion.h1>

        {/* Right-Aligned Buttons */}
        <motion.div
          className="flex flex-col items-end mb-12 space-y-4"
          style={{ marginRight: '-5%', marginTop: '-10%' }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Play Game Button */}
          {gameLink && (
            <a
              href={gameLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff004f] text-white px-8 py-4 rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300 text-lg"
            >
              Play Game
            </a>
          )}

          {/* Game Code Button */}
          {gameCode && (
            <button
              onClick={() => copyToClipboard(gameCode)}
              className="flex items-center bg-[#ff004f] text-white px-8 py-4 rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300 text-lg"
            >
              <Clipboard className="mr-2" size={20} /> {gameCode}
            </button>
          )}
        </motion.div>

        {/* YouTube Video */}
        {youtubeLink && (
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <iframe
              src={youtubeLink}
              title={title || 'Project Video'}
              className="rounded-lg"
              style={{ width: '90%', height: '600px' }}
              allowFullScreen
            ></iframe>
          </motion.div>
        )}

        {/* About the Game */}
        {about && (
          <motion.div
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">About the Game</h2>
            <p className="text-lg text-[#ababab] leading-relaxed">{about}</p>
          </motion.div>
        )}

        {/* Contributions */}
        {contributions && contributions.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">My Contributions</h2>
            <ul className="list-disc list-inside text-lg text-[#ababab] leading-relaxed space-y-2">
              {contributions.map((contribution, index) => (
                <li key={index}>{contribution.trim()}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
