import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/VanDetail"
import HostLayout from "./components/HostLayout.jsx"
import Layout from "./components/Layout"

import "./server"

const basename = import.meta.env.BASE_URL

export default function App() {
  return (
    <React.StrictMode>

      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout/>} >
              <Route index element={<Dashboard/>} />
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
