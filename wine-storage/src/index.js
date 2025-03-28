import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import YourCellar from './pages/YourCellar';
import Map from './pages/Map';
import WineHistory from './pages/WineHistory';
import ReviewsRatings from './pages/Reviews&Ratings';
import Nopage from './pages/Nopage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "cellar" element={<YourCellar />} />
          <Route path = "map" element={<Map />} />
          <Route path = "history" element={<WineHistory />} />
          <Route path = "reviews&ratings" element={<ReviewsRatings />} />
          <Route path = "*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);