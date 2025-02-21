'use client';
import { React, useState } from 'react'
import Github from "../../../public/github-icon.svg";
import Linkedin from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';


function ContactSection() {

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [showMaintenanceMessage, setShowMaintenanceMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,

        }
        // ! test logica invio mail con api da laravel
        try {
            const response = await fetch('http://127.0.0.1:8000/api/mail-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'), // If using CSRF protection (important!)
                },
                body: JSON.stringify(data),
            });
            console.log(response);
            const result = await response.json();
            console.log(result);

            if (response.ok) {
                setEmailSubmitted(true);
                e.target.reset(); // Clear the form

            } else {
                console.error('Errore durante l\'invio dell\'email:', result.error);
            }
        } catch (error) {
            console.error('Errore di rete:', error);
        }


        // setShowMaintenanceMessage(true);
        // setTimeout(() => {
        //     setShowMaintenanceMessage(false);
        // }, 5000);
        // alert("Il servizio di invio email è al momento in manutenzione. Ci scusiamo per l'inconveniente.");













        // ! logica di invio mail da rivedere
        // const JSONdata = JSON.stringify(data);
        // const endpoint = '/api/send/';
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSONdata
        // }
        // const response = await fetch(endpoint, options);
        // const resData = await response.json();
        // console.log(resData);


        // if (response.status == 200) {
        //     console.log('Message sent');
        //     setEmailSubmitted(true);
        // }

    }
    return (
        <section className='grid md:grid-cols-2 my-12 py-24 relative' id='contact'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute sm:top-0  md:top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'>
            </div>
            <div className='z-10'>
                <h5 className='text-2xl font-bold text-primary-500 my-2'>Let&apos;s connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam necessitatibus quae praesentium cumque asperiores ad aspernatur inventore totam numquam voluptas deleniti a, quos ex vel possimus eaque sed maiores.</p>
                <div className='socials flex flex-row gap-6 sm:pl-24 lg:pl-0'>
                    <Link target='_blank' href="https://github.com/AnnalisaCaldarulo97">
                        <Image src={Github} alt='github icon'></Image>
                    </Link>
                    <Link target='_blank' href="https://www.linkedin.com/in/annalisa-caldarulo-987185263/">
                        <Image src={Linkedin} alt='linkedin icon'></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form className='text-white flex flex-col gap-4' onSubmit={handleSubmit}>
                    {/* email */}
                    <label htmlFor="email" className='block mt-5  text-sm'>
                        Your email
                    </label>
                    <input
                        type="email"
                        id='email'
                        required
                        name='email'
                        placeholder='your@email.com'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                    {/* subject */}
                    <label htmlFor="subject" className='block mt-2 text-sm'>
                        Your subject
                    </label>
                    <input
                        type="text"
                        id='subject'
                        required
                        name='subject'
                        placeholder='Just saying hi'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                    <label htmlFor="message" className='block mt-2 text-sm'>
                        Your message
                    </label>
                    <textarea name='message' placeholder='Your message goes here' id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>
                    <button type="submit" className='bg-primary-500 hover:bg-primary-600 font-medium py-2.5 px-5 rounded-lg w-full'>Send message</button>
                    {showMaintenanceMessage && (
                        <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                            <p>Il servizio di invio email è al momento in manutenzione. Ci scusiamo per l&apos;inconveniente.</p>
                        </div>
                    )}
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-lg mt-2'>Email sent! Thank you</p>
                        )
                    }
                    {errorMessage && (
                        <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default ContactSection