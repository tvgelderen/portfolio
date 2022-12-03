import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import Notification from '../Notification'

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
    const [sent, setSent] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const { register, getValues, handleSubmit, reset, formState:{errors}} = useForm<FormTypes>();
    
    const sendMail = (data: FormTypes) => {
        emailjs
          .send('gmail_service', 'portfolio_template', data, process.env.NEXT_PUBLIC_EMAILJS_KEY)
          .then(() => {
             setSent(true);
             setTimeout(() => setSent(false), 4000);
          })
          .catch(error => {
            console.error(error);
            setError(true);
            setTimeout(() => setError(false), 4000);
          });

        setSent(true);
        setTimeout(() => setSent(false), 4000);

        reset();
    }

    const values = getValues();

    return (
        <div className="sectionLast">
            <div className="contact">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <form onSubmit={handleSubmit(sendMail)} className='w-full max-w-[900px] m-auto'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                                <div className='sm:mt-4 input-container'>
                                    <input 
                                      type='text'
                                      {...register('name', { required: true })}
                                      className={`${errors.name ? 'input-error' : 'input'}`}
                                    />
                                    <label className={values.name ? 'input-label-float' : 'input-label'}>{content.name}</label>
                                </div>
                                <div className='sm:mt-4 input-container'>
                                    <input 
                                      type='text'
                                      {...register('email', { required: true, pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                      } })}
                                      className={`${errors.email ? 'input-error' : 'input'}`}
                                    />
                                    <label className={values.email ? 'input-label-float' : 'input-label'}>{content.email}</label>
                                </div>
                            </div>
                            <div className='mt-4 input-container'>
                                    <input 
                                      type='text'
                                      {...register('subject', { required: true })}
                                      className={`${errors.subject ? 'input-error' : 'input'}`}
                                    />
                                    <label className={values.subject ? 'input-label-float' : 'input-label'}>{content.subject}</label>
                                </div>
                            <div className='mt-4 input-container'>
                                <textarea 
                                  {...register('message', { required: true })}
                                  className={`${errors.message ? 'input-error' : 'input'}`}
                                  rows={6}
                                />
                                <label className={values.message ? 'input-label-float' : 'input-label'}>{content.message}</label>
                            </div>
                            <button type='submit' className='button w-full mt-4 px-4 py-2 rounded-lg'> 
                                {content.send}
                            </button>
                        </form>
                    </div>
                    <div className='col-span-1 px-2 lg:px-4 pt-6 lg:pt-2'>
                        <h4 className='font-semibold'>{content.contact_info}</h4>
                        <div className='flex justify-center items-center'>
                            <HiOutlinePhone size={24} />
                            <p className='text-center dark:text-[#b9b9b9] py-4'>&nbsp; +31 6 3808 4195</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <AiOutlineMail size={24} />
                            <p className='text-center dark:text-[#b9b9b9] py-4'>&nbsp; thvangelderen@gmail.com</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <HiOutlineLocationMarker size={24} />
                            <p className='text-center dark:text-[#b9b9b9] py-4'>&nbsp; Boeijengastrjitte 18D, 8627SG Gauw</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {sent && <Notification type='success' message='Email sent successfully' />}
            {error && <Notification type='error' message='Something went wrong' />}
        </div>
    )
}

export default Contact
