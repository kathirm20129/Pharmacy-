import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MedicinesPage from './pages/MedicinesPage'
import HealthBlogPage from './pages/HealthBlogPage'

function App() {
    return (
        <div className="min-h-screen w-full bg-[#f8fafc]">
            <Header />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/medicines" element={<MedicinesPage />} />
                    <Route path="/blog" element={<HealthBlogPage />} />
                </Routes>
                <Footer />
            </main>
        </div>
    )
}

export default App
