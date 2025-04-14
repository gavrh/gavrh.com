import { useState } from 'react';
import XboxBg from './assets/xbox_bg.png';
import Footer from './components/Footer';

export default function App() {
	const [count, setCount] = useState(0);

	return (
        <div className="w-full h-screen flex flex-col" style={{
            backgroundImage: `url(${XboxBg})`,
            backgroundSize: 'cover',
        }}>
            <h1>hello</h1>

            <Footer />
        </div>
    )
}
