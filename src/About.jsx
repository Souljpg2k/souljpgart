import { motion, useDragControls } from "framer-motion";

export default function AboutWindow({ constraintsRef }) {
    const controls = useDragControls();

    return (
        <motion.div
            drag
            dragControls={controls}
            dragListener={false}
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={constraintsRef}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: 1.2, duration: 1 }}
            className="about-window"
            onPointerDown={(e) => controls.start(e)}
        >
            <div className="about-content">
                <div className="about-text">
                    <h2>SOUL</h2>
                    <p>Artist 2D 3D</p>
                    <p>illustration & Concept art</p>
                </div>
            </div>
        </motion.div >
    );
}