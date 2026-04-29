import { artstation, pixiv, xtwitter, kofi } from '../assets'
import { motion } from 'motion/react'

interface SocialProps {
    id: number
    href: string
    icon: string
    alt: string
}

const SOCIAL_DATA: SocialProps[] = [
    { id: 1, href: 'https://www.artstation.com/ctrlsky123', icon: artstation, alt: 'Artstation' },
    { id: 2, href: 'https://www.pixiv.net/en/users/73130815', icon: pixiv, alt: 'Pixiv' },
    { id: 3, href: 'https://x.com/souljpg_', icon: xtwitter, alt: 'xtwitter' },
    { id: 4, href: 'https://ko-fi.com/soul111', icon: kofi, alt: 'kofi' },
];

function Social() {
    return (
        <motion.nav
            className='absolute bg-bg-color grid gap-2 right-0 rounded-tl-2xl rounded-bl-2xl p-1 z-50'
        >
            {SOCIAL_DATA.map((social) => (
                <motion.a
                    className='p-0.5'
                    key={social.id}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                    <img className='w-7' src={social.icon} alt={social.alt} />
                </motion.a>
            ))
            }
        </motion.nav >
    )
}

export default Social