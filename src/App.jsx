import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Navbar';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:6700/api';

function App() {
  return (
    <>
      <div className='App'>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
