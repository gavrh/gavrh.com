import React from 'react';

export default function Footer() {
    return (
        <div className='fixed bottom-0 left-0 m-4 font-bold text-sm text-zinc-600'>
            <h1>Gavin Holmes © All rights reserved {new Date().getFullYear()}</h1>
            <h1 className='opacity-50'>not affiliated with xbox or microsoft</h1>
        </div>
    )
}
