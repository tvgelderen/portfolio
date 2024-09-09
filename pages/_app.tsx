import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <AppContextProvider>
                <Navbar />
                <Component {...pageProps} />
            </AppContextProvider>
        </ThemeProvider>
    );
}

export default MyApp;
