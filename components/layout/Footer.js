import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import LanguageContext from '../../utils/store'

export default function Footer() {
  const { en } = useContext(LanguageContext)

  return (
    <footer className={` ${en ? '' : 'rtl'} bg-zinc-100`}>
      <div className="footer mx-auto max-w-7xl  p-10 px-4  py-2 md:px-6 md:py-8 lg:px-8">
        <div>
          <Image
            src={en ? '/images/logo-EN-black.png' : '/images/logo-AR-black.png'}
            width={320}
            height={80}
          />
          <p className="mt-2 capitalize">
            <strong className="text-heading">
              {en ? 'Najm Al Mashriq' : 'نجم المشرق'}
            </strong>{' '}
            {en ? 'Contracting Company' : 'للمقاولات'}
          </p>
          <p className="capitalize">
            {' '}
            {en
              ? 'Rental Of light and heavy equipment'
              : ' و تأجير المعدات'}{' '}
          </p>
        </div>
        <div>
          <span className="footer-title">{en ? 'Services' : 'خدماتنا'}</span>
          <Link href="/equipments">
            <a className="link link-hover">
              {' '}
              {en ? 'Heavy Equipements Rental' : 'ايجار المعدات الثقيلة'}{' '}
            </a>
          </Link>
          <Link href="/equipments">
            <a className="link link-hover">
              {' '}
              {en ? 'Rental of cranes' : 'ايجار الرافعات'}{' '}
            </a>
          </Link>
          <Link href="/services">
            <a className="link link-hover">
              {en
                ? 'General construction of residential building'
                : 'انشاء المباني السكنية'}
            </a>
          </Link>
          <Link href="/services">
            <a className="link link-hover">
              {' '}
              {en
                ? 'Residential and non-residential building renovations'
                : 'تجديد المباني السكنية وغير السكنية'}
            </a>
          </Link>{' '}
          <Link href="/services">
            <a className="link link-hover">
              {' '}
              {en
                ? 'Events and celebrations services'
                : 'خدمات السباقات الرياضيه'}
            </a>
          </Link>{' '}
          <Link href="/services">
            <a className="link link-hover">
              {' '}
              {en
                ? 'Events and celebrations services'
                : 'خدمات اقامه الفعاليات و الاحتفالات '}
            </a>
          </Link>
        </div>
        <div>
          <span className="footer-title">{en ? 'Company' : 'الشركة'}</span>
          <Link href="/">
            <a className="link link-hover">{en ? 'Home' : 'الرئيسية'}</a>
          </Link>
          <Link href="/about">
            <a className="link link-hover">{en ? 'About Us' : 'من نحن'}</a>
          </Link>
          <Link href="/contact">
            <a className="link link-hover">{en ? 'Contact' : 'للتواصل'}</a>
          </Link>
        </div>
      </div>
      <div className="bg-zinc-100 text-center md:py-4">
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <strong className="text-heading">Najm Al Mashriq</strong>. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
