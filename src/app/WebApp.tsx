import React from 'react'
import { useParams } from 'react-router-dom';
import Avatar from './avatar.png'
import { FaRegStar, FaCodeFork } from "react-icons/fa6";

export default function WebApp({ props }: any) {

    // props
    React.useEffect(() => { console.log(props) }, [props])

    // constants
    const _params: any = useParams();

    // repos
    let count = 0;
    const repos = props.repos == null ? null :
    props.repos.map((repo: any, index: number) => {
        console.log("here")
        if (!repo.description) return;
        count++;
        console.log(count%2 == 0);
        console.log(count%2 != 0);
        return (
        <a 
            className='
                border-[1px]
                border-[#141414]
                hover:no-underline
                hover:cursor-pointer
                w-full
                max-w-[454px]
                h-[150px]
                rounded-[5px]
                mt-[20px]
                shadow-[0_0px_10px_0px]
                shadow-[#060606]
                hover:shadow-emerald-700
                hover:shadow-[0_0px_14px_0px]
                hover:border-emerald-700
                transition-all duration-200'
            style={{
                margin: `20px ${count%2!=0 ? '10px' : '0'} 0 ${count%2==0 ? '10px' : '0'}`
            }}
            key={index} target='_blank' href={repo.html_url}>
            {/* wrapper */}
            <div className='flex flex-col w-full h-full px-[20px] py-[15px]'>
                {/* repo name */}
                <h1 className='text-zinc-200 text-2xl font-bold tracking-wide'>{repo.name}</h1>
                {/* repo description */}
                <h1 className='line-clamp-2 text-[17px] overflow-hidden mt-[4px] h-[45%] text-zinc-400 '>{repo.description}</h1>
                {/* language / stars / forks */}
                <div className='flex flex-1 font-semibold'>
                    {/* language */}
                    <div className='flex items-center mr-[20px]'>
                        <div className='w-[12px] h-[12px] rounded-full mt-[1px] mr-[6px]' style={{
                            backgroundColor: props.color[repo.language]
                        }}/>
                        <h1 className='text-lg text-zinc-300'>{repo.language}</h1>
                    </div>
                    {/* stars */}
                    <div className='flex items-center mr-[20px]'>
                        <FaRegStar className='text-[16px] text-zinc-400 mr-[6px]' />
                        <h1 className='text-lg text-zinc-300'>{repo.stargazers_count}</h1>
                    </div>
                    {/* forks */}
                    <div className='flex items-center'>
                        <FaCodeFork className='text-[14px] text-zinc-400 mt-[2px] mr-[6px]' />
                        <h1 className='text-lg text-zinc-300'>{repo.forks}</h1>
                    </div>
                </div>
            </div>
        </a>)
    })

    return (
        // container
        <div className="flex w-full h-screen transition-all duration-1000" style={{
            opacity: repos == null ? '0%' : '100%',
        }}>
            {/* wrapper */}
            <div className='flex w-full max-w-[1200px] h-full mx-auto my-[10px] justify-center'>
                {/* left */}
                {/* <div className='border-[1px] border-red-500 min-w-[200px] w-full h-full flex flex-1'>
                    <div className="flex w-[200px] h-[200px] rounded-full items-center justify-center overflow-hidden shadow-[0_8px_7px_0px] shadow-[#060606]">
                        <img className=' z-[2] w-full h-full' src={Avatar}/>
                    </div>
                </div> */}
                {/* right */}
                <div className=" flex max-w-[950px] w-full justify-center">
                    <div className='flex flex-wrap max-h-[250px] justify-center mx-[10px]'>
                        {repos}
                    </div>
                </div>
            </div>
        </div> 
    )

}
