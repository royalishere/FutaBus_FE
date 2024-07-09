import React from 'react';

const RouteHolder = ({trip, route}) => {

    const handleRedirect = () => {
        window.location.href = `/order-ticket?originCode=${route.origin_Code}&destCode=${route.destination_Code}`
    }

    return (
        <div className='flex border-b bg-white p-3'>
            <div className="w-1/5 font-bold">{route.name}</div>
            <div className='w-1/6 px-6'>{trip.seatsAvailable} ghế</div>
            <div className='w-1/6 px-6'>{route.distance} km</div>
            <div className='w-1/6 px-6'>{trip.duration} tiếng</div>
            <div className='w-1/6 px-6'>{trip.unitPrice}</div>
            <div className="">
                <button className='bg-red-200 text-red-700 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white' onClick={handleRedirect}>
                    Tìm tuyến xe
                </button>
            </div>
        </div>
    )
};

export default RouteHolder;