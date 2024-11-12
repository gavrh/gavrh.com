import React from 'react';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

export default function Backdrop(props: any) {

    // props
    const {setModalActive} = props;

    return (
        <motion.div 
            onClick={(e) => {setModalActive(false);}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.4
            }}
            className='
                fixed
                top-0
                left-0
                w-full
                h-screen
                bg-black
                bg-opacity-50
                backdrop-blur-[2px]
                z-[98]
                overflow-x-hidden
            '
        >
        </motion.div>       
    )
}