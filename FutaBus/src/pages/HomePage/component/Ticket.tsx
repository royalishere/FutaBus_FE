import React, { useState } from 'react'

export default function Ticket({
  start,
  end,
  locationStart,
  locationEnd,
  time,
  available,
  price,
}) {
  return (
    <div className='relative container my-5 py-3 w-[60%] h-[200px] rounded-md bg-white p-5'>
      <div className='grid grid-cols-3 text-black gap-5'>
        <div className='flex flex-col col-span-2 '>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-2xl font-semibold'>{start}</p>
            <div className='h-px my-8 bg-gray-200 border-0 w-full' />
            <div className='flex flex-col text-center w-full'>
              <span>{time + ' '} Giờ</span>
              <span className='text-sm w-full'>{'(Asian/Ho Chi Minh)'}</span>
            </div>
            <div className='h-px my-8 bg-gray-200 border-0 w-full' />

            <p className='text-2xl font-semibold'>{end}</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p className='text-lg font-medium'>{locationStart}</p>
            <p className='text-lg font-medium'>{locationEnd}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 p-2 pb-0'>
          <div className='flex justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 rounded-full bg-gray-400'></div>
              <p className='text-gray-400 font-semibold'>Ghế</p>
              <div className='h-2 w-2 rounded-full bg-gray-400'></div>
              <p className='text-emerald-700 font-semibold'>{`${available} chỗ trống`}</p>
            </div>
          </div>
          <span className='text-[32px] font-semibold text-blue-500 self-end'>
            {price}đ
          </span>
        </div>
        <div className='flex flex-col gap-2 '>
          <div className='absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-blue-500 text-white py-2 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>
            Chọn Chuyến
          </div>
        </div>
      </div>
    </div>
  )
}
