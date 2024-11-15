import React from 'react';
import tw from 'tailwind-styled-components';
import ContactModal from './components/ContactModal';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {

  // states
  const [modalActive, setModalActive] = React.useState(false);
  const [modalEmail, setModalEmail] = React.useState('');
  const [modalMessage, setModalMessage] = React.useState('');

  return (
    <>
    {/* contact */}
    <ContactModal 
      modalActive={modalActive} 
      setModalActive={setModalActive} 
      modalEmail={modalEmail}
      setModalEmail={setModalEmail}
      modalMessage={modalMessage}
      setModalMessage={setModalMessage}
    />

    {/* app */}
    <AppContainer>
      {/* header */}
      <Header setModalActive={setModalActive} />
      {/* profile */}
      <Section className='mt-[50px]'>
        <h1>
          Gavin, 19
        </h1>
        <h1>Software Engineer</h1>
        <SectionText>
          BIO_TEXT
        </SectionText>
      </Section>
      {/* technologies */}
      <Section>
        <SectionTitle>
          Technologies
        </SectionTitle>
        <SectionText>
          TECHNOLOGIES_TEXT 私は開発プロセスを合理化し、コードとプロジェクトの両方の品質を向上させるためにさまざまなツールを使用しています。以下は、私が過去に経験した、または現在使用しているテクノロジーと言語のリストです。
        </SectionText>
      </Section>
      {/* experience */}
      <Section>
        <SectionTitle>
          Experience
        </SectionTitle>
        <SectionText>
          EXPERIENCE_TEXT 子供から大学生まで、さまざまな年齢層に向けて 1 年間献身的に指導してきた、経験豊富なコンピューター サイエンスの家庭教師です。インタラクティブでパーソナライズされた学習体験を生み出すことに特化し、個人の学習スタイルやニーズに合わせて指導方法を適応させます。 1 対 1 および少人数のグループ セッションを通じて、学生がコンピューター サイエンスの概念を探求し、問題解決スキルを開発し、テクノロジーへの情熱を育む力を与えられたと感じられるサポート的な環境を育みます。私はフリーランスのソフトウェア エンジニアとして、さまざまなクライアントと協力してカスタマイズされたスケーラブルなソリューションを開発して成功してきました。私の役割には、フルスタック開発、バグ修正、効果的なプロジェクト管理が含まれており、複数のプロジェクトを処理し、厳しい納期を守る能力を示しています。この経験により、私の技術的熟練度が向上しただけでなく、ダイナミックなフリーランス環境でのコミュニケーションスキルと適応力も磨かれました。私は業界のトレンドを常に追いながら、クライアントの期待を超える革新的なソリューションを提供することに誇りを持っています。 </SectionText> </Section>
      {/* projects */}
      <Section>
        <SectionTitle>
          Projects
        </SectionTitle>
        <SectionText>
          PROJECT_TEXT Dcord は、Discord チャット クライアント API とのシームレスな統合のための究極のソリューションであり、簡単な対話のための堅牢な低レベル バインディングを提供します。開発者に包括的なアクセスを提供するように設計された Dcord は、Discord の API エンドポイント、WebSocket インターフェイス、および音声機能に対して比類のないサポートを提供します。すべての Discord API 機能をほぼ完全にカバーしている Dcord は、Discord エコシステム内でダイナミックで没入型のエクスペリエンスを構築するための無限の可能性を解き放ちます。ボットの作成、コミュニティの管理、魅力的なインタラクションの調整など、Dcord を使用すると、創造性を簡単かつ効率的に発揮できます。 Dcord との Discord 統合の可能性を最大限に活用します。 Glang は、C で作成され、効率的なマシンコードにシームレスにコンパイルできるように LLVM によって強化された最先端のプログラミング言語です。その特徴的な機能には、早期エラー検出のための堅牢な静的タイプのシステム、最適なリソース使用率を保証する自動メモリ管理、並列および分散アプリケーションの開発を容易にする同時実行性の組み込みサポートが含まれます。 Glang は効率、信頼性、拡張性を重視しているため、ソフトウェア開発のさまざまな課題に精度と拡張性を持って取り組むための強力なツールとして機能します。
        </SectionText>
      </Section>
      {/* footer */}
      <Footer />
    </AppContainer>
    </>
  );
}

// app styled components
const AppContainer = tw.div`
  w-full
  max-w-[800px]
  px-[10px]
  flex
  flex-col
  justify-center
  items-center
`

const Section = tw.div`
  w-full
  px-[30px]
  mt-[25px]
  text-gray-200
`

const SectionTitle = tw.h1`
  text-gray-200
  text-3xl
  font-semibold
`

const SectionText = tw.p`
  mt-[5px]
  text-gray-400
`