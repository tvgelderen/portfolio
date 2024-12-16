"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
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
		<div
			className="cursor-pointer mr-4 relative h-6 w-6 flex items-center justify-center"
			onClick={toggleTheme}
		>
			<AnimatePresence>
				{mounted && theme === "dark" && (
					<motion.div
						className="absolute"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={variants}
					>
						<BsFillSunFill
							size={18}
							className="w-4 sm:w-5 md:w-6"
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{mounted && theme === "light" && (
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
