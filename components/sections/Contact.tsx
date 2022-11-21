import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { contact } from '../../languages/contact'

const Contact = () => {
    const [name, setName] = useState<string>()
    const [companyName, setCompanyName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [subject, setSubject] = useState<string>()
    const [message, setMessage] = useState<string>()

    const { language } = useAppContext()

    const content = contact[language] === undefined ? contact['en'] : contact[language]

    return (
        <div className="sectionStyle">
            <p className="sectionHead">{content.head}</p>
            <h3 className="sectionTitle">{content.title}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <form className='w-full max-w-[900px] m-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                            <div className='flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.name}
                                </label>
                                <input 
                                  type='text'
                                  onChange={event => setName(event.target.value)}
                                  className='rounded-lg p-3' 
                                  value={name}
                                  placeholder={`${content.name}...`}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.company_name}
                                </label>
                                <input 
                                  type='text'
                                  onChange={event => setCompanyName(event.target.value)}
                                  className='rounded-lg p-3' 
                                  value={companyName}
                                  placeholder={`${content.company_name}...`}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.email}
                                </label>
                                <input 
                                  type='text'
                                  onChange={event => setEmail(event.target.value)}
                                  className='rounded-lg p-3' 
                                  value={email}
                                  placeholder={`${content.email}...`}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.phone}
                                </label>
                                <input 
                                  type='text'
                                  onChange={event => setPhone(event.target.value)}
                                  className='rounded-lg p-3' 
                                  value={phone}
                                  placeholder={`${content.phone}...`}
                                />
                            </div>
                        </div>
                        <div className='mt-6 flex flex-col'>
                            <label className='uppercase px-2'>
                                {content.message}
                            </label>
                            <textarea 
                              onChange={event => setMessage(event.target.value)}
                              value={message}
                              className='rounded-lg p-3'
                              rows={10}
                              placeholder={`${content.message}...`}
                            />
                        </div>
                        <button type='submit' className='w-full mt-4 px-4 py-2 dark:bg-dark-theme rounded-lg'>
                            {content.send}
                        </button>
                    </form>
                </div>
                <div className='col-span-1'>
                    <p className='text-center dark:text-[#b9b9b9] py-4'>thvangelderen@gmail.com | +31 6 3808 4195</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
