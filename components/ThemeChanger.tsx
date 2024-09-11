import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeChanger = () => {
    const [loaded, setLoaded] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        setLoaded(true);

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && savedTheme != "system") {
            setTheme(savedTheme);
        } else {
            setTheme("dark");
        }
    }, []);

    const variants = {
        hidden: {
            y: -200,
            transition: { stiffness: 10 },
        },
        visible: {
            y: 0,
            transition: { stiffness: 10 },
        },
    };

    return (
        <div className="cursor-pointer mr-4" onClick={toggleTheme}>
            <AnimatePresence>
                {loaded && theme === "dark" && (
                    <motion.div
                        className="absolute"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                    >
                        <BsFillSunFill size={18} className="w-4 sm:w-5 md:w-6" />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {loaded && theme === "light" && (
                    <motion.div
                        className="absolute"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                    >
                        <BsFillMoonFill
                            size={18}
                            className="w-[14px] sm:w-[18px] md:h-[18px]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeChanger;
