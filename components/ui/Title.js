import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import LangContext from '../../utils/store'

export default function Title({ children }) {
  const { en } = useContext(LangContext)
  return (
    <motion.h2
      className="mb-8 text-2xl font-bold uppercase tracking-widest  md:text-3xl"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.h2>
  )
}
