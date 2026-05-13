import { img1 } from '../assets'
import { motion } from 'motion/react'

function Background() {
    return (
        <div className='w-screen h-screen rounded-4xl overflow-hidden'>
            <motion.img
                className='h-screen w-screen object-cover rounded-4xl saturate-80 pointer-events-none select-none'
                initial={{ scale: 3, scaleY: 1.7, y: 300 }}
                animate={{ scale: 1, scaleY: 1, y: 1 }}
                transition={{ duration: 1.3 }}
                src={img1}
                alt='background'
            />
        </div>
    )
}

export default Background