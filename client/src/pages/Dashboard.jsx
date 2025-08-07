import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Sparkles, Gem } from 'lucide-react';
import { Protect } from '@clerk/clerk-react';
import { CreationItem } from '../components/index'
function Dashboard() {

  const [creations, setCreations] = useState([]);
  const getDashboardData = async () => {
    setCreations( dummyCreationData );
  }

  useEffect(()=> {
    getDashboardData();
  }, []);

  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>
        {/**Total creation card */}
        <div className='bg-white flex justify-between items-center w-70 p-6 px-10 rounded-xl border border-gray-200'>
            <div className='text-slate-600'>
              <h1 className='text-sm'>Total Creations</h1>
              <p className='text-xl font-semibold'>{creations.length}</p>
            </div>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center'>
              <Sparkles className='w-4'/>
            </div>
        </div>
        {/**Active plan card */}
        <div className='bg-white flex justify-between items-center w-70 p-6 px-10 rounded-xl border border-gray-200'>
            <div className='text-slate-600'>
              <h1 className='text-sm'>Active Plan</h1>
              <p className='text-xl font-semibold'>
                <Protect plan='premium' fallback='free'>Premium</Protect> 
              </p>
            </div>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center'>
              <Gem className='w-4'/>
            </div>
        </div>
      </div>

      <div className='space-y-4'>
          <h1 className='mt-6'>Recent Creations</h1>
          {creations.map((item) => (
            <CreationItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  )
}

export default Dashboard