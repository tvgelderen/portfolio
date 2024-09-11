import Head from "next/head";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Layout = () => {
    return (
        <div className="h-full">
            <Head>
                <title>Timen van Gelderen - Portfolio</title>
                <link rel="icon" href="img/icons/favicon.ico" />
            </Head>

            <Hero />

            <Skills />

            <Projects />

            <Contact />
        </div>
    );
};

export default Layout;
