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
            </Head>
            <body className="relative scrollbar overflow-x-hidden h-dvh bg-light-primary dark:bg-dark-background">
                <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_48px] sm:bg-[size:32px_64px] lg:bg-[size:48px_96px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#181825_70%,transparent_100%)]"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
