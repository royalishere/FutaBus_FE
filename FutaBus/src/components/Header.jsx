import React from 'react';
import logo_min from '../assets/logo_min.svg';
import {UserCircleIcon} from '@heroicons/react/24/outline';
import Navbar from '../components/NavBar.jsx';
import {useAuth} from "../contexts/useAuth.jsx";
import {ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline";

const Header = React.memo(() => {
    const hideNavbar = window.location.pathname === '/login';
    const {token, currentUser, logoutUser} = useAuth()
    
    return (
        <>
            <header className="header relative w-full bg-[url('/banner.webp')] min-h-[180px]">
                <div className="h-20 lg:flex lg:justify-center w-75 mx-auto">
                    {!token ? (
                        <div className="px-20"></div>
                    ) : (
                        <div className="text-white py-2 max-w-[120px]">Xin chào, {currentUser?.fullName} </div>
                    )}
                    <div className="flex px-36">
                        <a href="/"><img alt="logo-min" loading="lazy" decoding="async" src={logo_min} className="h-auto w-[290px]"></img></a>
                    </div>
                    {token ? (
                        <div className="flex items-center">
                            <button onClick={logoutUser} className="flex items-center bg-gray-100 py-2 px-4 rounded-full text-sm font-bold">
                                <ArrowRightStartOnRectangleIcon className="size-5 mr-2"/>
                                Đăng xuất
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <a href="/login" className="flex items-center bg-gray-100 py-2 px-4 rounded-full text-sm font-bold">
                                <UserCircleIcon className="size-5 mr-2"/>Đăng nhập/ Đăng ký</a>
                        </div>
                    )
                    }
                </div>
                {!hideNavbar && <Navbar/>}
            </header>
        </>
    )
})

export default Header;