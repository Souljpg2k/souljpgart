import { motion } from 'motion/react'
import { A, I, X, K, G, Bg } from './assets'

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
    { id: 4, icon: K, alt: 'Ko-fi', url: 'https://ko-fi.com/soul111' },
    { id: 5, icon: G, alt: 'Github', url: 'https://github.com/Souljpg2k' }
]

function App() {
    return (
        <>
            <main className='relative w-full h-dvh overflow-hidden bg-black text-white font-display select-none'>
                <div className='absolute inset-0 flex items-center justify-center text-center z-20'>
                    <section>
                        <h1 className='text-4xl md:text-5xl'>souljpgart</h1>
                        <p>illustrator</p>
                    </section>
                </div>

                <section className='absolute bottom-0 bg-black/10 rounded-2xl border border-white/10 backdrop-blur-sm select-text mx-4 my-15 md:mx-10 md:my-20 p-2.5 z-30'>
                    <p className='font-bold underline'>hi, i'm soul</p>
                    <p>i code and illustrator</p>
                    <p>tools: clip studio paint, krita, wacom</p>
                </section>

                <div className='inset-0 overflow-hidden fixed'>
                    <motion.img
                        className='w-full h-full object-cover pointer-events-none'
                        initial={{ opacity: 0.1, scale: 1.2 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        transition={{ duration: 2, ease: 'anticipate' }}
                        src={Bg}
                        alt=''
                    />
                </div>
            </main>

            <footer className='bg-black/20 text-white backdrop-blur-sm w-full h-12 fixed flex items-center justify-between select-none px-5 md:px-10 bottom-0 z-50'>
                <p className='font-display'>&copy;souljpgart</p>
                <div className='flex space-x-3'>
                    {l.map((link) => (
                        <motion.a
                            key={link.id}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <motion.img
                                className='w-6'
                                src={link.icon}
                                alt={link.alt}
                                whileHover={{ scale: 1.02, opacity: 0.5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.a>
                    ))}
                </div>
            </footer>
        </>
    )
}

export default App