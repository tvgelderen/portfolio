import { useRouter } from 'next/router'
import React from 'react'
import { useAppContext } from '../context/AppContext'


const LanguageSelector = () => {
    const { language, setLanguage } = useAppContext()

    const router = useRouter()

    return (
        <div className="lang-menu">
            <div className="selected-lang cursor-pointer flex justify-between mt-[3px]">
                <img src={`/lang/${language}-flag.png`} alt='en' className="w-[25px] h-[25px] rounded-full object-cover" />
            </div>
            <div className='lang-list hidden'>
                <ul className="absolute pt-2">
                    <li>
                        <img 
                          src='/lang/en-flag.png' 
                          alt='en' 
                          className="w-[25px] h-[25px] rounded-full object-cover cursor-pointer mb-2"
                          onClick={() => {
                            localStorage.setItem("language", "en")
                            setLanguage('en')
                            router.push('/en/')
                          }} 
                        />
                    </li>
                    <li>
                        <img 
                          src='/lang/nl-flag.png' 
                          alt='nl' 
                          className="w-[25px] h-[25px] rounded-full object-cover cursor-pointer"  
                          onClick={() => {
                            localStorage.setItem("language", "nl")
                            setLanguage('nl')
                            router.push('/nl/')
                          }} 
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LanguageSelector
