import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

        {/*-------------left section------------ */}
        <div>
        <img className='mb-5 w-40 ' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum, praesentium nobis rem corrupti magnam ex voluptates laudantium minima deleniti blanditiis consequuntur harum esse? Excepturi cupiditate laboriosam pariatur nemo deserunt!</p>
        </div>



        {/*-------------center section------------ */}
        <div>
        <p className='text-sl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'> 
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Polity private</li>
        </ul>
            
        </div>

        {/*-------------right section------------ */}
        <div>
            <p className='text-sl font-medium mb-5' >SUPPORT</p>
            <ul className='flex flex-col gap-2 text-gray-600' >
                <li>son93131@donga.edu.vn</li>
                <li>0339126718</li>
            </ul>
            
        </div>
      </div>

      {/*-------------cpoyright------------ */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copy right internet by son</p> 
      </div>
    </div>
  )
}

export default Footer
