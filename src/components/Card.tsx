import React from "react";
import { motion } from "framer-motion";

// Define props type
interface CardProps {
  children: React.ReactNode; // Accepts any valid JSX/ReactNode
  className?: string;  // Optional extra styling
  handleClick?:()=>void;
}

const Card: React.FC<CardProps> = ({ children, className, handleClick }) => {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg bg-white ${className || ""}`}
      initial={{ opacity: 0, y: 30 }} // Start hidden & slightly down
      animate={{ opacity: 1, y: 0 }}  // Animate into place
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
