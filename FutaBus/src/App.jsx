import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {AuthProvider} from "./contexts/useAuth.jsx";
import Login from './pages/Login'
import PaymentInfoComponent from './pages/Payment'
import Home from './pages/HomePage';
import Schedule from './pages/Schedule';
import SearchTicket from './pages/SearchTicket';
import OrderTicket from './pages/OrderTicket';
import Booking from "./pages/Booking";

function App() {

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/order-ticket" element={<OrderTicket/>}/>
                    <Route path="/booking" element={<Booking/>}/>
                    <Route path="/payment-info" element={<PaymentInfoComponent/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                    <Route path="/search-ticket" element={<SearchTicket/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
