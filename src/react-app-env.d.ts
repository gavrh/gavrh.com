/// <reference types="react-scripts" />
import { ReactElement, ReactNode } from 'react';
import { TooltipProps as Props } from 'react-tippy';

declare module 'react-tippy' {
    export interface TooltipProps extends Props {
        children: ReactNode;
    }
}

declare module '*.pdf';
