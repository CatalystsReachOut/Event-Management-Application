import React from 'react'
import pic from "../../assets/images/bg1.png"
import "./Card.css"
export const card = [
    {
      img:pic,
      name:'Event1',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event2',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event3',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event4',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event4',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event4',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event4',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event4',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    },
    {
        img:pic,
      name:'Event4',
      date:'5 Mar 2002',
      head:'organised by GDSC'
    }
]
const shreyas = () =>{

}
const Card= ({data}) => {
  return (
    <div className='s justify-center items-center mx-14 w-100 h-96 my-8 font-openSans cursor-pointer' onClick={shreyas}>
    <div className='relative'>
    <img src={data?.img} className='shadow-lg shadow-black h-72 rounded-tl-3xl w-96 items-center rounded-br-3xl'/>
    <div className='absolute top-0 left-0 px-6 py-4'>
   
    </div>
    </div>
    <h3 className='c mx-9 my-3 font-openSans text-2xl'>{data?.name}</h3>
    <div className='mx-6 a text-orange-600'>
    {data?.date}
     <br></br>
     {data?.head}
    </div>
    </div>
  )
}
export default Card;