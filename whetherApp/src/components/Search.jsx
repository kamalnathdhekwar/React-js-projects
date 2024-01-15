import React , { useRef} from 'react'
import { useEffect } from 'react';



export default function Search(props){

    const searchInput = useRef();
   


    return (
      <div className='flex shadow-xl shadow-gray-700'>
        <input type="search" value={props.searchData} className="border-black border-2 w-full p-3 text-2xl " onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
        <button className='p-3 bg-indigo-600'>Search</button>
      </div>
    )
  }





