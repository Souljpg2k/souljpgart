import { motion } from 'motion/react'

interface link {
    id: number
    n: string
    h: string
}

const Data: link[] = [
    { id: 1, n: 'PIXIV', h: 'https://www.pixiv.net/en/users/73130815' },
    { id: 2, n: 'X', h: 'https://x.com/souljpg_' },
    { id: 3, n: 'KOFI', h: 'https://ko-fi.com/soul111' }
]

function Bar() {
    return (
        <>
            <div className='bg-c-black subpixel-antialiased bottom-0 fixed z-50 w-screen h-16 font-display text-sm font-medium flex justify-between items-center pl-10 pr-10'>
                <div className='text-c-white font-nDisplay font-black leading-1.5'>
                    <h1 className='text-2xl'>SOULJPG</h1>
                    <p className='text-[12px]'>ILLUSTRATOR</p>
                </div>
                <div className='text-c-white space-x-5'>
                    {Data.map((ls) => (
                        <motion.a
                            key={ls.id}
                            href={ls.h}
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ opacity: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            {ls.n}
                        </motion.a>
                    ))}
                </div>
            </div>
            <div className='bottom-15.75 z-50 right-0 fixed'>
                <svg
                    viewBox="0 0 100 100"
                    width="60"
                    height="60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M 100 0 L 100 100 L 0 100 C 15 100 100 85 100 0 Z" fill="#242424" />
                </svg>
            </div>
        </>
    )
}

export default Bar