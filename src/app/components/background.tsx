import Image from 'next/image'
import React from 'react'
import bg from '../assets/weathers/light_freezing_rain_day_311.png'

const Background = () => {
    //import bg 
        //filter bg according to number

    return (
        <div className='absolute z-[0] h-screen w-screen'>
           <Image
            src={bg}
            alt="info"
            fill={true}
            />
        </div>

  )
}

export default Background