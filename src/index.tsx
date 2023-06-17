import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Main from './pages/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);

reportWebVitals();
