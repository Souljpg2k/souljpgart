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
        <div className='bg-c-black subpixel-antialiased top-0 w-screen h-11 font-display text-sm font-medium flex justify-between items-center pl-10 pr-10'>
            <h1 className='text-c-white'>SOULJPG</h1>
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
                ))
                }
            </div>
        </div>
    )
}
export default Bar