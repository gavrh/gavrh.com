import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(
	<div>
		<Router basename="/">
			<Routes>
				<Route path="*" element={<App />} />
			</Routes>
		</Router>
	</div>
);
