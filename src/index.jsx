import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import Reviews from "./pages/Host/Reviews"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/VanDetail"
import HostLayout from "./components/HostLayout"
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
                            <Route path="vans" element={<HostVans/>} />
                            <Route path="vans/:id" element={<HostVanDetail />}>
                                <Route index element={<HostVanInfo />} />
                                <Route path="photos" element={<HostVanPhotos />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                            </Route>
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
