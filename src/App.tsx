import React from 'react';
import tw from 'tailwind-styled-components';
import Me from './assets/me.jpg';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function App() {
    // constants
    const age = Math.floor((Math.abs(Date.now() - (new Date(2005, 5-1, 27)).getTime()) / (1000 * 3600 * 24)) / 365.25);

	return (
        <AppContainer>

            {/* header */}
            <Header />
            {/* profile */}
            <Section className="flex mt-[55px]">
                <img alt="me" src={Me} className="md:block hidden object-cover w-[175px] h-[175px] rounded-lg brightness-[90%] mr-[20px]" />
                <div>
                    <div className="flex items-center">
                        <span className="text-gray-300 text-4xl font-bold">Gavin Holmes</span>
                        <span className="text-gray-500 text-3xl font-semibold">, {age}</span>
                        <span className="ml-[6px] text-gray-500 font-semibold text-2xl">(he/him)</span>
                    </div>
                    <h1 className="mt-[5px] text-gray-400 text-2xl font-semibold">Software Engineer</h1>
                    <h1 className="mt-[5px] text-gray-500 text-xl font-semibold">Bay Area, CA</h1>
                    <div className="md:block hidden">
                        <SectionText className="italic mt-[10px]">"Never trust a computer you can't throw out a window."</SectionText>
                        <SectionText className="leading-[15px]">- Steve Wozniak</SectionText>
                    </div>
                </div>
            </Section>
            {/* technologies */}
            <Section>
                <SectionTitle>Technologies</SectionTitle>
                <SectionText>
                    {TechnologiesText}
                </SectionText>
                <Technologies />
            </Section>
            {/* experience */}
            <Section>
                <SectionTitle>Experience</SectionTitle>
                <SectionText>
                    {ExperienceText}
                </SectionText>
                <Experiences />
            </Section>
            {/* projects */}
            <Section>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>
                    In my free time, I enjoy creating open source projects on GitHub,
                    so I can learn from others and share what I know. Below are some of my personal favorite repositories.
                </SectionText>
                <Projects />
            </Section>
            {/* footer */}
            <Footer />
        </AppContainer>
	);
}

// long texts
const TechnologiesText = `
    I use a variety of tools to streamline my development
    process and increase the quality of both my code, and my
    projects. Below is a list of technologies and languages
    I have the most  experience with either currently, or in the past.
`;

const ExperienceText = `EXPERIENCE_TEXT`;

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
    text-gray-300
`;

const SectionTitle = tw.h1`
    text-gray-300
    text-2xl
    font-semibold
`;

const SectionText = tw.p`
    mt-[5px]
    text-gray-400
    text-lg
`;
