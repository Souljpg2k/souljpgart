import { bar } from "../assets";
import { motion } from "motion/react";

interface HeaderProps {
    show: boolean;
    setShow: (value: boolean) => void;
}

function Header({ setShow, show }: HeaderProps) {

    return (
        <div className="flex justify-between items-center w-screen h-50px relative pl-8! pr-8! pt-4!">
            <h1 className=" text-xl font-medium font-logo">SOULJPG</h1>
            <motion.img
                className="w-7 h-7 object-cover cursor-pointer"
                onClick={() => setShow(!show)}
                whileHover={{ opacity: 0.7, scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                src={bar} alt="bar"
            />
        </div>
    );

};

export default Header;