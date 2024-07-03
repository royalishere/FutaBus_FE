import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
import PaymentInfoComponent from './pages/Payment'
import Home from './pages/HomePage';
import Schedule from './pages/Schedule';
import SearchTicket from './pages/SearchTicket';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/payment-info" element={<PaymentInfoComponent/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/search-ticket" element={<SearchTicket/>}/>
            </Routes>
        </Router>
    )
}

export default App
