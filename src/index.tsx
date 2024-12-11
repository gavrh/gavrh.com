import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
	<div className="bg-[#14181d] overlfow-y-scroll flex justify-center transition-all duration-200">
		<Router basename="/">
			<Routes>
				<Route path="/:page?" element={<App />} />
			</Routes>
		</Router>
	</div>
);
