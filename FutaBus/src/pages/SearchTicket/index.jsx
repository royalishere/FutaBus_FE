import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import React, {useState} from 'react';

const SearchTicket = () => {
    const [phone, setPhone] = useState('');
    const [ticket, setTicket] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Phone:', phone);
        console.log('Ticket:', ticket);
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
                    <div className="mb-4">
                        <label htmlFor="ticket" className="sr-only">Mã vé</label>
                        <input
                            type="text"
                            id="ticket"
                            value={ticket}
                            onChange={(e) => setTicket(e.target.value)}
                            placeholder="Vui lòng nhập mã vé"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                        Tra cứu
                    </button>
                </form>
            </div>
            <Footer/>
        </>

    );
};

export default SearchTicket;
