import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../context/AppContext'
import ThemeChanger from '../components/ThemeChanger'

function MyApp({ Component, pageProps }: { Component:any, pageProps:any}) {
  return (
    <div id='body' className='z-[2] bg-[#fafafa] dark:bg-[#181818] relative max-w-screen h-screen snap-y snap-mandatory overflow-scroll lg:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-light-theme/80 dark:scrollbar-thumb-dark-theme/80'>
      <ThemeProvider enableSystem={true} attribute="class">
        <AppContextProvider>
            <Navbar />
            <Component {...pageProps} />
            <ThemeChanger />
        </AppContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
