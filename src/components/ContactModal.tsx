import React from 'react';
import tw from 'tailwind-styled-components';
import { motion, AnimatePresence } from 'framer-motion'
import Backdrop from './Backdrop';

export default function ContactModal(props: any) {

    // props
    const { modalActive, setModalActive } = props;

    // handle contact form submit
    const contactFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const turnstileRes = formData.get('cf-turnstile-response') as string;

        console.log(formData);

        console.log(turnstileRes);

        const geo_data = await fetch("http://ip-api.com/json/?fields=16974137").then(res => res.json());
        await fetch(process.env.REACT_APP_DISCORD_WEBHOOK_URL as string + "?wait=true", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: null,
                embeds: [{
                    description: "_FILLER_",
                    color: null,
                    fields: [{
                        name: "City",
                        value: geo_data.city,
                        inline: true
                    }, {
                        name: "‎",
                        value: "‎",
                        inline: true
                    }, {
                        name: "Zipcode",
                        value: geo_data.zip,
                        inline: true
                    }, {
                        name: "Region",
                        value: geo_data.regionName,
                        inline: true
                    }, {
                        name: "‎",
                        value: "‎",
                        inline: true
                    }, {
                        name: "Country",
                        value: geo_data.country,
                        inline: true
                    }, {
                        name: "Mobile",
                        value: geo_data.mobile,
                        inline: true
                    }, {
                        name: "Proxy",
                        value: geo_data.proxy,
                        inline: true
                    }, {
                        name: "Hosting",
                        value: geo_data.hosting,
                        inline: true
                    }]
                }],
                username: "_FILLER_",
                attachments: []
            })
        }).then(async (res) => {

        })
    };

    // handle no scroll
    // React.useEffect(() => {
    //     const handleNoScroll = (e: WheelEvent) => {
    //         if (modalActive) {
    //             e.preventDefault();
    //         }
    //     }
    //     window.addEventListener('wheel', handleNoScroll, { passive: false });
    //     return () => {
    //         window.removeEventListener('wheel', handleNoScroll);
    //     }
    // }, [modalActive])

    return (
        <AnimatePresence>
            { modalActive && (
            <div>
                <ModalContainer
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ y: 800 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        y: {
                            duration: 0.2
                        }
                    }}
                >
                    <ContactForm onSubmit={ async(e) => await contactFormSubmit(e) }>
                        {/* email */}
                        <ContactItemTitle>Email</ContactItemTitle>
                        <ContactEmailInput
                            placeholder='example@gmail.com'
                        />
                        {/* message */}
                        <ContactItemTitle>Message</ContactItemTitle>
                        <ContactTextArea
                            className='flex-1'
                            maxLength={1500}
                            placeholder='Hey Gavin, I want to hire you!'
                        />
                        {/* send button */}
                        <button type='submit' className='my-[20px] w-[50px] h-[25px] bg-blue-500'>SEND</button>
                        {/* cloudflare turnstile */}
                    </ContactForm>
                </ModalContainer>
                <Backdrop setModalActive={setModalActive} />
            </div>
            )}
        </AnimatePresence>
    )
}

// ContactModal styled components
const ModalContainer = tw(motion.div)`
    fixed
    inset-0
    m-auto
    w-[550px]
    h-[650px]
    bg-[#14181d]
    border-[1px]
    border-[#1f252e]
    rounded-lg
    z-[99]
`

const ContactForm = tw.form`
    flex
    flex-col
    h-full
    max-w-[500px]
    mx-auto
    py-[50px]
`

const ContactItemTitle = tw.h1`
    text-gray-500
    text-lg
    font-bold
    mb-[5px]
`

const ContactEmailInput = tw.input`
    bg-[#0f1114]
    shadow-[inset_0px_0px_6px_0px_rgba(0,0,0,0.3)]
    rounded-lg
    p-[10px]
    mb-[20px]
    text-gray-400
    placeholder:text-gray-600

    focus:outline-none
`

const ContactTextArea = tw.textarea`
    bg-[#0f1114]
    shadow-[inset_0px_0px_6px_0px_rgba(0,0,0,0.3)]
    rounded-lg
    p-[10px]
    mb-[20px]
    text-gray-400
    placeholder:text-gray-600
    resize-none
    scrollbar-hide
    
    focus:outline-none
`