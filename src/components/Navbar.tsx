import React from 'react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const sections = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-[#ff004f]">A</span>njaiah
          </h1>
          <div className="text-1xl space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`nav-link ${
                  activeSection === section ? 'active' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;