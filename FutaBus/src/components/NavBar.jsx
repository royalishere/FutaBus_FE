import React, {useState} from "react";
import {useLocation} from "react-router-dom";

const NavBar = React.memo(() => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const navLinks = [
        {name: 'Trang chủ', path: '/'},
        {name: 'Lịch trình', path: '/schedule'},
        {name: 'Tra cứu vé', path: '/search-ticket'},
        {name: 'Tin tức', path: '/news'},
        {name: 'Hóa đơn', path: '/invoice'},
        {name: 'Liên hệ', path: '/contact'},
    ]

    const handleActiveLink = (path) => {
        setActiveLink(path);
    }

    return (
        <>
            <div className="lg:flex hidden z-20 items-center justify-center">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.path} onClick={() => handleActiveLink(link.path)}
                       className={`mx-2 pb-3 w-32 text-center uppercase text-white hover:font-bold ${activeLink === link.path ? 'border-b-4  border-b-white' : ''}`}>
                        {link.name}
                    </a>
                ))}
            </div>
        </>
    )
})

export default NavBar;