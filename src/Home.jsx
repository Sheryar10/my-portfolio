import React from "react";

//Importing Images
import profileLeft from "./images/profile-left.png";
import profileRight from "./images/profile-right.png";

//Framer Motion Stuff
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();

  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const moveDown = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const moveUp1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const moveUp = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  // const size = useTransform(scrollYProgress, [0, 1], [50, 1000]);

  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

  const variant1 = {
    initial: { opacity: 0, translateY: 100 },
    animate: { opacity: 1, translateY: 0 },
  };
  const variant2 = {
    initial: { opacity: 0, translateY: -100 },
    animate: { opacity: 1, translateY: 0 },
  };

  return (
    <>
      <div className="home-section">
        <div className="hero-section">
          <div className="profile-images">
            <motion.img
              style={{
                translateX: moveLeft,
                translateY: moveUp1,
                opacity: opacity,
                scale: scale,
              }}
              // initial={{ opacity: 0, translateX: -250, scale: 0.5 }}
              // animate={{ opacity: 1, translateX: 0, scale: 1 }}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2, ...transition }}
              variants={variant1}
              src={profileLeft}
              alt=""
            />
            <motion.img
              style={{
                translateX: moveRight,
                translateY: moveDown,
                opacity: opacity,
                scale: scale,
              }}
              // initial={{ opacity: 0, translateX: 250, scale: 0.5 }}
              // animate={{ opacity: 1, translateX: 0, scale: 1 }}
              initial="initial"
              animate="animate"
              variants={variant2}
              transition={{ delay: 0.2, ...transition }}
              src={profileRight}
              alt=""
            />
          </div>
          <motion.div
            style={{ translateY: moveUp, opacity: opacity1 }}
            className="title"
          >
            <h1>
              sheryar saghir <span>/</span>
            </h1>
          </motion.div>
        </div>
        <div className="projects-section">
          <h1 className="projects-title">My work</h1>
          <div className="project-1">
            <h1>Hola</h1>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
