import { motion } from "framer-motion";
import { artstation, pixiv, x } from "./assets/icons";
import background from "./assets/bg.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="bar">
          <h1>S</h1>
        </div>
      </div>

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
    </div >
  );
}

export default App;