import { motion, useDragControls, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { artstation, pixiv, x } from "./assets/icons";
import background from "./assets/image/bg.webp";


import img1 from "./assets/image/2.webp";
import img2 from "./assets/image/snoww.webp";
import img3 from "./assets/image/bg.webp";

import "./App.css";

const images = [img1, img2, img3];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
  })
};

function MyGallery({ constraintsRef }) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const controls = useDragControls();

  const paginate = (newDirection) => {
    setIndex([index + newDirection, newDirection]);
  };


  const imageIndex = ((index % images.length) + images.length) % images.length;

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraintsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 2, ease: "easeOut" }}
      className="gallery-window"
    >
      <div className="window-header" onPointerDown={(e) => controls.start(e)}>
        <span className="window-title">Artwork</span>
      </div>

      <div className="window-content">
        <button className="nav-btn left" onClick={() => paginate(-1)}>‹</button>

        <div className="image-container">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.img
              key={index}
              src={images[imageIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }
              }}
              className="display-img"
            />
          </AnimatePresence>
        </div>

        <button className="nav-btn right" onClick={() => paginate(1)}>›</button>
      </div>
    </motion.div>
  );
}

function App() {
  const constraintsRef = useRef(null);

  return (
    <div className="App" ref={constraintsRef}>
      <div className="header">
        <div className="bar">
          <h1>S</h1>
        </div>
      </div>

      <MyGallery constraintsRef={constraintsRef} />

      <div className="link-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 2, ease: "easeOut" }}
        >
          <div className="link">
            <a href="https://www.artstation.com/ctrlsky123" target="_blank">
              <img src={artstation} alt="a" />
            </a>
            <a href="https://www.pixiv.net/en/users/73130815" target="_blank">
              <img src={pixiv} alt="p" />
            </a>
            <a href="https://x.com/souljpg_" target="_blank">
              <img src={x} alt="x" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-container"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={background}
          className="bg-image"
          alt="Background"
        />
      </motion.div>
    </div>
  );
}

export default App;