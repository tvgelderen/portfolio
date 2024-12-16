"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarData } from "../lib/NavbarData";
import ThemeChanger from "./ThemeChanger";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	const navItems = NavbarData();

	const scrollToSection = (id: string) => {
		if (document.getElementById(id)) {
			document.getElementById(id)?.scrollIntoView({
				behavior: "smooth",
			});
		}
		setOpen(false);
	};

	return (
		<div className="absolute top-0 w-full">
			<div className="max-w-[1300px] m-auto h-full flex justify-between px-1 items-center">
				<div className="lg:mx-4 mx-2">
					<Logo color="#cb24ff" animate="once" />
				</div>
				<ul className="hidden lg:flex h-full uppercase gap-4 items-center">
					{navItems.map((item, index) => {
						return (
							<li
								className="h-full flex items-center"
								key={item.id}
							>
								<a
									className="hover:text-light-theme/75 hover:dark:text-dark-theme/75 hover-underline cursor-pointer"
									onClick={() => scrollToSection(item.id)}
								>
									{item.name}
								</a>
							</li>
						);
					})}
					<li className="md:mx-3 lg:mx-2">
						<ThemeChanger />
					</li>
				</ul>

				<div className="flex items-center justify-between lg:hidden">
					<div className="z-10">
						<ThemeChanger />
					</div>
					<div
						className="cursor-pointer ml-2 mr-4 z-10 flex items-center"
						onClick={() => setOpen(true)}
					>
						<AiOutlineMenu
							size={22}
							className="w-5 sm:w-6 md:h-6 md:ml-1"
						/>
					</div>
				</div>

				{open && (
					<div
						className="fixed lg:hidden left-0 top-0 w-full h-screen bg-light-primary/5 backdrop-blur-sm z-10"
						onClick={() => setOpen(false)}
					/>
				)}

				<div className="flex fixed lg:hidden left-0 top-0 z-10">
					<AnimatePresence>
						{open && (
							<motion.div
								className="flex relative left-0 top-0 flex-col w-[280px] sm:w-[320px] h-screen bg-white dark:bg-dark-primary px-3 sm:px-4 py-1"
								initial={{ x: -320 }}
								animate={{ x: 0 }}
								exit={{ x: -320 }}
								transition={{ stiffness: 5 }}
							>
								<button
									className="absolute top-2 right-2 p-1 rounded-full cursor-pointer hover:bg-dark-theme/25"
									onClick={() => setOpen(false)}
								>
									<AiOutlineClose
										size={20}
										className="text-dark-900 dark:text-dark-100 w-4 h-4 sm:w-5 sm:h-5"
									/>
								</button>
								<div className="w-[140px] sm:w-[170px]">
									<Logo color="#cb24ff" animate="none" />
								</div>
								<ul className="text-dark-900 uppercase pt-4">
									{navItems.map((item) => {
										return (
											<li
												key={item.id}
												className="py-2 sm:py-4"
											>
												<a
													id={item.id + "nav"}
													className="sm:text-xl cursor-pointer hover:text-dark-100 hover-underline"
													onClick={() =>
														scrollToSection(item.id)
													}
												>
													{item.name}
												</a>
											</li>
										);
									})}
								</ul>
								<div className=" w-[280px] sm:w-[320px] text-slate-900 absolute bottom-0 left-0">
									<p className="uppercase sm:text-xl pl-4 text-light-theme dark:text-dark-theme">
										Get in touch
									</p>
									<div className="flex items-center justify-between w-full mb-2 px-2 sm:px-0">
										<a
											target="_blank"
											href="https://www.linkedin.com/in/timen-van-gelderen/"
											onClick={() => setOpen(false)}
											className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110"
										>
											<BsLinkedin
												size={20}
												className="w-4 h-4 sm:w-5 sm:h-5"
											/>
										</a>
										<a
											target="_blank"
											href="https://github.com/TvGelderen"
											onClick={() => setOpen(false)}
											className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110"
										>
											<BsGithub
												size={20}
												className="w-4 h-4 sm:w-5 sm:h-5"
											/>
										</a>
										<a
											onClick={() => {
												document
													.getElementById("contact")
													?.scrollIntoView({
														behavior: "smooth",
													});
												setOpen(false);
											}}
											className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110"
										>
											<AiOutlineMail
												size={20}
												className="w-4 h-4 sm:w-5 sm:h-5"
											/>
										</a>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
