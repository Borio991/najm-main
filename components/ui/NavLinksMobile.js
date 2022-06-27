import React from 'react'
import Link from 'next/link'

export default function NavLink({ navName, link }) {
  return (
    <Link href={link}>
      <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-900 hover:text-white">
        {navName}
      </a>
    </Link>
  )
}
