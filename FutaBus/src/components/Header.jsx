import React from 'react';
import logo_min from '../assets/logo_min.svg';
import {UserCircleIcon} from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <>
            <header className="header relative w-full bg-[url('/public/banner.webp')] min-h-[180px]">
                <div className="h-20 hidden lg:flex justify-between w-75 mx-auto">
                    <div className="px-20"></div>
                    <div className="flex">
                        <a href="/"><img alt="logo-min" loading="lazy" decoding="async" src={logo_min} className="h-auto w-[290px]"></img></a>
                    </div>
                    <div className="flex items-center">
                        <a href="/login" className="flex items-center bg-gray-100 p-2 rounded-3xl text-sm font-bold">
                            <UserCircleIcon className="size-6 mr-1"/>Đăng nhập/ Đăng ký</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;