import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../context/AppContext'

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <div id='body' className='bg-light-background dark:bg-dark-background scrollbar'>
            <ThemeProvider enableSystem={true} attribute="class">
                <AppContextProvider>
                    <Navbar />
                    <Component {...pageProps} />
                </AppContextProvider>
            </ThemeProvider>
        </div>
    )
}

export default MyApp
