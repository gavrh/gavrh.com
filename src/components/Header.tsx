import React from 'react';
import tw from 'tailwind-styled-components';
import {
    SiGithub,
    SiX,
    SiLinkedin
} from "react-icons/si";

export default function Header(props: any) {

    // props
    const {setModalActive} = props;

    // functions
    const handleContactButton = (e: any) => {
        e.preventDefault();
        setModalActive(true);
    }

    return (
        <HeaderContainer>
            <HeaderLeft>

            </HeaderLeft>
            <HeaderRight>
                {/* github */}
                <IconButton href="https://github.com/gavrh" target='_blank'>
                    <SiGithub />
                </IconButton>
                {/* twitter */}
                <IconButton href="https://x.com/gavholm" target='_blank'>
                    <SiX/>
                </IconButton>
                {/* linkedin */}
                <IconButton href="https://linkedin.com/in/gavrh" target='_blank'>
                    <SiLinkedin />
                </IconButton>
                {/* contact */}
                <ContactButton onClick={handleContactButton}>
                    Contact
                </ContactButton>
            </HeaderRight>
        </HeaderContainer>
    )
}

// Header styled components
const HeaderContainer = tw.div`
    w-full
    h-[50px]
    flex
    sticky
    top-[25px]
    bg-[#1f252e]
    bg-opacity-40
    border-[1px]
    border-[#1f252e]
    rounded-lg
    backdrop-blur
`

const HeaderLeft = tw.div`
    w-full
    h-full
`

const HeaderRight = tw.div`
    w-full
    h-full
    flex
    justify-end
    items-center
    child:mx-[8px]
    last:mr-[8px]
`

const IconButton = tw.a`
    flex
    justify-center
    items-center

    child:w-[25px]
    child:h-[25px]
    child:text-gray-400
    child:transition-all
    child:duration-300
    child:ease-in-out
    
    hover:child:text-gray-300
`

const ContactButton = tw.button`
    bg-emerald-600
    bg-opacity-40
    border-[1px]
    border-emerald-500
    py-[5px]
    px-[10px]
    rounded-lg
    text-gray-300
    font-semibold

    transition-all
    duration-300

    hover:bg-opacity-70
    hover:border-bg-emerald-400
    hover:text-gray-200

    active:bg-opacity-90
`