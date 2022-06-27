import Link from 'next/link'
import React from 'react'
import Title from '../ui/Title'
import { useContext } from 'react'
import LanguageContext from '../../utils/store'

function Services() {
  const { en } = useContext(LanguageContext)
  return (
    <div className="bg-zinc-100 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className={`section-height mx-auto max-w-7xl ${en ? '' : 'rtl'}`}>
        <Title>{en ? 'Our Services' : 'ما نقدمه من خدمات'}</Title>
        <Link href="/services">
          <div className="grid h-[80vh] cursor-pointer  grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-3">
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                {en
                  ? 'General construction of residential and non-residential building'
                  : 'انشاء المباني السكنية و غير السكنية'}
              </h3>
            </div>
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                {en
                  ? 'Residential and non-residential building renovations'
                  : 'تجديد المباني السكنية وغير السكنية'}
              </h3>
            </div>
            <div className="imageSpan  300ms order-1 col-span-2 flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70 md:order-none">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                {en
                  ? 'Construction and building equipment rental with and without operator'
                  : 'تأجير معدات البناء والتشييد مع مشغل و بدون مشغل'}
              </h3>
            </div>
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                {en
                  ? 'Rental of cranes for construction purposes'
                  : 'تأجير الرافعات لأغراض البناء'}
              </h3>
            </div>
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                {en
                  ? 'sports public constrution including stadiums'
                  : 'انشاء المباني الرياضية بما في ذلك الملاعب'}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Services
