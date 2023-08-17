import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myorder from './components/myorders/Myorder';
import CountTrack from './components/countTrack/CountTrack'
// import Help from './components/help/Help'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router =createBrowserRouter([
  {
    path : "/",
    element:<App/>,
  },

  {
    path : "myorder",
    element:<Myorder/>,
  },
   {
    path : "counttrack",
    element:<CountTrack/>,
  }
  // {
  //   path : "help",
  //   element:<Help/>,
  // }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
