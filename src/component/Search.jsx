import React from 'react'

const Search = () => {
  return (
    <div className='hidden items-center justify-center py-5 gap-[2.1rem] '>
      <input type="text" placeholder='Where you want to go ? ' className='h-12 mt-1 mr-16 mb-1 -ml-9 w-1/4 px-[0.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />
      <input type="date" name="" id="" />
      <label>Choose </label>
    <select name="choose" id="">
       
        <option >
            adult 
        </option>
        <option >
            adult 
        </option>
    </select>
    </div>
  )
}

export default Search
