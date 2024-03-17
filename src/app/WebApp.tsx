import React from 'react'
import { useParams } from 'react-router-dom';
import Me from './me.jpg'
import Q from './q.png'
import Cuesta from './cuesta.png'
import FHS from './foothill_hs.jpg'

// styled components
import {
    WebAppContainer,
    WebAppWrapper,
    WebAppTop,
    ProfileContainer,
    ExperienceContainer,
    ProjectsContainer,
    SectionTitle,
    SubSectionTitle
} from './WebAppStyle';



export default function WebApp({ _props }: any) {

    // props

    // constants
    const _params: any = useParams();

    return (
        <WebAppContainer>
            <WebAppWrapper>
                <WebAppTop>
                    {/* profile */}
                    <ProfileContainer>
                        <SectionTitle>profile</SectionTitle>
                        <div className='flex'>
                            <img className='w-[150px] h-[150px] mr-[15px]' src={Me} />
                            <div className='child:mb-[5px]'>
                                <h1 className='font-semibold text-xl mt-[10px] leading-[18px]'>Gavin R. Holmes</h1>
                                <h1 className='text-zinc-400'>GAV-in HOHMZ (he/him)</h1>
                                <h1>gavnrh@gmail.com</h1>
                                <a href='https://linkedin.com/in/gavholm' target='_blank'>linkedin/gavholm</a><br/>
                                <a href='https://github.com/grhx' target='_blank'>github/grhx</a>
                            </div>
                        </div>

                        {/* technical skills */}
                        <span className='text-emerald-600 font-bold text-2xl mt-[20px]'>
                            *
                            <span className='font-semibold text-white'>technical_skills</span>
                        </span>
                        <h1>TypeScript, Golang, C/C++, Rust, PSQL, Java</h1>
                        <h1>Docker, Node.js, React, Expo, CMakefile</h1>

                        {/* education */}
                        <span className='text-emerald-600 font-bold text-2xl mt-[20px]'>
                            *
                            <span className='font-semibold text-white'>education</span>
                        </span>
                        <div className='mt-[5px]'>
                            <h1 className='text-xl'>BS in Computer Science</h1>
                            <div className='flex mt-[2px]'>
                                <img className='bg-white p-[3px] w-[65px] h-[65px] mr-[10px] mt-[4px]' src={Q}/>
                                <div>
                                    <h1>TBD 4yr University</h1>
                                    <h1 className='text-zinc-400'>?, CA</h1>
                                    <h1 className='text-zinc-400'>2025 - 2027</h1>
                                </div>
                            </div>
                            <div className='flex mt-[2px]'>
                                <img className='bg-white p-[3px] w-[65px] h-[65px] mr-[10px] mt-[4px]' src={Cuesta}/>
                                <div>
                                    <h1>Cuesta College</h1>
                                    <h1 className='text-zinc-400'>San Luis Obispo, CA</h1>
                                    <h1 className='text-zinc-400'>2023 - 2025</h1>
                                </div>
                                
                            </div>
                        </div>
                        <div className='mt-[8px]'>
                        <h1 className='text-xl'>High School Diploma</h1>
                            <div className='flex mt-[2px]'>
                                <img className='bg-white w-[65px] h-[65px] mr-[10px] mt-[4px]' src={FHS}/>
                                <div>
                                    <h1>Foothill High School</h1>
                                    <h1 className='text-zinc-400'>Pleasanton, CA</h1>
                                    <h1 className='text-zinc-400'>2019 - 2023</h1>
                                </div>
                                
                            </div>
                        </div>

                        {/* about me */}
                        <span className='text-emerald-600 font-bold text-2xl mt-[20px]'>
                            *
                            <span className='font-semibold text-white'>about_me</span>
                        </span>
                        <h1>
                            I'm an 18-year-old currently pursuing a Bachelor's degree in
                            Computer Science. Coding is not just a part of my academic
                            journey but a genuine passion. Outside of the tech world, I
                            have a deep love for animals and a strong appreciation for
                            music. While I'm not a musician, I find inspiration and
                            relaxation in various genres. I also actively engage in
                            activities supporting animal welfare. This combination of
                            technical interest, compassion for animals, and love for
                            music shapes my well-rounded approach to life.
                        </h1>
                    </ProfileContainer>

                    {/* experience */}
                    <ExperienceContainer>
                        <SectionTitle>experience</SectionTitle>
                    </ExperienceContainer>
                </WebAppTop>

                {/* projects */}
                <ProjectsContainer>
                    <SectionTitle>projects</SectionTitle>
                    <div>
                        <h1>disgord</h1>
                    </div>
                </ProjectsContainer>

                {/* copyright */}
                <div className='flex flex-col w-full text-xs text-center pt-[30px] pb-[10px] text-zinc-700 leading-4'>
                    <h1>© all rights reserved {new Date().getFullYear()}</h1>
                    <h1>root@admin:~# made with ❤️</h1>
                </div>
            
            </WebAppWrapper>
        </WebAppContainer>
    )

}