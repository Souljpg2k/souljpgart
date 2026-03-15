import { motion } from 'motion/react'
import { bg } from '../assets'

interface BackgroundProps {
    ref?: React.Ref<HTMLDivElement>
}

function Background({ ref }: BackgroundProps) {
    return (
        <div ref={ref} className='w-full h-full relative rounded-[20px] overflow-hidden '>
            <motion.img
                className='w-full h-full object-cover pointer-events-none'
                initial={{ opacity: 0, scale: 1.3, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
                transition={{ duration: 1 }}
                src={bg}
                alt='background'
            />
        </div>
    )
}

export default Background