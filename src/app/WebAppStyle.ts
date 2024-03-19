import { useTheme } from 'styled-components'
import tw from 'tailwind-styled-components'

// Styled Components //

// container
export const WebAppContainer = tw.div`
    flex
    w-full
    h-[100dvh]
    text-zinc-100
    justify-text
    overflow-y-scroll
    overflow-x-hidden
`
// wrapper
export const WebAppWrapper = tw.div`
    flex
    flex-col
    w-full
    max-w-[1000px]
    h-full
    mx-auto
`
// top
export const WebAppTop = tw.div`
    flex
    flex-col
    md:flex-col
    justify-between
    px-[10px]
`

// profile
export const ProfileContainer = tw.div`
    flex
    flex-col
`
// experience
export const ExperienceContainer = tw.div`
    flex
    flex-col
    w-full
`
// projects
export const ProjectsContainer = tw.div`
    flex
    flex-col
    w-full
    px-[10px]
`
// section title
export const SectionTitle = tw.h1`
    w-full
    text-3xl
    mt-[40px]
    mb-[20px]
    font-semibold
`
// section title
export const SubSectionTitle = tw.h1`
    w-full
    text-2xl

    my-[20px]
`