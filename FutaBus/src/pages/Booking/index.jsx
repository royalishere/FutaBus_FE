import React, {useEffect, useState} from 'react';
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import {getTripsById} from "../../services/tripsApi.jsx";
import {getTripSeatsById} from "../../services/tripSeatsApi.jsx";
import {getRoutesById} from "../../services/routesApi.jsx";
import {useAuth} from "../../contexts/useAuth.jsx";
import Seat from "../../components/Seat.jsx";
import {toast, ToastContainer} from "react-toastify";
import {createBooking} from "../../services/bookingApi.jsx";
import {useNavigate} from "react-router-dom";

const Booking = () => {
    const queryParam = new URLSearchParams(window.location.search);
    const navigate = useNavigate();

    const {currentUser} = useAuth();
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [trip, setTrip] = useState({});
    const [route, setRoute] = useState({});
    const [booking, setBooking] = useState({
        tripId: queryParam.get('tripId'),
        customerId: currentUser ? currentUser.userId : null,
        bookingDetails: [],
    });
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getTripSeatsById(booking.tripId).then((response) => {
            if (response && response.value) {
                setSeats(response.value)
            }
        })

        getTripsById(booking.tripId).then((response) => {
            if (response && response.value) {
                setTrip(response.value)
            }
        })
    }, [])

    useEffect(() => {
        if (trip.routeId)
            getRoutesById(trip.routeId).then((response) => {
                if (response && response.value) {
                    setRoute(response.value)
                }
            })
    }, [trip]);

    const handleCancel = () => {
        window.location.href = '/order-ticket';
    }

    const handlePayment = () => {
        if (selectedSeats.length === 0) {
            toast.error('Vui lòng chọn ghế trước khi thanh toán');
            return;
        }
        setBooking({
            ...booking,
            fullName: fullName,
            phoneNumber: phone,
            email: email,
            bookingDetails: selectedSeats.map(seat => ({
                tripSeatId: seat.id,
            }))
        })

    }
    useEffect(() => {
        if (booking.bookingDetails.length > 0) {
            createBooking(booking).then((response) => {
                if (response && response.value) {
                    navigate('/payment-info?bookingId=' + response.value.id, {state: {booking}});
                }
            })
        }
    }, [booking])


    return (
        <div className='bg-gray-100 min-h-screen'>
            <ToastContainer/>
            <Header/>
            <div className="flex flex-col items-center font-sans p-4">
                <span className='text-4xl font-semibold text-orange-400'>{route.name}</span>
                <div className="flex w-full max-w-6xl">
                    <div className="w-1/2 p-4">
                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4 font-bold">Chọn ghế</h2>
                            <div className="flex justify-between gap-2 row-gap-4 flex-wrap">
                                {
                                    seats.map((seat, index) => (
                                        <Seat key={index} seat={seat} onSelect={(value, status) => {
                                            if (status === 'Pending') {
                                                setSelectedSeats([...selectedSeats, value]);
                                            }
                                            if (status === 'Blank') {
                                                setSelectedSeats(selectedSeats.filter((seat) => seat !== value));
                                            }
                                        }}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mb-4 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-2">Thông tin đón trả</h2>
                            <div className="mb-4">
                                <label className="block mb-2">Điểm đón</label>
                                <select className="w-full border-2 border-gray-500 p-2 rounded font-bold focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none">
                                    {route.pickUpPoints?.filter(point => point.pointKindName !== "Bến đến").map((point, index) => (
                                        <option key={index} value={point.id}>
                                            {point.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Điểm trả</label>
                                <select className="w-full border-2 border-gray-500 p-2 rounded font-bold focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none">
                                    {route.pickUpPoints?.filter(point => point.pointKindName !== "Bến xe khởi hành").map((point, index) => (
                                        <option key={index} value={point.id}>
                                            {point.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p>Quý khách vui lòng có mặt tại Bến xe/Văn Phòng trước thời gian đi để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe.</p>
                        </div>

                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4 font-bold">Thông tin khách hàng</h2>
                            <form>
                                {currentUser.userId ? (
                                    <>
                                        <div className="form-group mb-2">
                                            <label htmlFor="name" className="block mb-2">Họ và tên</label>
                                            <input type="text" name="name" className="w-full border-2 border-gray-500 p-2 text-sm rounded focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none"
                                                   value={currentUser.fullName} disabled
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="phone" className="block mb-2">Số điện thoại</label>
                                            <input type="text" name="phone" className="w-full border-2 border-gray-500 p-2 text-sm rounded focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none"
                                                   value={currentUser.phoneNumber} disabled
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="email" className="block mb-2">Email</label>
                                            <input type="email" name="email" className="w-full border-2 border-gray-500 p-2 text-sm rounded focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none"
                                                   value={currentUser.email} disabled
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="form-group mb-2">
                                            <label htmlFor="name" className="block mb-2">Họ và tên</label>
                                            <input type="text" name="name" className="w-full border-2 border-gray-500 p-2 text-sm rounded focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none"
                                                   onChange={(e) => setFullName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="phone" className="block mb-2">Số điện thoại</label>
                                            <input type="text" name="phone" className="w-full border-2 border-gray-500 p-2 text-sm rounded focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none"
                                                   onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="email" className="block mb-2">Email</label>
                                            <input type="email" name="email" className="w-full border-2 border-gray-500 p-2 text-sm rounded focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 focus:outline-none"
                                                   onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>

                        <div className="flex space-x-2.5">
                            <button className="bg-red-500 text-white py-2 px-4 rounded-full" onClick={handleCancel}>Hủy</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-full" onClick={handlePayment}>Thanh toán</button>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4 font-bold">Thông tin lượt đi</h2>
                            <p>Tuyến xe: {trip?.route?.origin_Name} - {trip?.route?.destination_Name}</p>
                            <p>Thời gian xuất bến: {trip.raw_Departure_Time} {trip.raw_Departure_Date}</p>
                            <p>Số lượng ghế: {trip.seatsAvailable} Ghế</p>
                            <p>Tổng tiền lượt đi: <span className="text-green-500 font-semibold">{trip.unitPrice * selectedSeats.length}đ</span></p>
                        </div>

                        <div className="mb-6 border border-gray-300 p-4 rounded overflow-auto max-h-[500px]">
                            {route.pickUpPoints
                                ?.sort((a, b) => {
                                    if (a.pointKindName === "Bến xe khởi hành") return -1;
                                    if (b.pointKindName === "Bến xe khởi hành") return 1;
                                    if (a.pointKindName === "Bến đến") return 1;
                                    if (b.pointKindName === "Bến đến") return -1;
                                    return 0;
                                })
                                .map((point, index) => (
                                    <div key={index} className="mb-4">
                                        <h2 className="text-md mb-2 font-bold text-green-700">Điểm đến: {point.name}</h2>
                                        <p>Địa chỉ: {point.address}</p>
                                        <p className="font-bold">{point.pointKindName}</p>
                                    </div>
                                ))}
                        </div>

                        <div className="mb-6 border border-gray-300 p-4 rounded">
                            <h2 className="text-xl mb-4 font-bold">Chi tiết giá</h2>
                            <p>Giá vé lượt đi: <span className="text-orange-500 font-semibold">{trip.unitPrice * selectedSeats.length}đ</span></p>
                            <p>Phí thanh toán: 0đ</p>
                            <p>Tổng tiền: <span className="text-orange-500 font-semibold">{trip.unitPrice * selectedSeats.length}đ</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Booking;