import React, { useState } from 'react';
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";

const options = [
    { value: 1, label: 'BX 1' },
    { value: 2, label: 'BX 2' },
    { value: 3, label: 'BX 3' },
];

const tripDetails = {
    route: 'Miền Đông Mới - Nha Trang',
    departureTime: '21:30 08/07/2024',
    seatCount: 1,
    tripPrice: 0,
};

const priceDetails = {
    ticketPrice: 0,
    paymentFee: 0,
};

priceDetails.totalPrice = priceDetails.ticketPrice + priceDetails.paymentFee;

export default function TicketDetail() {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Header />
            <div className="flex flex-col items-center font-sans p-4">
                <div className="flex w-full max-w-5xl">
                    <div className="w-1/2 p-4">
                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4">Chọn ghế</h2>
                            {/* Chọn ghế component or content goes here */}
                        </div>
                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4">Thông tin đón trả</h2>
                            <div className="mb-4">
                                <label className="block mb-2">Điểm đón</label>
                                <select className="w-full border border-gray-300 p-2 rounded">
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Điểm trả</label>
                                <select className="w-full border border-gray-300 p-2 rounded">
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p>Quý khách vui lòng có mặt tại Bến xe/Văn Phòng BX Miền Đông Mới Trước 21:15 08/07/2024 để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe.</p>
                        </div>
                        <div className="flex space-x-2.5">
                            <button className="bg-red-500 text-white py-2 px-4 rounded">Hủy</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Thanh toán</button>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4">Thông tin lượt đi</h2>
                            <p>Tuyến xe: {tripDetails.route}</p>
                            <p>Thời gian xuất bến: {tripDetails.departureTime}</p>
                            <p>Số lượng ghế: {tripDetails.seatCount} Ghế</p>
                            <p>Tổng tiền lượt đi: {tripDetails.tripPrice}đ</p>
                        </div>
                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4">Chi tiết giá</h2>
                            <p>Giá vé lượt đi: {priceDetails.ticketPrice}đ</p>
                            <p>Phí thanh toán: {priceDetails.paymentFee}đ</p>
                            <p>Tổng tiền: {priceDetails.totalPrice}đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
