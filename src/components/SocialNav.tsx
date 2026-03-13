import { artstation, pixiv, xtwitter, kofi } from '../assets'
import { motion } from 'motion/react'
import { externalProps } from './External'

interface SocialLink {
    id: number
    href: string
    icon: string
    alt: string
}

const SOCIAL_DATA: SocialLink[] = [
    { id: 1, href: 'https://www.artstation.com/ctrlsky123', icon: artstation, alt: 'Artstation' },
    { id: 2, href: 'https://www.pixiv.net/en/users/73130815', icon: pixiv, alt: 'Pixiv' },
    { id: 3, href: 'https://x.com/souljpg_', icon: xtwitter, alt: 'X-Twitter' },
    { id: 4, href: 'https://ko-fi.com/soul111', icon: kofi, alt: 'Ko-Fi' },
];

function SocialNav() {
    return (
        <motion.nav
            className='p-2 absolute grid justify-center right-0 gap-3 bg-(--bg-primary) z-20 rounded-tl-[10px] rounded-bl-[10px]'
        >
            {SOCIAL_DATA.map((social) => (
                <motion.a
                    key={social.id}
                    href={social.href}
                    {...externalProps}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                    <img className='w-7' src={social.icon} alt={social.alt} />
                </motion.a>
            ))}
        </motion.nav>
    )
}

export default SocialNav