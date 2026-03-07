import { bar } from "../assets"
import { motion } from "motion/react"

interface HeaderProps {
    onToggle: () => void
}

function Header({ onToggle }: HeaderProps) {
    return (
        <header className="flex justify-between items-center w-screen h-50px relative px-8 pt-4">
            <h1 className="text-xl font-medium font-logo">SOULJPG</h1>
            <motion.img
                className="w-7 h-7 object-cover cursor-pointer"
                onClick={onToggle}
                whileHover={{ opacity: 0.7, scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                src={bar}
                alt="Toggle menu"
            />
        </header>
    )
}

export default Header