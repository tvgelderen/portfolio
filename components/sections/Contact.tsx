import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

type FormTypes = {
    name: string,
    companyName: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
};

type Props = {
    content: any
}

const Contact = ({ content }: Props) => {
    const { register, handleSubmit, reset, formState:{errors}} = useForm<FormTypes>();
    
    const sendMail = (data:any) => {
        emailjs
          .send('gmail_service', 'portfolio_template', data, process.env.NEXT_PUBLIC_EMAILJS_KEY)
          .catch(error => console.error(error));

        reset();
    }

    return (
        <div className="sectionStyle">
            <p className="sectionHead">{content.head}</p>
            <h3 className="sectionTitle">{content.title}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <form onSubmit={handleSubmit(sendMail)} className='w-full max-w-[900px] m-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                            <div className='flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.name}
                                </label>
                                <input 
                                  type='text'
                                  {...register('name', { required: true })}
                                  className={`rounded-lg p-3 ${errors.name ? 'border border-[red]' : ''}`}
                                  placeholder={`${content.name}...`}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='px-2'>
                                    <span className='uppercase'>{content.company_name}</span><span className='italic'> - Optional</span>
                                </label>
                                <input 
                                  type='text'
                                  {...register('companyName')}
                                  className='rounded-lg p-3'
                                  placeholder={`${content.company_name}...`}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.email}
                                </label>
                                <input 
                                  type='text'
                                  {...register('email', { required: true })}
                                  className={`rounded-lg p-3 ${errors.email ? 'border border-[red]' : ''}`}
                                  placeholder={`${content.email}...`}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='px-2'>
                                    <span className='uppercase'>{content.phone}</span><span className='italic'> - Optional</span>
                                </label>
                                <input 
                                  type='text'
                                  {...register('phone')}
                                  className='rounded-lg p-3'
                                  placeholder={`${content.phone}...`}
                                />
                            </div>
                        </div>
                        <div className='mt-4 flex flex-col'>
                                <label className='uppercase px-2'>
                                    {content.subject}
                                </label>
                                <input 
                                  type='text'
                                  {...register('subject', { required: true })}
                                  className={`rounded-lg p-3 ${errors.subject ? 'border border-[red]' : ''}`}
                                  placeholder={`${content.subject}...`}
                                />
                            </div>
                        <div className='mt-4 flex flex-col'>
                            <label className='uppercase px-2'>
                                {content.message}
                            </label>
                            <textarea 
                              {...register('message', { required: true })}
                              className={`rounded-lg p-3 ${errors.message ? 'border border-[red]' : ''}`}
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
