import { motion } from 'motion/react'
import { img } from '../assets'

function Background() {
    return (
        <div className='w-screen h-screen relative overflow-hidden rounded-3xl'>
            <motion.img
                className='w-full h-full object-cover pointer-events-none'
                initial={{ scale: 1.3, filter: 'blur(13px)' }}
                animate={{ scale: 1, filter: 'blur(0)' }}
                transition={{ duration: 1.3 }}
                src={img}
                alt="background" />
        </div>
    )
}

export default Background