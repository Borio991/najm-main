import React, { useCallback, useEffect, useState } from 'react'

interface ScrollValue {
  innerWidth: number
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
})

const SizeObserver = ({ children }: { children: React.ReactNode }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  )
}
export default SizeObserver
