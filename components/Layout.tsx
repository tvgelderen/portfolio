"use client";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Layout = () => {
	return (
		<div className="h-full">
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default Layout;
