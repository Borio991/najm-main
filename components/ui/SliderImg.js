import React, { useContext } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LangContext from '../../utils/store'

export default function SliderImg({ src, heading1, heading2, cta }) {
  const { en } = useContext(LangContext)
  return (
    <div className="relative">
      <img loading="lazy" src={src} alt="" />
      <div className={`absolute top-[20%] left-[15%]`}>
        <motion.h2
          className="mb-4 text-left font-bold text-white sm:text-xl md:mb-12 md:text-2xl lg:text-4xl"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {heading1} <br /> <span className="-mt-2 block">{heading2}</span>
        </motion.h2>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        >
          <Link href="/contact">
            <a className=" mr-24 rounded-md bg-[#b58f1b] py-1.5 px-2 text-xs font-bold text-white sm:mr-96 sm:text-sm md:mb-12 md:py-2 md:px-3 md:text-xl lg:py-3 lg:px-4 lg:text-2xl">
              {cta}
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
