import React from 'react';
import tw from 'tailwind-styled-components';
import { Tooltip } from 'react-tippy';
import { IconType } from 'react-icons';
import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

function Social(props: { name: string, url: string,  Icon: IconType }) {

    const {name, url, Icon} = props;

    return (
        <Tooltip 
            className="transition-all duration-200"
            position="bottom"
            trigger="mouseenter"
            hideOnClick={true}
            duration={200}
            unmountHTMLWhenHide={true}
            html={<h1 className="dark:bg-[#282f3b] bg-zinc-300 rounded-lg dark:text-gray-400 text-zinc-600 font-semibold px-[12px] p-[5px] mt-[8px]">{name}</h1>}
        >
            <IconButton href={url} target="_blank">
                <Icon />
            </IconButton>
        </Tooltip>
    )
}

export default function Header() {
    
    const [theme, setTheme] = React.useState("dark");
    const ThemeIcon = theme === "dark" ? FiMoon : FiSun;

    const changeTheme = () => {
        let newTheme = theme === "light" ? "dark" : "light";

        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        newTheme === "light"
            ? document.querySelector("html")?.classList.remove("dark")
            : document.querySelector("html")?.classList.add("dark");
    }

    React.useEffect(() => {
        let storedTheme = localStorage.getItem("theme") as string;

        if (!storedTheme) {
            localStorage.setItem("theme", window.matchMedia('(prefers-color-scheme: dark)').matches ? "light" : "dark");
        } else {
            setTheme(storedTheme);
            storedTheme === "light"
                ? document.querySelector("html")?.classList.remove("dark")
                : document.querySelector("html")?.classList.add("dark");
        }
    }, [])

	return (
		<HeaderContainer>
			<HeaderLeft>
                <HeaderLeftButton onClick={changeTheme}>
                    <ThemeIcon className="w-[20px] h-[20px]" />
                </HeaderLeftButton>
                <HeaderLeftButton href={require("../assets/Gavin_Holmes_Resume.pdf")} target="_blank">
                    <h1 className="px-[2px] font-semibold">
                        Resume
                    </h1>
                </HeaderLeftButton>
            </HeaderLeft>
			<HeaderRight>
				{/* github */}
                <Social name="Github" url="https://github.com/gavrh" Icon={SiGithub} />
				{/* twitter */}
                <Social name="Twitter" url="https://x.com/gavholm" Icon={SiTwitter} />
				{/* linkedin */}
                <Social name="LinkedIn" url="https://linkedin.com/in/gavrh" Icon={SiLinkedin} />
				{/* email */}
                <Social name="Email" url="mailto:gavin@gav.codes" Icon={HiOutlineMail} />
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
    dark:bg-pop
    bg-zinc-300
    dark:bg-opacity-40
    bg-opacity-40
    border-[1px]
    dark:border-pop
    border-zinc-300
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
    child:dark:text-gray-400
    child:text-zinc-600
    child:transition-all
    child:duration-200
    child:ease-in-out
    
    hover:child:dark:text-gray-300
    hover:child:text-zinc-800
`;

const HeaderLeftButton = tw.a`
    flex
    justify-center
    items-center
    h-[35px]
    rounded-lg
    px-[7px]
    mr-[5px]

    child:dark:text-gray-400
    child:text-zinc-600
    child:transition-all
    child:duration-200
    child:ease-in-out

    hover:dark:bg-[#292f3b]
    hover:dark:bg-opacity-80
    hover:bg-zinc-300
    hover:bg-opacity-80
    hover:cursor-pointer

    transition-all
    duration-200
`
