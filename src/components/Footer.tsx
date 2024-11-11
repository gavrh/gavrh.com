import React from 'react';
import tw from 'tailwind-styled-components';

export default function Footer() {

    return (
        <FooterContainer>
            <FooterDivider />
            <h1 className='pl-[30px] text-gray-600 text-3xl font-bold mt-[20px]'>Gavin Holmes</h1>
            <h1 className='pl-[30px] text-gray-700 text-xl font-semibold mt-[5px]'>© All rights reserved {new Date().getFullYear()}</h1>
        </FooterContainer>
    )
}

// Footer styled components
const FooterContainer = tw.div`
    w-full
    flex
    flex-col
    py-[50px]
`

const FooterDivider = tw.div`
    w-full
    h-[6px]
    bg-[#1f252e]
    bg-opacity-40
    rounded-full
`