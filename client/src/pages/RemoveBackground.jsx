import { Sparkles, Eraser } from 'lucide-react'
import { useState } from 'react'

function RemoveBackground() {

  const [ input, setInput ] = useState('');

  const onSubmitHandler = async (e) => {
      e.preventDefault();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex flex-wrap gap-5 items-start text-slate-700 transition-all duration-500 ease-in-out'>
      {/**Left column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-5 bg-white border border-gray-200 rounded-lg'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6 text-[#fe4938]' />
            <h1 className='text-xl font-semibold'>Background Removal</h1>
          </div>
          <p className='mt-6 text-sm font-medium'>Upload image</p>
          <div className='mt-2 flex gap-1 border border-gray-200 rounded-md text-xs'>
            <button className='px-2 border-r border-gray-200 cursor-pointer hover:scale-102 hover:shadow-sm bg-gray-100 transition'>Choose File</button>
            <input 
              onChange={(e)=> setInput(e.target.value)}
              type="text" 
              className='flex-1 outline-none p-3' 
              placeholder='No file chosen' required/>

          </div>
          <p className='mt-1 text-xs font-extralight'>Supports JPG, PNG, and other image formats</p>

          <button className='mt-6 flex gap-3 w-full bg-gradient-to-r from-[#f6ab41] to-[#fe4938] rounded-lg p-2 justify-center items-center text-white cursor-pointer text-sm'>
              <Eraser className='w-5'/>
              <p>Remove background</p>
          </button>
          
      </form>

      {/**Right column */}
        <div className='w-full max-w-xl border border-gray-200 rounded-lg bg-white p-5 min-h-96 max-h-[600px] flex flex-col'>
            <div className='flex items-center gap-1'>
              <Eraser className='w-5 h-5 text-[#fe4938]' />
              <h1 className='text-xl font-semibold'>Processed Image</h1>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                  <Eraser className='w-10 h-10' />
                  <p>Upload an image and click "Remove Background" to get started</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RemoveBackground