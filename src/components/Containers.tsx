import { motion } from "motion/react"
import type { ReactNode } from "react"

interface ContainersProps {
    children: ReactNode
}

function Containers({ children }: ContainersProps) {
    return (
        <motion.div
            className="p-2 pb-12  relative flex justify-center items-center top-0 w-screen h-screen z-20 overflow-hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            {children}
        </motion.div>
    )
}

export default Containers