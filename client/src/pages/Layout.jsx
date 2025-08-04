import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets, AiToolsData } from '../assets/assets'

function Layout() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center min-h-screen'>
          <div className='w-full fixed z-20 border border-gray-100'>
            <img src={assets.logo} alt="logo" className='w-30 md:w-40 cursor-pointer ml-4' onClick={() => navigate('/')} />
          </div>
          <div>
            <nav className='fixed z-10 left-0 md:top-11 top-8 h-full sm:w-50 w-40 border-r border-r-gray-100'>
              <div className='mt-6 text-center'>
                <img src={assets.profile_img_1} alt="img" className='w-14 mx-auto mb-1' />
                <span className='text-sm'>Willaim Bentick</span>
              </div>
              <ul className='flex flex-col gap-4 p-3 mx-auto mt-5 sm:ml-3'>
                {AiToolsData.map((tool, id) => (
                  <li key={id} className='text-gray-500 font-semibold text-xs flex gap-1 justify-start items-center rounded-md' style={
                    {background:`linear-gradient(to left, ${tool.bg.from}, ${tool.bg.to})`}
                  }>
                    <tool.Icon className='sm:w-5 w-4' />
                    <span>{tool.title}</span> 
                  </li>
                ))}
              </ul>
            </nav>
          </div>

    </div>
  )
}

export default Layout