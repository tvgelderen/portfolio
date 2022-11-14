import { useRouter } from 'next/router'
import React, { use } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const NextComponent = () => {
    const router = useRouter()
    const asPath = router.asPath

    const handleNext = () => {
        const lang = asPath.substring(0, 3)
        let id = asPath.substring(asPath.indexOf('#'))

        switch (id) {
            case '/en':
            case '/nl':
                id = '#about'
                break
            case '#about':
                id = '#skills'
                break
            case '#skills':
                id = '#projects'
                break
            case '#projects':
                id = '#contact'
                break
            case '#contact':
                id = ''
                break
        }

        router.push(lang + id)
    }

    return (
        <div 
          className="fixed bottom-5 z-[11] lg:left-[49%] left-[47%] m-auto md:p-4 p-2 rounded-full border cursor-pointer border-dark-700 bg-transparent hover:bg-dark-900/50"
          onClick={handleNext}
        >
            {asPath.substring(asPath.indexOf('#')) === '#contact' ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
        </div>
    )
}

export default NextComponent
