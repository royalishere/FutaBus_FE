import React from 'react';
import {formatHour} from "../utils/helpers";

const Ticket = ({trip, route}) => {
    return (
        <div className='relative container my-5 py-3 w-[60%] h-[200px] rounded-md bg-white p-5 drop-shadow-lg'>
            <div className='grid grid-cols-3 text-black gap-5'>
                <div className='flex flex-col col-span-2 '>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='text-2xl font-semibold'>{formatHour(trip.departure_Time)}</p>
                        <div className='h-px my-8 bg-gray-200 border-0 w-full'/>
                        <div className='flex flex-col text-center w-full'>
                            <span>{trip.duration + ' '} Giờ</span>
                            <span className='text-sm w-full'>{'(Asian/Ho Chi Minh)'}</span>
                        </div>
                        <div className='h-px my-8 bg-gray-200 border-0 w-full'/>

                        <p className='text-2xl font-semibold'>{formatHour(trip.arrival_Time)}</p>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <p className='text-lg font-medium'>{route.origin_Name}</p>
                        <p className='text-lg font-medium'>{route.destination_Name}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-2 pb-0'>
                    <div className='flex justify-between gap-2'>
                        <div className='flex items-center gap-2'>
                            <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                            <p className='text-gray-400 font-semibold'>Ghế</p>
                            <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                            <p className='text-emerald-700 font-semibold'>{`${trip.seatsAvailable} chỗ trống`}</p>
                        </div>
                    </div>
                    <span className='text-[32px] font-semibold text-orange-500 self-arrival_Time'>
            {trip.unitPrice}đ
          </span>
                </div>
                <div className='flex flex-col gap-2 '>
                    <a href="#" className='absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-orange-200 text-orange-600 py-2 px-3 rounded-full hover:ring-2 hover:ring-orange-400'>
                        Chọn Chuyến
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ticket;