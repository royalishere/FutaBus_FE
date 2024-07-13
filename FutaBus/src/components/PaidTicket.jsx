import React from 'react';

const PaidTicket = ({ticket}) => {

    return (
        <div className="bg-white rounded-lg max-w-screen-sm mx-auto my-4">
            <div className="flex justify-between items-center">
                <div className="flex flex-col p-4 border-2 border-gray-500 border-dashed rounded-lg items-center">
                    <p className="text-sm text-gray-500">Giờ xuất bến</p>
                    <span className="text-2xl text-center text-green-500">{ticket.raw_Departure_Time}</span>
                    <span className="text-lg text-center">{ticket.raw_Departure_Date}</span>
                    <span className="text-center text-red-500">Đã thanh toán</span>
                </div>

                <div className="flex flex-col grow gap-1 p-3 border-2 border-gray-500 border-dashed rounded-l-lg justify-center">
                    <p className="text-sm text-gray-500">Mã vé: <span className="text-black text-center">{ticket.id}</span></p>
                    <p className="text-sm text-gray-500">Điểm đi: <span className="text-center text-green-500">{ticket.origin_Name}</span></p>
                    <p className="text-sm text-gray-500">Điểm đến: <span className="text-orange-500 text-center">{ticket.destination_Name}</span></p>
                    <p className="text-sm text-gray-500">Số ghế: <span className="text-black text-center">{ticket.chairNames.join(', ')}</span></p>
                    <p className="text-sm text-gray-500">Giờ đến: <span className="text-center text-orange-500">{ticket.raw_Arrival_Time}</span></p>
                </div>
            </div>
        </div>
    );
};

export default PaidTicket;
