import React from 'react';
import tw from 'tailwind-styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {

  return (
    <AppContainer>
      {/* header */}
      <Header />
      {/* profile */}
      <Section>
        <h1>
          Gavin, 19
        </h1>
        <h1>Software Engineer</h1>
      </Section>
      {/* about me */}
      <Section></Section>
      {/* technologies */}
      <Section></Section>
      {/* experience */}
      <Section></Section>
      {/* projects */}
      <Section></Section>
      {/* footer */}
      <Footer />
    </AppContainer>
  );
}

// app styled components
const AppContainer = tw.div`
  w-full
  max-w-[800px]
  flex
  flex-col
  [&>:nth-child(2)]:mt-[50px]
  justify-center
  items-center
  border-[1px]
  border-red-500
`

const Section = tw.div`
  h-[350px]
  w-full
  px-[30px]
  my-[10px]
  text-white

  border-[1px]
  border-green-500
`