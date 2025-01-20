import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Splash from "./components/Splash"; // Import Splash screen component

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  const location = useLocation();

  // Hide the Navbar on specific routes
  const hideNavbarRoutes = ["/project-details"];
  const isNavbarHidden = hideNavbarRoutes.includes(location.pathname);

  // Page transition variants for animations
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  // Timer for splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // Splash duration is 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" /> // Show splash screen initially
        ) : (
          <>
            {/* Conditionally Render Navbar */}
            {!isNavbarHidden && (
              <Navbar
                activeSection={activeSection} // Pass the active section
                onSectionChange={setActiveSection} // Pass function to update active section
              />
            )}

            {/* Animated Routes */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* Section-Based Navigation */}
                <Route
                  path="/"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                    >
                      {activeSection === "Home" ? (
                        <Home />
                      ) : activeSection === "About" ? (
                        <About />
                      ) : activeSection === "Services" ? (
                        <Services />
                      ) : activeSection === "Projects" ? (
                        <Projects />
                      ) : activeSection === "Contact" ? (
                        <Contact />
                      ) : null}
                    </motion.div>
                  }
                />

                {/* Project Details Page */}
                <Route
                  path="/project-details"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                    >
                      <ProjectDetails />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Use this wrapper to access location in the App component
const AppWithLocation: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithLocation;
