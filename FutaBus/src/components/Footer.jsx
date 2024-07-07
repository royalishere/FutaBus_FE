import React from 'react';

const Footer = React.memo(() => {
    return (
        <footer className="mt-5 w-full bg-gray-100 block">
            <div className="flex flex-wrap gap-14 p-4 justify-center sm:gap-14">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2 justify-content-between max-w-lg">
                        <div className="flex flex-col">
                            <span className="text-black font-bold uppercase">Trung tâm tổng đài & CSKH</span>
                            <a href="tel:1900 6609" className="text-orange-600 font-bold text-3xl">1900 6609</a>
                        </div>
                        <span className="text-green-700">CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES</span>
                        <span className="text-black">Địa chỉ:Tố 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam.</span>
                        <div className="flex justify-between">
                            <a href="mailto:hotro@futa.vn" className="text-orange-600 decoration-0">hotro@futa.vn</a>
                            <span className="text-gray-700">Tel: <a href="#" className="text-orange-600">02838386852</a></span>
                        </div>
                    </div>

                </div>

                <div className="hidden max-w-lg flex-col gap-8 sm:flex sm:flex-row">
                    <div className="flex flex-col">
                        <p className="text-green-700 text-xl">FUTA BUS Lines</p>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-gray-500 decoration-0">Về chúng tôi</a>
                            <a href="#" className="text-gray-500 decoration-0">Lịch trình</a>
                            <a href="#" className="text-gray-500 decoration-0">Tuyển dụng</a>
                            <a href="#" className="text-gray-500 decoration-0">Tin tức & Sự kiện</a>
                            <a href="#" className="text-gray-500 decoration-0">Mạng lưới văn phòng</a>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-green-700 text-xl">Hỗ trợ</p>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-gray-500 decoration-0">Về chúng tôi</a>
                            <a href="#" className="text-gray-500 decoration-0">Lịch trình</a>
                            <a href="#" className="text-gray-500 decoration-0">Tuyển dụng</a>
                            <a href="#" className="text-gray-500 decoration-0">Tin tức & Sự kiện</a>
                            <a href="#" className="text-gray-500 decoration-0">Mạng lưới văn phòng</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center bg-green-900 py-2">
                <span className="text-gray-100">© {new Date().getFullYear()}| Bản quyền thuộc về Công ty Cổ Phần Xe khách Phương Trang - FUTA Bus Lines</span>
            </div>
        </footer>

    );
})

export default Footer;