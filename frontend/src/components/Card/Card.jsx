import React from 'react'
import pic from "../../assets/images/bg1.png"
import "./Card.css"

const shreyas = () =>{

}

const Card= ({data}) => {
  
  return (
    <div className='s justify-center items-center mx-14 w-100 h-96 my-8 font-openSans cursor-pointer'>
    <div className='relative'>

    <img src={`data:${data.img.contentType};base64,${data.img.data.data.toString('base64')}`} className='shadow-lg shadow-black h-72 rounded-tl-3xl w-96 items-center rounded-br-3xl'/>
    <div className='absolute top-0 left-0 px-6 py-4'>
    </div>
    </div>
    <h3 className='c mx-9 my-3 font-openSans text-2xl'>{data?.eventName}</h3>
    <div className='mx-6 a text-orange-600'>
     {data?.description}
     <br></br>
     {data?.date?.split('T')[0]}
    </div>
    </div>
  )
}
export default Card;