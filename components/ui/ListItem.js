import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function ListItem({ text }) {
  return (
    <div className="mt-4 flex flex-row items-center gap-4">
      <div>
        <BsFillArrowRightCircleFill fill="#d71d1d" size={24} />
      </div>
      <p>{text}</p>
    </div>
  )
}
