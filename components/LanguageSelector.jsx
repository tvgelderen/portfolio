import React from 'react'
import { useAppContext } from '../context/AppContext'


const LanguageSelector = () => {
    const { language } = useAppContext()

    return (
        <div className="lang-menu">
            <div className="selected-lang cursor-pointer flex justify-between">
                <img src='/lang/en-icon.png' alt='en' className="w-[30px]" />
            </div>
            <div className='lang-list hidden'>
                <ul className="absolute">
                    <li>
                        <img 
                          src='/lang/en-icon.png' 
                          alt='en' 
                          className="w-[30px] cursor-pointer pb-1" 
                        />
                    </li>
                    <li>
                        <img 
                          src='/lang/nl-icon.png' 
                          alt='nl' 
                          className="w-[30px] cursor-pointer"  
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LanguageSelector
