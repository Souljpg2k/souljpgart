import { img1 } from '../assets'
import { motion } from 'motion/react'

function Background() {
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <motion.img
                className='h-screen w-screen object-cover saturate-80 pointer-events-none'
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                src={img1}
                alt='background'
            />
        </div>
    )
}

export default Background