import React from 'react';

const RouteHolder = ({route}) => {
    return (
        <div className='flex border-b bg-white p-2'>
            <div className="w-1/5">{route.route}</div>
            <div className='w-1/6 px-6'>{route.type}</div>
            <div className='w-1/6 px-6'>{route.distance}</div>
            <div className='w-1/6 px-6'>{route.duration}</div>
            <div className='w-1/6 px-6'>{route.price}</div>
            <div className="">
                <button className='bg-red-200 text-red-700 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white'>
                    Tìm tuyến xe
                </button>
            </div>
        </div>
    )
};

export default RouteHolder;