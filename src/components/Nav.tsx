import { artstation, pixiv, xtwitter, kofi } from "../assets";
import { motion } from "motion/react";

interface SocialLink {
    id: string;
    href: string;
    icon: string;
    alt: string;
}

const SOCIA_DATA: SocialLink[] = [
    { id: "artstation", href: "https://www.artstation.com/ctrlsky123", icon: artstation, alt: "Artstation" },
    { id: "pixiv", href: "https://www.pixiv.net/en/users/73130815", icon: pixiv, alt: "Pixiv" },
    { id: "x-twitter", href: "https://x.com/souljpg_", icon: xtwitter, alt: "X-Twitter" },
    { id: "kofi", href: "https://ko-fi.com/soul111", icon: kofi, alt: "Ko-Fi" }
]

function Nav() {
    return (
        <nav className="p-2! absolute  grid justify-center right-0  gap-3 bg-(--bg-primary) z-20 rounded-tl-[10px] rounded-bl-[10px] " >
            {SOCIA_DATA.map((Social) => (
                <motion.a
                    key={Social.id}
                    className="hover:opacity-70 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    href={Social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Social.icon} alt={Social.alt} />
                </motion.a>
            ))}
        </nav>
    );
};

export default Nav;