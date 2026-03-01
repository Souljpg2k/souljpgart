import { motion, AnimatePresence } from "framer-motion";
import { close, info, bg } from "../assets";

interface WindowsProps {
    show: boolean;
    setShow: (value: boolean) => void;
    constraintsRef: React.RefObject<HTMLDivElement | null>;
}

function Windows({ show, setShow, constraintsRef }: WindowsProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="w-400px h-500px absolute bg-(--bg-primary) p-4! right-0 top-0 cursor-move"
                    drag
                    dragElastic={0}
                    dragConstraints={constraintsRef}
                    whileDrag={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.8)" }}
                    initial={{
                        opacity: 0,
                        x: 0,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0)"
                    }}
                    exit={{
                        opacity: 0,
                        x: 10,
                        filter:
                            "blur(10px)"
                    }}
                    dragTransition={{
                        bounceStiffness: 100,
                        bounceDamping: 10
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <>
                        <div className="flex items-center justify-between gap-1">
                            <div className="flex items-center gap-1">
                                <img src={info} alt="info" />
                                <h1 className="font-medium">SOUL</h1>
                            </div>

                            <motion.img
                                className="cursor-pointer"
                                whileHover={{ opacity: 0.7, scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                src={close} alt="X" onClick={() => setShow(false)}
                            />
                        </div>

                        <div className="pt-2! flex flex-col gap-2">
                            <img className="w-100 rounded-[7px] pointer-events-none" src={bg} alt="background" />
                            <p>Soul Illustrator </p>
                        </div>
                    </>
                </motion.div >
            )}
        </AnimatePresence>
    );
};

export default Windows;