import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  
  },
};
const slideVariants = {
  initial: { x: 0 },
  animate: {
    x: "220%",

    transition: {
      duration: 20,
      repeat: Infinity,
    },
    
  },
};
const Hero = () => {
  return (
    <div className="container">
      <motion.div className="container1" animate="animate" initial="initial" variants={textVariants}>
        <motion.div variants={textVariants} className="name">
          Arham Wasif
        </motion.div>
        <motion.div variants={textVariants} className="post">
          <label>Frontend Developer  </label>
        </motion.div>
        <motion.div variants={textVariants} className="butna">
          <motion.button variants={textVariants} className="btn1">
            See the latest works
          </motion.button>
          <motion.button variants={textVariants} className="btn">
            Contact Me
          </motion.button>
        </motion.div>
        <motion.div className="hero">
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="img6"
            alt=""
            src="/scroll.png"
          />
        </motion.div>
      </motion.div>

      <div className="container2">
        <div className="hero">
          <img className="img5" src="/pic10.png" />
        </div>
      </div>
      <motion.div
        className="slider"
        animate="animate"
        variants={slideVariants}
        initial="initial"
      >
        {/* Writer Content Creator Influencer */}
      </motion.div>

      <div className="hero"></div>
    </div>
  );
};

export default Hero;
