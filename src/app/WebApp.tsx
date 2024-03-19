import React from 'react'
import { useParams } from 'react-router-dom';
import Me from './me.jpg'
import Q from './q.png'
import Cuesta from './cuesta.png'
import FHS from './foothill_hs.jpg'
import Celeb from './celebfly.jpg'
import Fiverr from './fiverr.jpg'
import Target from './target.png'
import Psp from './petsuppliesplus.jpg'
import Chilis from './chilis.jpg'

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
                        <div className='flex items-center'>
                            <SectionTitle className='flex-1'>profile</SectionTitle>
                            <div className='w-full h-[3px] ml-[15px] mt-[47px] mb-[20px] bg-emerald-600'/>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col min-w-[400px]'>
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
                            </div>
                            <div className='flex flex-col'>
                                {/* technical skills */}
                                <span className='text-emerald-600 font-bold text-2xl mt-[20px] md:mt-[0px]'>
                                    *
                                    <span className='font-semibold text-white'>technical_skills</span>
                                </span>
                                <h1>TypeScript, Golang, C/C++, Rust, PSQL, Java,</h1>
                                <h1>Docker, Node.js, React, Expo, CMakefile</h1>
                                {/* other skills */}
                                <span className='text-emerald-600 font-bold text-2xl mt-[20px]'>
                                    *
                                    <span className='font-semibold text-white'>other_skills</span>
                                </span>
                                <h1>Communication, Problem-Solving, Collaboration,</h1>
                                <h1>Time Management, Adaptability, Leadership,</h1>
                                <h1>Customer Service, Financial Awareness, Resilience</h1>
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
                            </div>
                        </div>
                    </ProfileContainer>

                    {/* experience */}
                    <ExperienceContainer>
                        <div className='flex items-center'>
                            <SectionTitle className='flex-1'>experience</SectionTitle>
                            <div className='w-full h-[3px] ml-[15px] mt-[47px] mb-[20px] bg-emerald-600'/>
                        </div>
                        <span className='text-emerald-600 font-bold text-2xl mt-[0px] mb-[10px]'>
                            *
                            <span className='font-semibold text-white'>technical_experience</span>
                        </span>
                        {/* fiverr */}
                        <div className='flex flex-row mb-[20px]'>
                            <div className='flex flex-col'>
                                <div className='flex mb-[10px] mt-[2px]'>
                                    <img className='bg-white w-[65px] h-[65px] mr-[10px] mt-[4px]' src={Fiverr}/>
                                    <div>
                                        <h1>Fiverr - Freelance Software Engineer</h1>
                                        <h1 className='text-zinc-400'>Remote</h1>
                                        <h1 className='text-zinc-400'>Jan 2021 - present</h1>
                                    </div>
                                </div>
                                <h1>
                                    I've thrived as a freelance software engineer, collaborating with
                                    diverse clients to develop customized, scalable solutions. My role
                                    encompasses fullstack development, bug fixing, and effective project management, showcasing my
                                    ability to handle multiple projects and meet tight deadlines. This experience has not
                                    only enhanced my technical proficiency but also honed my communication skills
                                    and adaptability in a dynamic freelance environment. I take pride in delivering
                                    innovative solutions that exceed client expectations while staying abreast of
                                    industry trends.
                                </h1>
                            </div>
                        </div>
                        <span className='text-emerald-600 font-bold text-2xl mb-[10px]'>
                            *
                            <span className='font-semibold text-white'>other_experience</span>
                        </span>
                        {/* target */}
                        <div className='flex flex-row mb-[20px]'>
                            <div className='flex flex-col'>
                                <div className='flex mb-[10px] mt-[2px]'>
                                    <img className='bg-white w-[65px] h-[65px] mr-[10px] mt-[4px]' src={Target}/>
                                    <div>
                                        <h1>Target - General Merchandise</h1>
                                        <h1 className='text-zinc-400'>San Luis Obispo, CA</h1>
                                        <h1 className='text-zinc-400'>Mar 2024 - present</h1>
                                    </div>
                                </div>
                                <h1>
                                    I play a pivotal role in delivering an exceptional shopping experience to customers. Working across various
                                    departments, I demonstrate versatility and adaptability in fulfilling tasks ranging from restocking shelves
                                    to assisting customers with inquiries. I excel in maintaining a well-organized and visually appealing sales
                                    floor, ensuring products are readily accessible to customers. Collaborating with team members, I contribute to
                                    achieving departmental goals and exceeding sales targets. My time at Target sharpens my ability to work efficiently
                                    in a fast-paced environment, communicate effectively with colleagues and customers, and uphold the company's
                                    commitment to excellence in retail operations.
                                </h1>
                            </div>
                        </div>
                        {/* psp */}
                        <div className='flex flex-row mb-[20px]'>
                            <div className='flex flex-col'>
                                <div className='flex mb-[10px] mt-[2px]'>
                                    <img className='bg-white w-[65px] h-[65px] mr-[10px] mt-[4px]' src={Psp}/>
                                    <div>
                                        <h1>Pet Supplies Plus - Sales Floor</h1>
                                        <h1 className='text-zinc-400'>Pleasanton, CA</h1>
                                        <h1 className='text-zinc-400'>Jul 2023 - Dec 2023</h1>
                                    </div>
                                </div>
                                <h1>
                                    I thrived in a dynamic retail environment dedicated to providing top-notch service to pet owners.
                                    Interacting with customers, I offered knowledgeable assistance in selecting products tailored to their
                                    pets' needs, fostering lasting relationships and ensuring satisfaction. My role involved staying updated
                                    on pet care trends and product features, allowing me to effectively educate customers and drive sales.
                                </h1>
                            </div>
                        </div>
                        {/* chilis */}
                        <div className='flex flex-row'>
                            <div className='flex flex-col'>
                                <div className='flex mb-[10px] mt-[2px]'>
                                    <img className='bg-white w-[65px] h-[65px] mr-[10px] mt-[4px]' src={Chilis}/>
                                    <div>
                                        <h1>Chili's - Food Service Member</h1>
                                        <h1 className='text-zinc-400'>Pleasanton, CA</h1>
                                        <h1 className='text-zinc-400'>Aug 2022 - Feb 2023</h1>
                                    </div>
                                </div>
                                <h1>
                                    While at Chili's, I honed my customer service skills while ensuring exceptional dining experiences for patrons.
                                    I adeptly managed high-volume periods, demonstrating efficiency and grace under pressure. My time at Chili's
                                    cultivated my ability to multitask effectively, communicate efficiently, and prioritize tasks, all while delivering
                                    friendly and attentive service to guests.
                                </h1>
                            </div>
                        </div>
                    </ExperienceContainer>
                </WebAppTop>

                {/* projects */}
                <ProjectsContainer>
                    <div className='flex items-center'>
                            <SectionTitle className='flex-1'>projects</SectionTitle>
                            <div className='w-full h-[3px] ml-[15px] mt-[47px] mb-[20px] bg-emerald-600'/>
                    </div>
                    {/* celebfly */}
                    <div className='flex flex-row mb-[30px]'>
                        <div className='flex flex-col'>
                            <div className='flex mb-[10px]'>
                                <img className='bg-white w-[75px] h-[75px] object-cover' src={Celeb} />
                                <div className='ml-[10px]'>
                                    <div className='flex items-baseline'>
                                        <h1 className='text-xl font-semibold'>celebfly</h1>
                                        <h1 className='ml-[7px] text-zinc-400'>Celebrity Jet Tracker</h1>
                                    </div>
                                    <a href='https://github.com/grhx/celebfly' target='_blank'>github.com/grhx/celebfly</a>
                                    <h1>React, TypeScript, Golang</h1>
                                </div>
                                
                                
                            </div>
                            <h1>
                                I developed a cutting-edge celebrity jet tracker utilizing publicly available data online.
                                This innovative tool allows users to monitor the movements of private jets owned by
                                celebrities, providing real-time updates on their whereabouts and travel destinations.
                                Leveraging my expertise in data aggregation and analysis, I designed an intuitive interface
                                that offers users seamless navigation and access to comprehensive flight information.
                                By harnessing the power of the API and employing data visualization techniques,
                                I crafted a dynamic platform that caters to both casual enthusiasts and industry professionals alike,
                                offering valuable insights into the travel patterns of prominent figures. This project not only
                                showcases my proficiency in working with online APIs but also demonstrates my ability to create
                                impactful solutions with practical applications in various domains.
                            </h1>
                        </div>
                    </div>
                    {/* babylon */}
                    <div className='flex flex-row mb-[30px]'>
                        <div className='flex flex-col'>
                            <div className='flex mb-[10px]'>
                                <img className='bg-white w-[75px] h-[75px]' src="https://cdn2.steamgriddb.com/icon_thumb/f4491fcc2896910ad60de6986f83b31c.png" />
                                <div className='ml-[10px]'>
                                    <div className='flex items-baseline'>
                                        <h1 className='text-xl font-semibold'>babylon</h1>
                                        <h1 className='ml-[7px] text-zinc-400'>Code/Text Editor</h1>
                                    </div>
                                    <a href='https://github.com/grhx/babylon' target='_blank'>github.com/grhx/babylon</a>
                                    <h1>Golang, Fyne GUI, Lua</h1>
                                </div>
                                
                                
                            </div>
                            <h1>
                                I've developed a lightweight and fast text editor using the Fyne GUI toolkit.
                                Leveraging GoLang's concurrency and Fyne's efficient rendering, the editor
                                ensures swift performance and minimal system resource consumption. The standout
                                feature lies in its built-in Lua extension support, enabling users to customize
                                and extend functionality seamlessly. With Lua scripting, users can automate tasks,
                                create custom commands, and integrate third-party tools, enhancing the editor's
                                versatility without compromising its performance. Through a clean interface and
                                robust backend logic, our text editor delivers an efficient and customizable
                                editing experience, setting a benchmark for lightweight, extensible, and fast
                                text editing applications.
                            </h1>
                        </div>
                    </div>
                    {/* disgord */}
                    <div className='flex flex-row mb-[30px]'>
                        <div className='flex flex-col'>
                            <div className='flex mb-[10px]'>
                                <img className='bg-white w-[75px] h-[75px]' src='https://avatars.githubusercontent.com/u/85959578?s=280&v=4' />
                                <div className='ml-[10px]'>
                                    <div className='flex items-baseline'>
                                        <h1 className='text-xl font-semibold'>disgord</h1>
                                        <h1 className='ml-[7px] text-zinc-400'>Discord API Framework</h1>
                                    </div>
                                    <a href='https://github.com/grhx/disgord' target='_blank'>github.com/grhx/disgord</a>
                                    <h1>Golang</h1>
                                </div>
                                
                                
                            </div>
                            <h1>
                                Disgord is your ultimate solution for seamless integration with the Discord chat client API, offering robust low-level bindings for effortless interaction.
                                Designed to empower developers with comprehensive access, Disgord provides unparalleled support for Discord's API endpoints, WebSocket interface, and voice functionality. 
                                With its nearly complete coverage of all Discord API features, Disgord unlocks limitless possibilities for building dynamic and immersive experiences within the Discord ecosystem. 
                                Whether you're crafting bots, managing communities, or orchestrating engaging interactions, Disgord empowers you to unleash your creativity with ease and efficiency. Harness the full potential of
                                Discord integration effortlessly with Disgord.
                            </h1>
                        </div>
                    </div>
                </ProjectsContainer>

                {/* copyright */}
                <div className='flex flex-col w-full text-xs text-center pt-[30px] pb-[10px] text-zinc-600 leading-5'>
                    <h1>made with ❤️</h1>
                    <h1>© all rights reserved {new Date().getFullYear()}</h1>
                </div>
                                
            </WebAppWrapper>
        </WebAppContainer>
    )

}