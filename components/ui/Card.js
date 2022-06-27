import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  src,
  title,
  subTitle,
  subTitle2,
  buttonText,
  href,
}) {
  return (
    <div className="card bg-slate-700 shadow-xl lg:card-side">
      <figure>
        <Image src={src} width={600} height={400} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title max-w-fit">{title}</h2>
        <p className="mt-1 max-w-fit text-gray-300">
          {subTitle} <br /> {subTitle2}
        </p>
        {href && (
          <div className="card-actions mt-4 justify-end">
            <Link href={href}>
              <button className="btn btn-warning">{buttonText}</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
