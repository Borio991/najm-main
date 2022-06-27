import Image from 'next/image'

function Thumbnail({ src }) {
  return (
    <div
      className={`relative h-36 min-w-[240px] cursor-pointer  md:h-64 md:min-w-[360px]  lg:h-96 lg:min-w-[540px]`}
    >
      {src && (
        <Image
          src={src}
          className="rounded-sm object-cover transition duration-300 ease-out md:rounded md:hover:scale-110"
          layout="fill"
        />
      )}
    </div>
  )
}

export default Thumbnail
