import React from 'react'
import SearchBar from './searchBar'

const SidePanel = (onSearchChange:any) => {
  return (
    <div className='w-1/4 bg-slate-300 backdrop-blur-lg bg-opacity-10 rounded-r-[30px] border-r-2 border-white border-opacity-20'>
        <SearchBar onSearchChange={onSearchChange}/>
    </div>
  )
}

export default SidePanel