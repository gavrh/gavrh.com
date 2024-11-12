import React from 'react';
import tw from 'tailwind-styled-components';
import { motion, AnimatePresence } from 'framer-motion'
import Backdrop from './Backdrop';

export default function ContactModal(props: any) {

    // props
    const { modalActive, setModalActive } = props;

    // handle no scroll
    React.useEffect(() => {
        const handleNoScroll = (e: WheelEvent) => {
            if (modalActive) {
                e.preventDefault();
            }
        }
        window.addEventListener('wheel', handleNoScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleNoScroll);
        }
    }, [modalActive])

    return (
        <AnimatePresence>
            { modalActive && (
            <div>
                <ModalContainer
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ y: 800 }}
                >

                </ModalContainer>
                <Backdrop setModalActive={setModalActive} />
            </div>
            )}
        </AnimatePresence>
    )
}

// ContactModal styled components
const ModalContainer = tw(motion.div)`
    fixed
    top-[20%]
    w-[800px]
    h-[500px]
    bg-[#14181d]
    border-[1px]
    border-[#1f252e]
    rounded-lg
    z-[99]
`