import { motion } from 'framer-motion';
import { GamepadIcon } from 'lucide-react';

const Splash = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black" // Set background to black
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex flex-col items-center text-6xl font-bold text-[#ff004f]" // Adjust text color and position
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Gamepad Icon as white */}
        <GamepadIcon size={64} className="mb-4 text-white" /> {/* Add margin to the bottom and set icon color to white */}
        <span>Anjaiah Chowdary M</span> {/* Set the text color */}
      </motion.div>
    </motion.div>
  );
};

export default Splash;
