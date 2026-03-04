import { artstation, pixiv, xtwitter, kofi } from "../assets";
import { motion, type Easing } from "motion/react";

interface SocialLink {
    id: string;
    href: string;
    icon: string;
    alt: string;
}

const SOCIAL_DATA: SocialLink[] = [
    { id: "artstation", href: "https://www.artstation.com/ctrlsky123", icon: artstation, alt: "Artstation" },
    { id: "pixiv", href: "https://www.pixiv.net/en/users/73130815", icon: pixiv, alt: "Pixiv" },
    { id: "x-twitter", href: "https://x.com/souljpg_", icon: xtwitter, alt: "X-Twitter" },
    { id: "kofi", href: "https://ko-fi.com/soul111", icon: kofi, alt: "Ko-Fi" },
];

const ease: Easing = "easeOut";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

function Nav() {
    return (
        <motion.nav
            className="p-2 absolute grid justify-center right-0 gap-3 bg-(--bg-primary) z-20 rounded-tl-[10px] rounded-bl-[10px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {SOCIAL_DATA.map((social) => (
                <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                    <img className="w-7" src={social.icon} alt={social.alt} />
                </motion.a>
            ))}
        </motion.nav>
    );
}

export default Nav;