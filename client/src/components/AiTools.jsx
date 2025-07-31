import { AiToolsData } from "../assets/assets"


function AiTools() {
  return (
    <div className='min-h-screen py-20 flex flex-col gap-4 items-center '>
        <div className='text-center'>
            <h1 className='mx-auto md:text-4xl sm:text-3xl text-2xl font-bold text-gray-700'>Powerful AI Tools</h1>
            <p className='mt-4 sm:max-w-lg max-w-xs max-sm:text-xs max-md:text-sm max-lg:text-md  text-gray-400'>Everything you need to create, enhance and optimize your content with cutting-edge AI technology.</p>
        </div>
        <div className='w-full flex justify-center'>
            <div className="px-10 py-10 md:px-20 md:py-20 flex flex-col justify-center md:grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-12 lg:gap-15">
                {AiToolsData.map((tool, idx) => (
                    <div key={idx} className="py-5 px-5 md:py-8 md:px-8 lg:px-10 lg:py-10 flex flex-col gap-2 text-justify  shadow-lg  hover:scale-102">
                                <tool.Icon className={`${tool.bg}`} />
                                <h1 className="font-bold text-gray-600">{tool.title}</h1>
                                <p className="text-xs text-gray-400">{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AiTools