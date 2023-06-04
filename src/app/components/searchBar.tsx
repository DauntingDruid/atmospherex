
import React from 'react'
import {G_API_KEY} from '../environment'
import { Combobox } from '@headlessui/react'





const SearchBar = (onSearchChange:any) => {

    console.log('G KEY: ',G_API_KEY);
  return (
    <div className='flex mt-10 justify-center items-center'>
        {/* input search bar */}
        <div className='flex items-center justify-center w-3/4 h-10'>
            {/* <input className='w-3/4 h-full bg-transparent outline-none text-slate-300 border-b-[1px] border-slate-300 border-opacity-30 transition-all duration-300 ease-in-out focus:scale-110 placeholder:text-opacity-10 placeholder:text-sm hover:border-opacity-50 hover:scale-105' 
                type="text" 
                placeholder='Search for places' 
            /> */}

                
            

        </div>
    </div>
  )
}

export default SearchBar
