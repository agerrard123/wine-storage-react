import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import YourCellar from './pages/YourCellar';
import Map from './pages/Map';
import WineHistory from './pages/WineHistory';
import History01 from './pages/History01';
import History02 from './pages/History02';
import History03 from './pages/History03';
import ReviewsRatings from './pages/Reviews&Ratings';
import Nopage from './pages/Nopage';

function BodyClassHandler () {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "";

    if (location.pathname === "/") {
      document.body.classList.add("home-body");
    } else if (location.pathname.startsWith("/cellar")) {
      document.body.classList.add("cellar-body");
    } else if (location.pathname.startsWith("/map")) {
      document.body.classList.add("map-body");
    } else if (location.pathname.startsWith("/reviews&ratings")) {
      document.body.classList.add("reviews-body");
    } else {
      document.body.classList.add("history-body");
    }
  }, [location]);
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BodyClassHandler/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "cellar" element={<YourCellar />} />
          <Route path = "map" element={<Map />} />
          <Route path = "history" element={<WineHistory />} />
          <Route path = "history01" element={<History01 />} />
          <Route path = "history02" element={<History02 />} />
          <Route path = "history03" element={<History03 />} />
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