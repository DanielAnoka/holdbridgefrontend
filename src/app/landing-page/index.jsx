import React from 'react'
import Hero from "../../components/hero"
import HowItWorks from '../../components/how-it-works'
import SecureTransactions from "../../components/ready"
import WhyChooseSection from "../../components/why-choose"
import Testimonials from "../../components/testimonials"
import Faq from '../../components/Faq'

const LandingPage = () => {
  return (
     < >
        <Hero />
        <HowItWorks />
        <WhyChooseSection />
        <Testimonials />
        <Faq />
        <SecureTransactions />
    </>
  )
}

export default LandingPage