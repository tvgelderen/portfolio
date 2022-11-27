import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../context/AppContext'

//scrollbar-thin scrollbar-track-transparent scrollbar-thumb-light-theme/70 dark:scrollbar-thumb-dark-theme/70

function MyApp({ Component, pageProps }: { Component:any, pageProps:any}) {
  return (
    <div id='body' className='bg-[#fafafa] dark:bg-[#181818] relative max-w-screen h-screen snap-y snap-mandatory overflow-scroll scrollbar-none'>
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
