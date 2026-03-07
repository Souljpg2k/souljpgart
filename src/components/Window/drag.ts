import type { HTMLMotionProps } from "framer-motion"

export const dragProps: Readonly<Pick<HTMLMotionProps<"div">,
    "drag" | "dragElastic" | "dragConstraints" | "dragTransition" | "whileDrag" |
    "initial" | "animate" | "exit" | "transition"
>> = {
    drag: true,
    dragElastic: 0,
    dragTransition: { bounceStiffness: 100, bounceDamping: 20 },
    whileDrag: { boxShadow: "0px 20px 40px rgba(0,0,0,0.6)", scale: 1.01 },
    initial: { opacity: 0, scale: 0.97, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, x: 6, scale: 0.97, filter: "blur(8px)" },
    transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
    },
}