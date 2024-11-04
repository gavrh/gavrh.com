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
    const repos = props.repos == null ? null :
    props.repos.map((repo: any, index: number) => {
        if (!repo.description) return;
        console.log(index)
        console.log(props.color[repo.language])
        return (
        <a className='hover:no-underline hover:cursor-pointer w-full max-w-[319px] h-[100px] rounded-[5px] mx-[10px] mt-[20px] shadow-[0_0px_7px_0px] shadow-[#080808] hover:shadow-emerald-800 hover:shadow-[0_0px_12px_0px] hover:border-emerald-800 transition-all duration-200' key={index} target='_blank' href={repo.html_url}>
            {/* wrapper */}
            <div className='flex flex-col w-full h-full px-[15px] py-[8px]'>
                {/* repo name */}
                <h1 className='text-zinc-200 font-bold tracking-wide'>{repo.name}</h1>
                {/* repo description */}
                <h1 className='line-clamp-2 overflow-hidden mt-[3px] h-[45%] text-zinc-400 text-xs'>{repo.description}</h1>
                {/* language / stars / forks */}
                <div className='flex flex-1 font-semibold'>
                    {/* language */}
                    <div className='flex items-baseline mr-[20px]'>
                        <div className='w-[9px] h-[9px] rounded-full mr-[4px]' style={{
                            backgroundColor: props.color[repo.language]
                        }}/>
                        <h1 className='text-[13px] text-zinc-300'>{repo.language}</h1>
                    </div>
                    {/* stars */}
                    <div className='flex items-center mr-[20px]'>
                        <FaRegStar className='text-[12px] text-zinc-400 mr-[4px]' />
                        <h1 className='text-[13px] text-zinc-300'>{repo.stargazers_count}</h1>
                    </div>
                    {/* forks */}
                    <div className='flex items-center'>
                        <FaCodeFork className='text-[10px] text-zinc-400 mt-[2px] mr-[4px]' />
                        <h1 className='text-[13px] text-zinc-300'>{repo.forks}</h1>
                    </div>
                </div>
            </div>
        </a>)
    })

    return (
        // container
        <div className="flex w-full h-screen">
            {/* wrapper */}
            <div className='flex w-full max-w-[1000px] h-full mx-auto my-[10px]'>
                {/* left */}
                <div className='w-full h-full flex flex-1'>
                    <div className="flex w-[150px] h-[150px] rounded-full items-center justify-center overflow-hidden shadow-[0_8px_7px_0px] shadow-[#080808]">
                        <img className='z-[2] w-full h-full' src={Avatar}/>
                    </div>
                </div>
                {/* right */}
                <div className="flex max-w-[700px] w-full ml-[10px]">
                    <div className='flex flex-wrap max-h-[250px] justify-center mx-[10px]'>
                        {repos}
                    </div>
                </div>
            </div>
        </div>
    )

}
