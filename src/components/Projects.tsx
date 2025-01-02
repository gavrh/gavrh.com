import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import GithubColors from './github_lang_colors.json';

function Project(props: {
	repo: string;
	desc: string;
	lang: string;
	color: string;
}) {
	return (
		<ProjectContainer
			to={`https://github.com/gavrh/${props.repo}`}
			target="_blank"
		>
			<h1 className="dark:text-gray-300 text-zinc-700 font-semibold text-xl">
				{props.repo}
			</h1>
			<h1 className="flex-1 my-[5px]">{props.desc}</h1>
			<ProjectBottom>
				<div className="flex items-center">
					<div
						className="w-[12px] h-[12px] rounded-full mr-[7px]"
						style={{ backgroundColor: props.color }}
					/>
					<h1 className="font-semibold">{props.lang}</h1>
				</div>
			</ProjectBottom>
		</ProjectContainer>
	);
}

export default function Projects() {
	return (
		<ProjectsContainer>
			{/* cloak */}
			{/* <Project
				repo="cloak"
				desc="The best alternative Discord client"
				lang="Rust"
				color={GithubColors['Rust']}
			/> */}
			{/* scrapbook */}
			<Project
				repo="scrapbook"
				desc="Online file storage scrapbook for my family (Christmas 2024)"
				lang="Go"
				color={GithubColors['Go']}
			/>
			{/* zurl */}
			<Project
				repo="zurl"
				desc="Command line tool for transferring data with URLs"
				lang="Zig"
				color={GithubColors['Zig']}
			/>
			{/* glang */}
			<Project
				repo="glang"
				desc="(unfinished) .g programming language"
				lang="C"
				color={GithubColors['C']}
			/>
			{/* gav.codes */}
			<Project
				repo="gav.codes"
				desc="My personal site"
				lang="Typescript"
				color={GithubColors['TypeScript']}
			/>
			{/* nvim-config */}
			{/* <Project
				repo="nvim-config"
				desc="My neovim config"
				lang="Lua"
				color={GithubColors['Lua']}
			/> */}
		</ProjectsContainer>
	);
}

// projects styled components
const ProjectsContainer = tw.div`
    w-full
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    mt-[15px]
`;

const ProjectContainer = tw(Link)`
    w-full
    h-[135px]
    flex
    flex-col
    text-start
    border-[1px]
    py-[10px]
    px-[15px]
    rounded-lg
    dark:bg-pop
    dark:bg-opacity-40
    bg-zinc-300
    bg-opacity-40
    border-[1px]
    dark:border-pop
    border-zinc-300
    
    transition-colors
    duration-200

    hover:dark:border-gray-700
    hover:border-zinc-400
`;
const ProjectBottom = tw.div`
    flex
`;
