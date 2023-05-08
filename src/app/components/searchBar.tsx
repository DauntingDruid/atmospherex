
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex mt-10 justify-center items-center'>
        {/* input search bar */}
        <div className='flex items-center justify-center w-3/4 h-10'>
            <input className='w-3/4 h-full bg-transparent outline-none text-slate-300 border-b-[1px] border-slate-300 border-opacity-30 transition-all duration-300 ease-in-out focus:scale-110 placeholder:text-opacity-10 placeholder:text-sm hover:border-opacity-60 hover:scale-105' 
                type="text" 
                placeholder='Search for places' 
            />
            {/* <div className='w-1/4 h-full flex items-center justify-center'>
                <button className='w-3/4 h-3/4 rounded-[30px] bg-slate-300 backdrop-blur-lg bg-opacity-10 border-2 border-white border-opacity-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 0v8m0-8a4 4 0 00-4 4m4-4a4 4 0 110 8 4 4 0 010-8z" />
                    </svg>
                </button>
            </div> */}
        </div>
    </div>
  )
}

export default SearchBar
