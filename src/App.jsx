import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MedicinesPage from './pages/MedicinesPage'
import HealthBlogPage from './pages/HealthBlogPage'
import ReviewsPage from './pages/ReviewsPage'

import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import VitaminsPage from './pages/VitaminsPage'
import ProductPage from './pages/ProductPage'
import HygienePage from './pages/HygienePage'
import LensesPage from './pages/LensesPage'
import MotherAndChildPage from './pages/MotherAndChildPage'


function App() {
    return (
        <div className="min-h-screen w-full bg-[#f8fafc] overflow-x-hidden">
            <ScrollToTop />
            <Header />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/medicines" element={<MedicinesPage />} />
                    <Route path="/blog" element={<HealthBlogPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/vitamins" element={<VitaminsPage />} />
                    <Route path="/beauty" element={<ProductPage />} />
                    <Route path="/hygiene" element={<HygienePage />} />
                    <Route path="/lenses" element={<LensesPage />} />
                    <Route path="/mother-and-child" element={<MotherAndChildPage />} />
                </Routes>
                <Footer />
            </main>
        </div>
    )
}

export default App
