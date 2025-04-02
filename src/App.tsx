import React from 'react';
import tw from 'tailwind-styled-components';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
	// constants
	const age = Math.floor(
		Math.abs(Date.now() - new Date(2005, 5 - 1, 27).getTime()) /
			(1000 * 3600 * 24) /
			365.25
	);

	// in case search is not default path
	React.useEffect(() => {
		window.history.replaceState({}, '', '/');
	}, []);

	return (
		<AppContainer className="animate-appear">
			{/* header */}
			<Header />
			{/* profile */}
			<Section className="flex mt-[55px]">
				<div>
					<div className="flex items-baseline">
						<span className="dark:text-gray-300 text-zinc-800 sm:text-4xl text-3xl font-bold">
							Gavin
						</span>
						<div className="w-[8px]" />
						<span className="sm:block hidden dark:text-gray-300 text-zinc-800 sm:text-4xl text-3xl font-bold">
							Holmes
						</span>
						<span className="sm:hidden block dark:text-gray-300 text-zinc-800 sm:text-4xl text-3xl font-bold">
							H
						</span>
						<span className="dark:text-gray-500 text-zinc-600 sm:text-3xl text-2xl font-semibold">
							, {age}
						</span>
						<span className="ml-[6px] dark:text-gray-500 text-zinc-600 font-semibold text-2xl">
							(he/him)
						</span>
					</div>
					<h1 className="mt-[5px] dark:text-gray-400 text-zinc-700 text-2xl font-semibold">
						Software Engineer
					</h1>
					<h1 className="mt-[5px] dark:text-gray-500 text-zinc-600 text-xl font-semibold">
						San Francisco, CA
					</h1>
				</div>
			</Section>
			{/* technologies */}
			<Section>
				<SectionTitle>Technologies</SectionTitle>
				<SectionText>{TechnologiesText}</SectionText>
				<Technologies />
			</Section>
			{/* experience */}
			<Section>
				<SectionTitle>Experience</SectionTitle>
				<SectionText>{ExperienceText}</SectionText>
				<Experiences />
			</Section>
			{/* footer */}
			<Footer />
		</AppContainer>
	);
}

// app styled components
const AppContainer = tw.div`
    w-full
    max-w-[800px]
    px-[10px]
    flex
    flex-col
    justify-center
    items-center
`;

const Section = tw.div`
    w-full
    px-[30px]
    mt-[40px]
    text-zinc-600
    dark:text-gray-300
`;

const SectionTitle = tw.h1`
    dark:text-gray-300
    text-zinc-700
    text-2xl
    font-semibold
`;

const SectionText = tw.p`
    mt-[5px]
    dark:text-gray-400
    text-zinc-600
    text-lg
`;

// long texts
const TechnologiesText = `
    I use a variety of tools to streamline my development
    process and increase the quality of both my code, and my
    projects. Below is a list of technologies and languages
    I have the most  experience with either currently, or in the past.
`;

const ExperienceText = `
    With years of experience as a software engineer,
    I’ve taken on a wide range of roles, consistently
    delivering results and solving complex technical
    challenges. From working with diverse technologies
    to adapting to new environments, my career has been
    built on a foundation of practical expertise and
    problem-solving. Below are the key roles that have
    defined my technical growth and approach to development.
`;
