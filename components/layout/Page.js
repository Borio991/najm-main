import React, { useContext } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact from '../HomePage/Contact'
import LanguageContext from '../../utils/store'

export default function Page({ children, title, description }) {
  const { en } = useContext(LanguageContext)
  return (
    <>
      <Head>
        {en ? (
          <title>
            {title ? `${title} | Najm AlMashriq` : 'Najm AlMashriq'}
          </title>
        ) : (
          <title>{title ? `${title} | نجم المشرق` : 'نجم المشرق'}</title>
        )}
        <meta
          name="keywords"
          content={
            en
              ? 'rental heavy equipment, Riyadh equipment rental, Dammam equipment rental, Jeddah equipment rental,  Jeddah equipment rental, construction services, project management, project planning, Riyad Light Towers Saudi Arabia, Large Power Generators, Rollers and compactors, Riyadh light equipment rental, Dammam lifting equipment rental, Riyadh construction Equipment, Lifting &amp; Concrete Equipment, Parts &amp; Attachments, Equipment Rentals, Saudi Arabia construction projects, Riyadh concrete pumps, Saudi Arabia specialized workforce, Saudi Arabia construction professionals, Jeddah construction professionals, Riyadh construction professionals, Dammam construction professionals, Cranes rental.'
              : 'إيجار اللوادر الثقيلة في المدينة المنورة، تأجير اللوادر الثقيلة في مكة، تأجير المعدات الثقيلة في الرياض، تأجير المعدات الثقلية في تبوك، تأجير المعدات الثقيلة في القصيم، تأجير المعدات الثقيلة في عسير، تأجير المعدات الثقيلة في مكة، تأجير المعدات الثققيلة في الدمام، تأجير المعدات الثقيلة في جدة، تأجير المعدات الثقيلة في جدة، خدمات البناء في المملكة العربية السعودية، إدارة المشروعات في الرياض، تأجير المعدات الثقيلة للمشروعات الإنشائية في الرياض، إدارة مشروعات هندسية في المدينة المنورة، إنشاءات خرسانية أبراج الرياض السعودية، مولدات طاقة كبيرة في المملكة العربية السعودية، تأجير المعدات الخفيفة بالرياض، تأجير معدات الرفع في الدمام، معدات البناء في الرياض، معدات البناء في حائل، معدات البناء في الباحة، معدات البناء في جازان، معدات البناء في المدينة المنورة، تاجيرمعدات الرفع والخرسانة، تأجيرقطع غيار ومرفقات، تأجير المعدات في تبوك، مشاريع البناء في المملكة العربية السعودية، تأجير مضخات الخرسانة في الرياض، القوى العاملة السعودية المتخصصة، متخصصو الإنشاءات في المملكة العربية السعودية، متخصصو الإنشاءات في القصيم ، متخصصو الإنشاءات في الرياض، متخصصو الإنشاءات في الطائف، الرافعات و   معدات ثقيلة جديدة، معدات حفر، معدات رصف طرق، شركات معدات ثقيلة مستعملة، كسارات، عدة ثقيلة، قطع غيار معدات ثقيلة، عدة بناء   '
          }
        ></meta>
        <meta
          name="description"
          content={
            description || en
              ? 'Looking for equipment rental ? We have all heavy and light equipment in Saudi Arabia. our large inventory includes Cranes, backhoes, excavators, Forklifts,Telehanlder,Tower Light, manlifts..'
              : 'تبحث عن تأجير المعدات؟ لدينا جميع المعدات الثقيلة والخفيفة في المملكة العربية السعودية. يشمل مخزوننا الكبير الرافعات ، والرافعات الخلفية ، والحفارات ، والرافعات الشوكية و المزيد من المعدات الثقيلة ...'
          }
        ></meta>
        <meta
          property="description"
          content={
            en
              ? 'Looking for equipment rental ? We have all heavy and light equipment in Saudi Arabia. our large inventory includes Cranes, backhoes, excavators, Forklifts,Telehanlder,Tower Light, manlifts..'
              : 'تبحث عن تأجير المعدات؟ لدينا جميع المعدات الثقيلة والخفيفة في المملكة العربية السعودية. يشمل مخزوننا الكبير الرافعات ، والرافعات الخلفية ، والحفارات ، والرافعات الشوكية و المزيد من المعدات الثقيلة ...'
          }
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
