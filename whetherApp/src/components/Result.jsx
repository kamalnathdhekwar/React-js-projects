import React from 'react'
import ReactDOM from 'react-dom/client'
export default function Result()
{
    return(
        <div className="shadow-xl shadow-gray-700 mt-5">
            <h2 className='text-4xl text-center'>city Name </h2>
            <div className="flex justify-around mt-2 border-slate-700 border-2">
            <div className="">Max temp : 40 deg</div>
            <div className="">Min temp : 40 deg</div>
            </div>
           <div className="flex justify-around mt-3">
           <div className="">Icon </div>
            <div className="">wheather type</div>
           </div>
        </div>
    )
}