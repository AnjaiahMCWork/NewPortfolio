import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'react-lottie-player';
import animationData from '../lotties/person-coding.json'; // Adjust the path to your Lottie file

const Home: React.FC = () => {
  // Lottie animation config
  const defaultOptions = {
    loop: true,
    play: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 name-animation">
          <h1 className="text-6xl font-bold">
            Hi, I'm{' '}
            <span className="text-[#ff004f]">Anjaiah Chowdary M</span>{' '}
            <span className="text-[#fff]">from India</span>
          </h1>
          <p className="text-5xl text-[#fff]">Game Developer</p>
          <div className="space-y-6 pt-6">
            <a
              href="/AnjaiahGameDev.pdf"
              target="_blank"
              className="inline-block bg-[#ff004f] px-6 py-3 rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300"
            >
              Download Resume
            </a>
            <div className="flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/anjaiahmcwork/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-[#ababab] hover:text-[#fff] text-6xl" />
              </a>
              <a
                href="https://github.com/AnjaiahMCWork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[#ababab] hover:text-[#fff] text-6xl" />
              </a>
            </div>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="fade-in flex justify-center items-center">
          <div className="w-full max-w-lg">
            <Lottie {...defaultOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
