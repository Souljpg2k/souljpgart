import { motion } from 'motion/react'
import i from './assets/bg.webp'

interface Link {
    id: number
    n: string
    url: string
}

function App() {
    const l: Link[] = [
        { id: 1, n: 'artstation', url: 'https://www.artstation.com/souljpg' },
        { id: 2, n: 'instagram', url: 'https://www.instagram.com/souljpgart/' },
        { id: 3, n: 'x', url: 'https://x.com/souljpg_' },
        { id: 4, n: 'ko-fi', url: 'https://ko-fi.com/soul111' }
    ]

    return (
        <>
            <header className='bg-black/80 text-white backdrop-blur-sm w-screen h-12 fixed flex items-center justify-between pr-4 pl-4 z-40'>
                <h1 className='font-logo text-2xl pb-1'>souljpgart</h1>
                <div className='font-display space-x-3'>
                    {l.map((link) => (
                        <motion.a
                            key={link.id}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.05, opacity: 0.5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.n}
                        </motion.a>
                    ))}
                </div>
            </header>

            <main className='w-screen h-screen bg-black overflow-hidden'>
                <motion.img
                    className='w-full h-full object-cover pointer-events-none'
                    initial={{ opacity: 0.5, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: 'anticipate' }}
                    src={i}
                    alt='background'
                />
            </main>
        </>
    )
}

export default App