import { motion, AnimatePresence } from 'framer-motion'
import { img } from '../assets'

interface WindowProps {
    isVisible: boolean
}

function Window({ isVisible }: WindowProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className='absolute w-98 h-35 bg-bg-color font-medium flex items-center right-0 top-0 rounded-bl-4xl pl-6 gap-6 z-40'
                    initial={{ y: -300 }}
                    animate={{ y: 0 }}
                    exit={{ y: -300 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <img
                        className='w-24 h-24 object-cover rounded-full pointer-events-none' src={img} alt="image" />
                    <div>
                        <h1>Illustrator TH</h1>
                        <p>Software: Clip Studio Paint v2 </p>
                        <p>Tablet: Wacom One CTL-472</p>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>

    )
}
export default Window