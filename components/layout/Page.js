import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact from '../HomePage/Contact'

export default function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Najm AlMashriq` : 'Najm AlMashriq'}</title>
        <meta
          name="keywords"
          content="rental heavy equipment, Riyadh equipment rental, Dammam equipment rental, Jeddah equipment rental,  Jeddah equipment rental, construction services, project management, project planning, Riyad Light Towers Saudi Arabia, Large Power Generators, Rollers and compactors, Riyadh light equipment rental, Dammam lifting equipment rental, Riyadh construction Equipment, Lifting &amp; Concrete Equipment, Parts &amp; Attachments, Equipment Rentals, Saudi Arabia construction projects, Riyadh concrete pumps, Saudi Arabia specialized workforce, Saudi Arabia construction professionals, Jeddah construction professionals, Riyadh construction professionals, Dammam construction professionals, Cranes rental."
        ></meta>
        <meta
          name="description"
          content={
            description ||
            'Looking for equipment rental ? We have all heavy and light equipment in Saudi Arabia. our large inventory includes Cranes, backhoes, excavators, Forklifts,Telehanlder,Tower Light, manlifts..'
          }
        ></meta>
        <meta
          property="description"
          content="Looking for a heavy construction equipment rental? We rent Heavy Equipment at low Prices in Saudi Arabia. Our Large Inventory Includes Dozers, Backhoes, Excavators, Compactors, loaders.."
        ></meta>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
