import React from 'react'
import { Link } from 'react-router-dom'

function LeftBar() {
  return (
    <div id="Leftbar" className='w-[300px] bg-slate-200 h-[700px]'>
          <div id="first" className='flex flex-col gap-[10px] pl-[30px] border-b-2 p-[10px] border-slate-300'>
           <Link to='/'>Home</Link>
            <h1>Calendar</h1>
          </div>
          <div id="second" className='flex flex-col gap-[10px] '>
            <Link to='/submit'> TE/SEM 5 /ADSA /24-25</Link>
          </div>
    </div>
  )
}

export default LeftBar
