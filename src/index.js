import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Moviecontextcreator from './Contextprovier/Moviecontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Moviecontextcreator>
       <BrowserRouter>
           <App />
        </BrowserRouter>
    </Moviecontextcreator>

);


