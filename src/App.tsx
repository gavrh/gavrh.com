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
        <h1 className='text-gray-400' style={{textAlign: "start", unicodeBidi: "plaintext"}}>私は 19 歳で、現在コンピューター サイエンスの学士号取得に向けて勉強しています。コーディングは私の学問の旅の一部であるだけでなく、私の真の情熱でもあります。テクノロジーの世界以外では、私は動物に深い愛情を持っており、音楽にもとても感謝しています。私はミュージシャンではありませんが、あらゆるジャンルの音楽にインスピレーションとリラクゼーションを見出します。動物愛護活動にも積極的に取り組んでいます。技術的な興味、動物への思いやり、そして音楽への愛が、私の人生に対するバランスのとれたアプローチを形作ってきました。</h1>
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
  border-red-500
`

const Section = tw.div`
  h-[350px]
  w-full
  px-[30px]
  my-[10px]
  text-white

  border-green-500
`