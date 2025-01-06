import React from 'react'

const Form = ({subTitle,heading,colourful,description,className}) => {
  return (
    <div className={className}>
      <div>
        <p className='text-blue-500'>{subTitle}</p>
        <div>
            <h3 className='md:text-3xl text-xl font-lora-font py-4 font-semibold'>Bringing Your <span className='text-blue-500'>Vision</span> To Life</h3>
            <p className='text-slate-500 pb-6 md:pb-0'>{description}</p>
        </div>
        <div className='md:flex md:my-6 gap-6 '>
           <div className='  md:w-1/2'>
            <input type="text" placeholder='Your Name' className='border-[1px] focus:outline-none w-full p-3 rounded-md' />
           </div>
           <div className='  md:w-1/2'>
            <input type="email" placeholder='Your Email' className='border-[1px] focus:outline-none w-full my-3 md:my-0  p-3 rounded-md' />
           </div>
        </div>
        <div className='md:flex md:my-6 gap-6 '>
           <div className=' md:w-1/2'>
            <input type="text" placeholder='Your Phone' className='border-[1px] focus:outline-none w-full p-3 rounded-md' />
           </div>
           <div className=' md:w-1/2'>
            <input type="text" placeholder='Your Subject' className='border-[1px] focus:outline-none w-full my-3 md:my-0 p-3 rounded-md' />
           </div>
        </div>
        <div>
            <textarea name="" placeholder='Enter Message ' className="border-[1px] focus:outline-none p-3  w-full" id=""></textarea>
        </div>
        <div className='my-4'>
           <button className='w-full bg-blue-600 text-white py-2 rounded-sm'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Form
