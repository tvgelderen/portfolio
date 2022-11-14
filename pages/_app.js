import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AppContextProvider } from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-stone-100 dark:bg-primary scrollbar scrollbar-track-white scrollbar-thumb-white'>
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
