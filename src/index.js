import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './form';
import Nubar from './navbar2';
import Fubar from './footer1';
import Press from './button';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nubar />
    <App img="https://sxcontent9668.azureedge.us/cms-assets/assets/07_07_23_Starlink_5_13_0949_desktop_e4172d0ca4.jpg"/>
    <Press />
    <MyForm />
    <App img="https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_6_5_SLC_40_2023_07_09_DSC_9579_Desktop_133863aee0.jpg"/>
    <App  img="https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCHES_Starlink_SLC_40_Desktop_f9768cabd4.jpg"/>
    <App img="https://sxcontent9668.azureedge.us/cms-assets/assets/Euclid_outsidetowerh_IMG_2487_desktop_a75e89406d.jpg"/>
    <Fubar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
