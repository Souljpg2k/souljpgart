import { motion } from "motion/react";
import { bg } from "../assets"
import { forwardRef } from "react";

const Bg = forwardRef<HTMLDivElement>(function Bg(_, ref) {
    return (
        <div ref={ref} className="w-full h-full relative rounded-[20px] overflow-hidden">
            <motion.img
                className="w-full h-full object-cover rounded-[20px] pointer-events-none"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3 }}
                src={bg} alt="background"
            />
        </div>
    );
});

export default Bg;