import { useRef } from "react";
import { motion } from "framer-motion";

import background from "./assets/image/bhp.webp";
import { artstation, pixiv, x } from "./assets/icons";

import Gallery from "./Gallery.jsx";
import About from "./About.jsx";


import "./css/App.css";
import "./css/About.css";
import "./css/Gallery.css";

function App() {
  const constraintsRef = useRef(null);

  return (
    <div className="App" ref={constraintsRef}>
      <div className="App-header">
        <div className="App-logo">
          <h1>SOULJPG</h1>
        </div>
      </div>

      <Gallery constraintsRef={constraintsRef} />
      <About constraintsRef={constraintsRef} />

      <div className="link-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 2 }}
          className="link"
        >
          <a href="https://www.artstation.com/ctrlsky123" target="_blank" rel="noreferrer">
            <img src={artstation} alt="Artstation" />
          </a>
          <a href="https://www.pixiv.net/en/users/73130815" target="_blank" rel="noreferrer">
            <img src={pixiv} alt="Pixiv" />
          </a>
          <a href="https://x.com/souljpg_" target="_blank" rel="noreferrer">
            <img src={x} alt="X" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="bg-container"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={background} className="bg-image" alt="Background" />
      </motion.div>
    </div>
  );
}

export default App;