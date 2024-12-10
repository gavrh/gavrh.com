import React from 'react';
import tw from 'tailwind-styled-components';
import { Tooltip } from 'react-tippy';
import { IconType } from 'react-icons';
import {
    SiRust,
    SiGo,
    SiTypescript,
    SiGit,
    SiDocker,
    SiZig,
    SiC,
    SiReact,
    SiTauri,
    SiTailwindcss,
    SiPostgresql,
    SiNeovim,
    SiLua,
    SiGnubash,
    SiRaspberrypi,
    SiLlvm,
    SiElixir
} from 'react-icons/si';

function Technology(props: { name: string, Icon: IconType }) {

    const {name, Icon} = props;

    return (
        <Tooltip 
            className="transition-all duration-200"
            position="top"
            trigger="mouseenter"
            hideOnClick={false}
            duration={200}
            unmountHTMLWhenHide={true}
            html={<h1 className="bg-[#1f252e] rounded-lg text-gray-400 font-semibold px-[12px] p-[5px] mb-[10px]">{name}</h1>}
        >
            <div>
                <Icon className="min-h-[22px] min-w-[22px]" />
            </div>
        </Tooltip>
    )
}

export default function Technologies() {

    return (
        <TechnologiesContainer>
            <Technology name="Rust" Icon={SiRust} />
            <Technology name="Go" Icon={SiGo} />
            <Technology name="Typescript" Icon={SiTypescript} />
            <Technology name="Zig" Icon={SiZig} />
            <Technology name="C/C++" Icon={SiC} />
            <Technology name="Git" Icon={SiGit} />
            <Technology name="Docker" Icon={SiDocker} />
            <Technology name="React" Icon={SiReact} />
            <Technology name="Tauri" Icon={SiTauri} />
            <Technology name="TailwindCSS" Icon={SiTailwindcss} />
            <Technology name="PostgreSQL" Icon={SiPostgresql} />
            <Technology name="NeoVim" Icon={SiNeovim} />
            <Technology name="Lua" Icon={SiLua} />
            <Technology name="Bash" Icon={SiGnubash} />
            <Technology name="Raspberry Pi" Icon={SiRaspberrypi} />
            <Technology name="LLVM" Icon={SiLlvm} />
            <Technology name="Elixir" Icon={SiElixir} />
        </TechnologiesContainer>
    )
}

// technologies styled components
const TechnologiesContainer = tw.div`
    flex
    flex-wrap
    justify-center
    mt-[10px]
    py-[5px]
    px-[1px]
    bg-[#1f252e]
    bg-opacity-40
    border-[1px]
    border-[#1f252e]
    rounded-lg
    child:mx-[10px]
    child:my-[10px]
`
