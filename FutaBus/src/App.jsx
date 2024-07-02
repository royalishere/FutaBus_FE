import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
