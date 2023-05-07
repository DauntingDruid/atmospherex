import Image from 'next/image'
import React from 'react'
import bg from '../assets/weathers/patchy_light_rain_thunder_day_386.png'

const Background = () => {
    //import bg 
        //filter bg according to number

    return (
        <div className='absolute h-screen w-screen'>
           <Image
            src={bg}
            alt="Picture of the author"
            fill={true}
            />
        </div>

  )
}

export default Background