import { createContext, useState } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [en, setEn] = useState(true)
  function changeLang() {
    setEn(!en)
  }
  return (
    <LangContext.Provider value={{ en, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
