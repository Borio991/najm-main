import React from 'react'
import Page from '../components/layout/Page'
import Hero from '../components/HomePage/Hero'
import AboutUs from '../components/HomePage/AboutUs'
import Services from '../components/HomePage/Services'
import TrustedBy from '../components/HomePage/TrustedBy'
import Equipments from '../components/HomePage/Equipments'

export default function HomePage() {
  return (
    <Page title="Home">
      <Hero />
      <AboutUs />
      <Services />
      <TrustedBy />
      <Equipments />
    </Page>
  )
}
