import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='w-[10vw] h-[10vw] rounded-full border-4 border-t-4 border-blue-500 animate-ping'>
          {/* Optional: You can put the 'Loading...' text inside this spinning div */}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 text-white font-semibold">
          Loading...
        </div>
      </div>
    </Html>
  )
}

export default Loader
