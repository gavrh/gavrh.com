import React from 'react';
import tw from 'tailwind-styled-components';

export default function Header() {


    return (
        <HeaderContainer>
            <HeaderLeft>

            </HeaderLeft>
            <HeaderRight>

            </HeaderRight>
        </HeaderContainer>
    )
}

// Header styled components
const HeaderContainer = tw.div`
    w-full
    h-[60px]
    flex
    sticky
    top-[25px]

    rounded-lg
    backdrop-blur
`

const HeaderLeft = tw.div`
    w-full
    h-full

    border-[1px]
    border-pink-500
`

const HeaderRight = tw.div`
    w-full
    h-full

    border-[1px]
    border-purple-500
`