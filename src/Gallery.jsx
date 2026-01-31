import { useState } from "react";
import { motion, useDragControls, AnimatePresence } from "framer-motion";

import img1 from "./assets/image/2.webp";
import img2 from "./assets/image/bg2.webp";
import img3 from "./assets/image/bg.webp";

const images = [img1, img2, img3];

const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%" }),
    center: { zIndex: 1, x: 0 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? "100%" : "-100%" })
};

export default function Gallery({ constraintsRef }) {
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
            transition={{ delay: 1.2, duration: 1.5 }}
            className="gallery"
        >
            <div className="gallery-header" onPointerDown={(e) => controls.start(e)}>
                <p className="gallery-title">GALLERY</p>
            </div>

            <div className="gallery-content">
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
                            transition={{ x: { type: "tween", duration: 0.6 } }}
                            className="gallery-img"
                        />
                    </AnimatePresence>
                </div>
                <button className="nav-btn right" onClick={() => paginate(1)}>›</button>
            </div>
        </motion.div>
    );
}