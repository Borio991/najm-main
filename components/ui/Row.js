import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useRef, useState } from 'react'
import Thumbnail from './Thumbnail'

function Row() {
  const rowRef = useRef(null)

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-96 space-y-1 md:space-y-4">
      <div className="relative md:ml-8">
        <AiOutlineArrowLeft
          fill="#222"
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125  `}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          <Thumbnail key={1} src="/images/1.jpg" />
          <Thumbnail key={2} src="/images/2.jpg" />
          <Thumbnail key={3} src="/images/3.jpg" />
          <Thumbnail key={4} src="/images/1.jpg" />
          <Thumbnail key={5} src="/images/2.jpg" />
          <Thumbnail key={6} src="/images/3.jpg" />
          <Thumbnail key={7} src="/images/1.jpg" />
          <Thumbnail key={8} src="/images/2.jpg" />
          <Thumbnail key={9} src="/images/3.jpg" />
        </div>
        <AiOutlineArrowRight
          fill="#222"
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 "
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
