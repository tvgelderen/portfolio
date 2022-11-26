import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'

type FormTypes = {
    name: string,
    email: string,
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
            <div className="sectionContent">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <form onSubmit={handleSubmit(sendMail)} className='w-full max-w-[900px] m-auto'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                                <div className='flex flex-col'>
                                    <input 
                                      type='text'
                                      {...register('name', { required: true })}
                                      className={`py-2 px-1 focus:outline-none bg-light-background dark:bg-dark-background ${errors.name ? 'border-b-2 border-[red]/75' : 'border-b-2 border-light-theme/40  focus:border-light-theme dark:border-dark-theme/40 focus:dark:border-dark-theme'}`}
                                      placeholder={`${content.name}...`}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <input 
                                      type='text'
                                      {...register('email', { required: true, pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                      } })}
                                      className={`py-2 px-1 focus:outline-none bg-light-background dark:bg-dark-background ${errors.email ? 'border-b-2 border-[red]/75' : 'border-b-2 border-light-theme/40  focus:border-light-theme dark:border-dark-theme/40 focus:dark:border-dark-theme'}`}
                                      placeholder={`${content.email}...`}
                                    />
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col'>
                                    <input 
                                      type='text'
                                      {...register('subject', { required: true })}
                                      className={`py-2 px-1 focus:outline-none bg-light-background dark:bg-dark-background ${errors.subject ? 'border-b-2 border-[red]/75' : 'border-b-2 border-light-theme/40  focus:border-light-theme dark:border-dark-theme/40 focus:dark:border-dark-theme'}`}
                                      placeholder={`${content.subject}...`}
                                    />
                                </div>
                            <div className='mt-4 flex flex-col'>
                                <textarea 
                                  {...register('message', { required: true })}
                                  className={`py-2 px-1 focus:outline-none bg-light-background dark:bg-dark-background ${errors.message ? 'border-b-2 border-[red]/75' : 'border-b-2 border-light-theme/40  focus:border-light-theme dark:border-dark-theme/40 focus:dark:border-dark-theme'}`}
                                  rows={6}
                                  placeholder={`${content.message}...`}
                                />
                            </div>
                            <button type='submit' className='w-full mt-4 px-4 py-2 bg-light-theme/40 hover:bg-light-theme/75 dark:bg-dark-theme/40 hover:dark:bg-dark-theme/75 rounded-lg'> 
                                {content.send}
                            </button>
                        </form>
                    </div>
                    <div className='col-span-1 px-2 lg:px-4 pt-6 lg:pt-2'>
                        <h4 className='font-semibold'>{content.contact_info}</h4>
                        <div className='flex justiyf-center items-center'>
                            <HiOutlinePhone size={24} />
                            <p className='text-center dark:text-[#b9b9b9] py-4'>&nbsp; +31 6 3808 4195</p>
                        </div>
                        <div className='flex justiyf-center items-center'>
                            <AiOutlineMail size={24} />
                            <p className='text-center dark:text-[#b9b9b9] py-4'>&nbsp; thvangelderen@gmail.com</p>
                        </div>
                        <div className='flex justiyf-center items-center'>
                            <HiOutlineLocationMarker size={24} />
                            <p className='text-center dark:text-[#b9b9b9] py-4'>&nbsp; Boeijengastrjitte 18D, 8627SG Gauw</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
