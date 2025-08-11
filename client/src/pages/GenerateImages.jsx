import { SquarePen, Sparkles, Image } from 'lucide-react'
import { useState } from 'react'

function GenerateImages() {
    const imageStyles = [
      'Realistic', 'Ghibli Style', 'Anime Style', 'Cartoon Style',
      'Fantasy Style', '3D Style', 'Portrait Style'
  ];

  const [ selectedStyle, setSelectedStyle ] = useState('Realistic');
  const [ input, setInput ] = useState('');
  const [ publish, setPublish ] = useState(false);

  const onSubmitHandler = async (e) => {
      e.preventDefault();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex flex-wrap gap-5 items-start text-slate-700 transition-all duration-500 ease-in-out'>
      {/**Left column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-5 bg-white border border-gray-200 rounded-lg'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6 text-[#01ad26]' />
            <h1 className='text-xl font-semibold'>AI Image Generator</h1>
          </div>
          <p className='mt-6 text-sm font-medium'>Describe Your Image</p>
          <textarea 
          onChange={(e)=> setInput(e.target.value)}
          type="text" 
          className='w-full h-30 border border-gray-200 p-2 rounded-md mt-2 text-sm outline-none' 
          placeholder='Describe what you want to see in the image..' required />
          <p className='mt-6 text-sm font-medium'>Style</p>
          <div className='mt-2 text-xs flex flex-wrap gap-3'>
            {
              imageStyles.map((item, index)=>(
                <span 
                onClick={() => setSelectedStyle(item)}
                key={index} 
                className={`text-xs border rounded-full md:px-7 md:py-2 px-4 py-2 cursor-pointer ${selectedStyle === item? 'bg-green-50 text-green-700 border-green-300' : 'text-gray-500 border-gray-300'}`}>
                  {item}</span>
              ))
            }
          </div>
          <div className='mt-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
              <input type="checkbox" onClick={(e)=> setPublish(e.target.checked)} checked={publish} className='sr-only peer' />
              <div className='w-9 h-5 rounded-full bg-slate-300 peer-checked:bg-green-500 transition'></div>
              <span className='absolute left-1 top-1 w-3 h-3  bg-white rounded-full transition peer-checked:translate-x-4'></span>
            </label>
            <p className='text-sm'>Make this image public</p>
          </div>
          <button className='mt-6 flex gap-3 w-full bg-gradient-to-r from-[#01ad26] to-[#00ff51] rounded-lg p-2 justify-center items-center text-white cursor-pointer text-sm'>
              <Image className='w-5'/>
              <p>Generate image</p>
          </button>
          
      </form>

      {/**Right column */}
        <div className='w-full max-w-xl border border-gray-200 rounded-lg bg-white p-5 min-h-96 max-h-[600px] flex flex-col'>
            <div className='flex items-center gap-1'>
              <Image className='w-5 h-5 text-[#01ad26]' />
              <h1 className='text-xl font-semibold'>Generated image</h1>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                  <Image className='w-10 h-10' />
                  <p>Describe an image and click "Generate Image" to get started</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenerateImages