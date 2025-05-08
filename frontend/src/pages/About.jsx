import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>ABOUT <span className=' text-gray-700 font-medium'>US</span></p>
      </div>

    <div className='my-10 flex flex-col md:flex-row gap-12 '>
      <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>At Make Appointment, we are committed to simplifying the healthcare experience. Our platform connects patients with healthcare professionals, making it easier to book medical appointments, access healthcare information, and manage medical records, all in one place. We believe that quality healthcare should be accessible, efficient, and stress-free.</p>
        <p>Our team is dedicated to leveraging the latest technology to improve patient care. We work closely with hospitals, clinics, and doctors to ensure that our platform meets the highest standards of security, convenience, and reliability. With Make Appointment, you can focus on what matters most – your health – while we handle the rest.</p>
        <b className='text-gray-800'>VISION</b>
        <p>Our vision is to become the leading healthcare booking platform, empowering people to take control of their health. We aim to bridge the gap between patients and healthcare providers, ensuring timely access to quality medical care for everyone, everywhere.</p>
      </div>
    </div>

    <div className='text-xl my-4 '>
      <p>Why <span className='text-gray-800 font-semibold'>Choose Us</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[14px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
        <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[14px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
      <b>Convenience</b>
      <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[14px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
      <b>Personalization</b>
      <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>

    </div>
  )
}

export default About;
