import React from 'react'

function AchievmentItem({ icon, number, text }) {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <div>{icon}</div>
      <div className="ml-4 flex flex-col justify-center align-baseline">
        <div className="text-2xl text-heading">{number}</div>
        <div className="text-lg "> {text} </div>
      </div>
    </div>
  )
}

export default AchievmentItem
