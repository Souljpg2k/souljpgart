import { motion, AnimatePresence } from "framer-motion"
import { dragProps } from "./drag"
import { close, info, bg } from "../../assets"

interface WindowsProps {
    isVisible: boolean;
    onToggle: () => void;
    constraintsRef: React.RefObject<HTMLDivElement | null>;
}

function Windows({ isVisible, onToggle, constraintsRef }: WindowsProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="w-400px h-500px absolute bg-(--bg-primary) p-4 right-0 top-0 cursor-move z-10"
                    {...dragProps}
                    dragConstraints={constraintsRef}
                >
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1 pointer-events-none">
                            <img src={info} alt="info" />
                            <h1 className="font-medium">Soul</h1>
                        </div>
                        <motion.img
                            className="cursor-pointer"
                            whileHover={{ opacity: 0.7, scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.75 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            src={close}
                            alt="Close window"
                            onClick={onToggle}
                        />
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                        <img className="w-100 rounded-[7px] pointer-events-none" src={bg} alt="background" />
                        <p>Soul Illustrator</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Windows;