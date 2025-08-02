import {assets} from '../assets/assets'

function Footer() {
  return (
   <div>
         <div className='grid sm:grid-cols-4 lg:grid-cols-9 gap-4 mx-10 py-5 border-b border-gray-300'>
        <div className='sm:col-span-3 sm:mr-8 max-w-md'>
            <img src={assets.logo} alt="" />
            <p className='text-gray-500 text-sm my-5'>
                Experience the power of AI with OneSolutionAi. <br />
                Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
            </p>
        </div>
        <div className='sm:col-start-4 sm:col-span-1 lg:col-span-2'>
           <div>
             <h1 className='font-medium'>Company</h1>
            <ul className='my-5'>
                <li className='text-gray-500 text-sm'>Home</li>
                <li className='text-gray-500 text-sm'>About us</li>
                <li className='text-gray-500 text-sm'>Contact us</li>
                <li className='text-gray-500 text-sm'>Privacy policy</li>
            </ul>
           </div>
        </div>
        <div className='sm:col-span-6 md:mx-auto lg:col-span-4 sm:text-center'>
            <h1 className='font-medium lg:text-justify'>Subscribe to our newletter</h1>
            <p className='text-gray-500 text-sm my-5 lg:text-justify'>
                The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className='flex sm:justify-center'>
                <input type="email" className='text-gray-500 rounded-md border border-gray-300 p-1 w-xs mr-1 text-md' placeholder='Enter your email' />
                <button className='text-white rounded-md border border-gray-300 py-1 px-2 bg-blue-500 cursor-pointer text-sm' >Subscribe</button>
            </div>
        </div>
    </div>
    <p className='text-gray-500 text-center text-xs m-3'>Copyright 2025 © OneSolutionAi. All Right Reserved</p>
   </div>
  )
}

export default Footer