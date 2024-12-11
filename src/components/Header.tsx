import React from 'react';
import tw from 'tailwind-styled-components';
import { Tooltip } from 'react-tippy';
import { IconType } from 'react-icons';
import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

function Social(props: { name: string, url: string, blank: boolean,  Icon: IconType }) {

    const {name, url, blank, Icon} = props;

    return (
        <Tooltip 
            className="transition-all duration-200"
            position="bottom"
            trigger="mouseenter"
            hideOnClick={true}
            duration={200}
            unmountHTMLWhenHide={true}
            html={<h1 className="bg-[#282f3b] rounded-lg text-gray-400 font-semibold px-[12px] p-[5px] mt-[8px]">{name}</h1>}
        >
            <IconButton href={url} target={blank ? "_blank" : ""}>
                <Icon />
            </IconButton>
        </Tooltip>
    )
}

export default function Header() {
    
    // temp hard coded
    const theme = "dark";
    const ThemeIcon = theme == "dark" ? FiMoon : FiSun;

	return (
		<HeaderContainer>
			<HeaderLeft>
                <ThemeButton>
                    <ThemeIcon />
                </ThemeButton>
            </HeaderLeft>
			<HeaderRight>
				{/* github */}
                <Social name="Github" url="https://github.com/gavrh" blank={true} Icon={SiGithub} />
				{/* twitter */}
                <Social name="Twitter" url="https://x.com/gavholm" blank={true} Icon={SiTwitter} />
				{/* linkedin */}
                <Social name="LinkedIn" url="https://linkedin.com/in/gavrh" blank={true} Icon={SiLinkedin} />
				{/* email */}
                <Social name="Email" url="mailto:hey@gav.codes" blank={false} Icon={HiOutlineMail} />
			</HeaderRight>
		</HeaderContainer>
	);
}

// Header styled components
const HeaderContainer = tw.div`
    w-full
    h-[50px]
    flex
    sticky
    z-[99]
    top-[25px]
    bg-[#1f252e]
    bg-opacity-40
    border-[1px]
    border-[#1f252e]
    rounded-lg
    backdrop-blur-lg
`;

const HeaderLeft = tw.div`
    w-full
    h-full
    flex
    justify-begin
    items-center
    first:ml-[8px]
`;

const HeaderRight = tw.div`
    w-full
    h-full
    flex
    justify-end
    items-center
    child:mx-[8px]
    last:mr-[8px]
`;

const IconButton = tw.a`
    flex
    justify-center
    items-center

    child:w-[25px]
    child:h-[25px]
    child:text-gray-400
    child:transition-all
    child:duration-200
    child:ease-in-out
    
    hover:child:text-gray-300
`;

const ThemeButton = tw.button`
    flex
    justify-center
    items-center
    w-[35px]
    h-[35px]
    rounded-lg
    p-[5px]

    child:w-[25px]
    child:h-[25px]
    child:text-gray-400
    child:transition-all
    child:duration-200
    child:ease-in-out

    hover:bg-[#282f3b]

    transition-all
    duration-200
`
