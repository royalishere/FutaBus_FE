import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import React, {useState} from 'react';
import {getByPhoneNumber} from "../../services/bookingApi.jsx";
import PaidTicket from "../../components/PaidTicket.jsx";

const SearchTicket = () => {
    const [phone, setPhone] = useState('');
    const [tickets, setTickets] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        getByPhoneNumber(phone).then((response) => {
            if (response && response.value) {
                setTickets(response.value);
            }
        });
    };

    return (
        <>
            <Header/>
            <div className="flex items-center justify-center p-10 bg-gray-100">
                <form
                    className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">TRA CỨU THÔNG TIN ĐẶT VÉ</h2>
                    <div className="mb-4">
                        <label htmlFor="phone" className="sr-only">Số điện thoại</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Vui lòng nhập số điện thoại"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600">
                        Tra cứu
                    </button>
                </form>
            </div>
            {tickets.length > 0 &&
                tickets.map((ticket, index) => ticket.status === 'Confirmed' && (
                    <PaidTicket key={index} ticket={ticket}/>
                ))
            }
            <Footer/>
        </>

    );
};

export default SearchTicket;
