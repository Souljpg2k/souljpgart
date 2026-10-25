import { motion } from 'motion/react'
import { A, I, X, G, Bg } from './assets'

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
    { id: 4, icon: G, alt: 'Github', url: 'https://github.com/Souljpg2k' }
]

function App() {
    return (
        <>
            <main className='relative w-full h-dvh overflow-hidden bg-black text-white font-bodyText select-none'>
                <div className='absolute inset-0 flex items-center justify-center text-center z-20'>
                    <section className='leading-12'>
                        <h1 className='text-5xl md:text-6xl font-heading font-bold'>Souljpgart</h1>
                        <span className='text-lg font-heading font-semibold'>???</span>
                    </section>
                </div>

                <motion.section 
                    className='absolute bottom-0 bg-black/20 rounded-2xl border border-white/10 backdrop-blur-sm select-text mx-10 my-16 md:mx-10 md:my-20 p-3 z-30'>
                    <p className='font-bold text-lg font-heading'>Hi, I'm Soul</p>
                    <p className='md:text-base text-sm pt-1'>Illustrator ???</p>
                    <p className='md:text-base text-sm'>Tools: Clip Studio Paint, Wacom CTL-472</p>
                </motion.section>

                <div className='inset-0 overflow-hidden fixed'>
                    <motion.img
                        className='w-full h-full object-cover pointer-events-none'
                        initial={{ opacity: 0.2, scale: 1.2 }}
                        animate={{ opacity: 0.98, scale: 1 }}
                        transition={{ duration: 2, ease: 'anticipate' }}
                        src={Bg}
                        alt=''
                    />
                </div>
            </main>

            <footer className='bg-black/40 text-white backdrop-blur-sm w-full h-12 fixed flex items-center justify-between select-none px-5 md:px-10 bottom-0 z-50'>
                <p className='font-heading font-semibold'>LV04</p>
                <div className='flex space-x-3'>
                    {l.map((link) => (
                        <motion.a
                            key={link.id}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <motion.img
                                className='w-7 opacity-80'
                                src={link.icon}
                                alt={link.alt}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                            />
                        </motion.a>
                    ))}
                </div>
            </footer>
        </>
    )
}

export default App