import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 '>
        <div className='h-full w-[300px] bg-red-400 p-5 rounded-xl flex-shrink-0 '>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm rounded px-3 py-1'>High</h3>
            <h4>15 Jan 2025 </h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque fugiat! Fugit inventore doloribus maiores.</p>
        </div>
        <div className='h-full w-[300px] bg-blue-400 p-5 rounded-xl flex-shrink-0 '>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm rounded px-3 py-1'>High</h3>
            <h4>15 Jan 2025 </h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque fugiat! Fugit inventore doloribus maiores.</p>
        </div>
        <div className='h-full w-[300px] bg-green-400 p-5 rounded-xl flex-shrink-0 '>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm rounded px-3 py-1'>High</h3>
            <h4>15 Jan 2025 </h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque fugiat! Fugit inventore doloribus maiores.</p>
        </div>
        <div className='h-full w-[300px] bg-yellow-400 p-5 rounded-xl flex-shrink-0 '>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm rounded px-3 py-1'>High</h3>
            <h4>15 Jan 2025 </h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque fugiat! Fugit inventore doloribus maiores.</p>
        </div>
    </div>
  )
}

export default TaskList