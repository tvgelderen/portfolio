import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="relative scrollbar overflow-x-hidden min-h-screen bg-gradient-to-b from-[#cb24ff]/5 via-[#cb24ff]/20 to-[#cb24ff]/5 before:pointer-events-none before:absolute before:inset-0 before:block before:bg-center before:bg-[url('/img/bg.svg')] before:opacity-5 dark:before:opacity-15">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
