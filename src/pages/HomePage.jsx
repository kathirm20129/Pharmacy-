import React from 'react'
import HeroSection from '../components/HeroSection'
import MonthPromo from '../components/MonthPromo'
import HowItWorks from '../components/HowItWorks'
import ReviewsSection from '../components/ReviewsSection'
import PartnersSection from '../components/PartnersSection'
import AboutCompany from '../components/AboutCompany'
import AlphabetSearch from '../components/AlphabetSearch'
import CatalogSection from '../components/CatalogSection'
import BlogSection from '../components/BlogSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <MonthPromo />
            <HowItWorks />
            <ReviewsSection />
            <PartnersSection />
            <AboutCompany />
            <AlphabetSearch />
            <CatalogSection />
            <BlogSection />
        </>
    )
}

export default HomePage
