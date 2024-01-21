import React from 'react'

export default function Nav() {
  return (
    <nav className='py-4 bg-slate-700 flex justify-around'>
        <div className="text-4xl text-white">LOGO</div>
        <div className="">
            <ul className='flex space-x-6 text-xl text-white font-semibold cursor-pointer '>
                <li className="hover:text-indigo-400 hover:text-2xl  duration-500">Home</li>
                <li className="hover:text-indigo-400 hover:text-2xl opacity-80 duration-500">About</li>
                <li className="hover:text-indigo-400 hover:text-2xl opacity-80 duration-500">Contact</li>
            </ul>
        </div>
    </nav>
  )
}
