import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
import PaymentInfoComponent from './pages/Payment'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/paymentinfo" element={<PaymentInfoComponent />} />

      </Routes>
    </Router>
  )
}

export default App
