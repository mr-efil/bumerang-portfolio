import React from 'react'

type Props = {}

const CrossWrapper = (props: Props) => {
  return (
    <div className='w-full h-full absolute'>
    <span className="font-bold text-xl absolute top-6 left-6 rotate-45 lg:text-3xl lg:left-12 lg:top-12 opacity-60">
      +
    </span>
    <span className="font-bold text-xl absolute top-6 right-6 rotate-45 lg:text-3xl lg:right-12 lg:top-12 opacity-60">
      +
    </span>
    <span className="font-bold text-xl absolute bottom-6 left-6 rotate-45 lg:text-3xl lg:left-12 lg:bottom-12 opacity-60">
      +
    </span>
    <span className="font-bold text-xl absolute bottom-6 right-6 rotate-45 lg:text-3xl lg:right-12 lg:bottom-12 opacity-60">
      +
    </span></div>
  )
}

export default CrossWrapper