import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MonthPromo from './components/MonthPromo'
import HowItWorks from './components/HowItWorks'
import ReviewsSection from './components/ReviewsSection'
import PartnersSection from './components/PartnersSection'
import AboutCompany from './components/AboutCompany'
import AlphabetSearch from './components/AlphabetSearch'
import CatalogSection from './components/CatalogSection'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen w-full bg-[#f8fafc]">
            <Header />
            <Navbar />
            <main>
                <HeroSection />
                <MonthPromo />
                <HowItWorks />
                <ReviewsSection />
                <PartnersSection />
                <AboutCompany />
                <AlphabetSearch />
                <CatalogSection />
                <BlogSection />
                <Footer />
            </main>
        </div>
    )
}

export default App
