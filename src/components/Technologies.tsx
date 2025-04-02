import React from 'react';
import tw from 'tailwind-styled-components';
import { Tooltip } from 'react-tippy';
import { IconType } from 'react-icons';
import {
	SiRust,
	SiC,
	SiGo,
	SiTypescript,
	SiZig,
	SiCmake,
	SiGit,
	SiDocker,
	SiReact,
	SiTauri,
	SiPostgresql,
	SiNeovim,
	SiLua,
	SiGnubash,
	SiRaspberrypi,
	SiOpengl,
	SiLlvm
} from 'react-icons/si';

function Technology(props: { name: string; Icon: IconType }) {
	const { name, Icon } = props;

	return (
		<Tooltip
			className="transition-all duration-200"
			position="top"
			trigger="mouseenter"
			hideOnClick={false}
			duration={200}
			unmountHTMLWhenHide={true}
			html={
				<h1 className="dark:bg-[#292f3b] bg-zinc-300 rounded-lg dark:text-gray-400 text-zinc-600 font-semibold px-[12px] p-[5px] mb-[8px]">
					{name}
				</h1>
			}
		>
			<Icon className="dark:text-gray-300 text-zinc-700 min-h-[22px] min-w-[22px]" />
		</Tooltip>
	);
}

export default function Technologies() {
	return (
		<TechnologiesContainer>
			<Technology name="Rust" Icon={SiRust} />
			<Technology name="C/C++" Icon={SiC} />
			<Technology name="Go" Icon={SiGo} />
			<Technology name="Typescript" Icon={SiTypescript} />
			<Technology name="Zig" Icon={SiZig} />
			<Technology name="CMake" Icon={SiCmake} />
			<Technology name="Git" Icon={SiGit} />
			<Technology name="Docker" Icon={SiDocker} />
			<Technology name="React" Icon={SiReact} />
			<Technology name="Tauri" Icon={SiTauri} />
			<Technology name="PostgreSQL" Icon={SiPostgresql} />
			<Technology name="NeoVim" Icon={SiNeovim} />
			<Technology name="Lua" Icon={SiLua} />
			<Technology name="Bash" Icon={SiGnubash} />
			<Technology name="Raspberry Pi" Icon={SiRaspberrypi} />
			<Technology name="OpenGL" Icon={SiOpengl} />
			<Technology name="LLVM" Icon={SiLlvm} />
		</TechnologiesContainer>
	);
}

// technologies styled components
const TechnologiesContainer = tw.div`
    flex
    flex-wrap
    justify-center
    mt-[15px]
    py-[5px]
    px-[1px]
    dark:bg-pop
    bg-zinc-300
    dark:bg-opacity-40
    bg-opacity-40
    border-[1px]
    dark:border-pop
    border-zinc-300
    rounded-lg
    child:icon-wrap:mx-[10px]
    child:sm:mx-[13px]
    child:mx-[12px]
    child:my-[10px]
    child:transition-none
    child:duration-0
`;
