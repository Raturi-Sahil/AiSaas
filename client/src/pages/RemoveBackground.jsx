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
          <input 
              onChange={(e)=> setInput(e.target.files[0])}
              type="file" 
              accept='image/*'
              className='w-full outline-none p-2 px-3 text-sm border border-gray-300 text-gray-600 mt-2 rounded-md cursor-pointer' 
              required/>
          
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