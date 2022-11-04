import React from 'react'
import pic from "../../assets/images/card.png"
import {card} from "../../components/Card/Card"
import Card from "../../components/Card/Card"
import { Select, Option } from "@material-tailwind/react";
import  "./Dashboard.css"
import { useState } from 'react'
import { Menu } from '@headlessui/react'
const Dashboard= () => {
  const abc=[
    {
      label:"Hi",value:"Hi"
    }
  ]
  const [old,setOld] = useState();
  const click2 =(item) =>{
    setOld(item);
  }
  const [new1,setNew] = useState();
  const click1 = (item) =>{
    setNew(item);
  }
  
  const [month,setMonth] = useState();
  const click3 = (item) =>{
    setMonth(item);
  }
  const [year,setYear] = useState();
  const click4=(item) =>{
    setYear(item);
    console.log(item);
  }
   return (
    <div className=' w-100 font-openSans'>
    <div className='grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 x shadow-2xl items-center'>
    <div className='hover:place-items-center mx-12'>
    <h3 className='y text-orange-600 font-extrabold text-center'>CLUB</h3>
    </div>
    <div class="flex h-24 items-center justify-center ">
    <div class="flex border-2 z rounded-3xl">
        <input type="text" className="px-4 z py-2 w-80 rounded-3xl shadow-2xl" placeholder="Search events ..." />
        <button class="flex items-center justify-center px-4 border-l">
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>
    </div>
    <div className='flex justify-center'>
    <Menu as="div" className="relative">
    <Menu.Button className="px-4 py-2 rounded bg-blue-600 text-white ...">Filter</Menu.Button>
    <Menu.Items className="absolute mt-1 right-0">
      <Menu.Item>
        {({ active }) => (
          <a className={`${active && 'bg-blue-500 text-white'} ...`}>
            Account settings
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a className={`${active && 'bg-blue-500 text-white'} ...`} >
            Documentation
          </a>
        )}
      </Menu.Item>
      <Menu.Item disabled>
        <span className="opacity-75 ...">Invite a friend (coming soon!)</span>
      </Menu.Item>
    </Menu.Items>
  </Menu>
    </div>

</div>

    <div className='container py-[60px] m-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
    {card.map((i,key) => (
      <Card data={i}/>
     ) 
     )}
    </div>
    </div>
  )
}
export default Dashboard;
