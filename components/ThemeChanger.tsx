"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div
            className="cursor-pointer mr-4 relative h-6 w-6 flex items-center justify-center pb-1"
            onClick={toggleTheme}
        >
            {mounted && theme === "dark" && (
                <BsFillSunFill
                    size={18}
                    className="w-4 sm:w-5 md:w-6"
                />
            )}
            {mounted && theme === "light" && (
                <BsFillMoonFill
                    size={18}
                    className="w-[14px] sm:w-[18px] md:h-[18px]"
                />
            )}
        </div>
    );
};

export default ThemeChanger;
