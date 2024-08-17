import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container py-10'>
      <div className='flex flex-col lg:flex-row justify-between gap-10'>
        <div className='flex flex-col'>
          <h1 className='text-white text-3xl'>Tianlong</h1>
          <p className='text-base mt-5 leading-7 text-gray-400'>
            Purchase amazing gas cookers at affordable prices available in wholesale
          </p>
          <div className='flex mt-5 items-center gap-5'>
            {socialMedia.map((icon, index) => (
              <div key={index} className='flex justify-center h-12 w-12 bg-white items-center rounded-full'>
                <img src={icon.src} alt={icon.alt} width={25} height={25} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className='text-white mb-6 leading-normal text-2xl font-medium'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    className='text-gray-400 text-base leading-normal mt-3 cursor-pointer hover:text-red-900'
                    key={linkIndex}
                  >
                    <a href="#">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center mt-10 text-gray-400'>
        <div className='flex items-center gap-2'>
          <img src={copyrightSign} width={20} height={20} className='rounded-full' alt="copyright" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='cursor-pointer mt-4 lg:mt-0'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
