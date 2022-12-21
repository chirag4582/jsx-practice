import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <AppClass /> 
    <App/>  
    {/* change the above line - for interchaning between App and AppClass */}
    </div>
);
