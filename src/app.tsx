import { motion } from 'motion/react'
import { A, I, X, K } from './assets/icons'
import { bg } from './assets/imgs'

interface Link {
    id: number
    icon: string
    alt: string
    url: string
}

const l: Link[] = [
    { id: 1, icon: A, alt: 'Artstation', url: 'https://www.artstation.com/souljpg' },
    { id: 2, icon: I, alt: 'Instagram', url: 'https://www.instagram.com/souljpgart/' },
    { id: 3, icon: X, alt: 'Twitter', url: 'https://x.com/souljpg_' },
    { id: 4, icon: K, alt: 'ko-fi', url: 'https://ko-fi.com/soul111' }
]

function App() {
    return (
        <>
            <main className='relative w-full h-dvh overflow-hidden bg-black text-white font-bodyText select-none'>
                <header className='absolute grid bottom-16 left-11 z-20'>
                    <h1 className='text-6xl md:text-8xl font-bold'>Souljpgart</h1>
                    <h2 className='text-2xl md:text-3xl font-bold'>Illustrator</h2>
                </header>

                <div className='inset-0 overflow-hidden fixed'>
                    <motion.img
                        className='w-full h-full object-cover pointer-events-none'
                        initial={{ opacity: 0.2, scale: 1.2 }}
                        animate={{ opacity: 0.8, scale: 1.02 }}
                        transition={{ duration: 4, ease: 'anticipate' }}
                        src={bg}
                        alt=''
                    />
                </div>
            </main>

            <section className='fixed right-0 flex md:bottom-10 bottom-4 md:px-11 px-5 select-none z-50'>
                <div className='flex space-x-1'>
                    {l.map((link) => (
                        <>
                            <div className='bg-black/20 backdrop-blur-sm rounded-3xl p-2 w-11 h-11 border border-white/40'>
                                <motion.a
                                    key={link.id}
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                <motion.img
                                    className='w-7 opacity-90'
                                    src={link.icon}
                                    whileHover={{ scale: 1.1, opacity: 1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                    alt={link.alt}
                                />
                                </motion.a>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default App