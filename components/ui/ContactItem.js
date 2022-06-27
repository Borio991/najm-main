import React from 'react'

export default function ContactItem({
  heading,
  contactMethod,
  contactValue,
  contactValue2,
  contactValue3,
}) {
  return (
    <div className="mb-8 flex flex-col">
      <h4 className="text-lg font-bold leading-7 md:text-xl">{heading}</h4>
      <span className="-mt-1 min-h-[24px] opacity-60">{contactMethod}</span>
      <span className="mt-1 leading-8 opacity-90 md:text-xl">
        {contactValue}
      </span>{' '}
      {contactValue2 && (
        <span className="   leading-8 opacity-90 md:text-xl">
          {contactValue2}
        </span>
      )}
      {contactValue3 && (
        <span className="   leading-8 opacity-90 md:text-xl">
          {contactValue3}
        </span>
      )}
    </div>
  )
}
