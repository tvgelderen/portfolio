import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <div id='body' className='bg-stone-100 dark:bg-primary relative max-w-screen h-screen snap-y snap-mandatory overflow-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-themeLight/80 dark:scrollbar-thumb-themeDark/80'>
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
