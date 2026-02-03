import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
    return (
        <div className="min-h-screen w-full bg-[#f8fafc]">
            <Header />
            <Navbar />
            <main>
                <HeroSection />
            </main>
        </div>
    )
}

export default App
