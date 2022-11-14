import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <div id='body' className='bg-stone-100 dark:bg-primary relative max-w-screen h-screen snap-y snap-mandatory overflow-hidden scrollbar dark:scrollbar-track-dark-800/60 scrollbar-thumb-[#a842c9]/60'>
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
