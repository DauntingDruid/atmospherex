import React from 'react'
import SearchBar from './searchBar'

const SidePanel = () => {
  return (
    <div className='w-1/4 bg-slate-300 backdrop-blur-lg bg-opacity-10 rounded-r-[30px] border-r-2 border-white border-opacity-20'>
        <SearchBar />
    </div>
  )
}

export default SidePanel