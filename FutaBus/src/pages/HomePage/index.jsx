import React, {useEffect, useState} from 'react'
import TripsSelectBox from "../../components/TripsSelectBox.jsx";
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import {getAllOrigins} from "../../services/originsApi.jsx";
import gather from '../../assets/gather.svg';
import icon_1 from '../../assets/Group.svg';
import icon_2 from '../../assets/Store.svg';
import icon_3 from '../../assets/Bus.svg';

const options = [
    {value: 1, label: '1 vé'},
    {value: 2, label: '2 vé'},
    {value: 3, label: '3 vé'},
]

export default function Home() {

    const [origins, setOrigins] = useState([]);

    useEffect(() => {
        getAllOrigins().then((response) => {
            if (response && response.value) {
                setOrigins(response.value)
            }
        })
    }, [])

    return (
        <div className='bg-gray-100'>
            <Header/>
            <TripsSelectBox options={options} origins={origins}/>
            <section className="flex flex-col items-center px-4 py-6 text-center sm:p-10">
                <span className="text-green-800 w-full text-3xl uppercase font-bold">futabus lines - chất lượng là danh dự</span>
                <span className="text-gray-500">Được khách hàng tin tưởng và lựa chọn</span>
                <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-16">
                    <div className="flex flex-col items-center">
                        <div className="mb-8 flex items-center w-full">
                            <img src={icon_1} alt="icon_1" className="w-16 h-16"/>
                            <div className="flex flex-col text-left ml-4">
                                <span className="text-2xl font-semibold lg:text-3xl">Hơn 20 trệu<span className="ml-3 text-base">lượt khách</span></span>
                                <span className="text-gray-500">Phương Trang phục vụ hơn 20 triệu lượt khách bình quân 1 năm trên toàn quốc</span>
                            </div>
                        </div>

                        <div className="mb-8 flex items-center w-full">
                            <img src={icon_2} alt="icon_2" className="w-16 h-16"/>
                            <div className="flex flex-col text-left ml-4">
                                <span className="text-2xl font-semibold lg:text-3xl">Hơn 350<span className="ml-3 text-base">phòng vé - bưu cục</span></span>
                                <span className="text-gray-500">Phương Trang có hơn 350 phòng vé, trạm trung chuyển, bến xe,... trên toàn hệ thống</span>
                            </div>
                        </div>

                        <div className="mb-8 flex items-center w-full">
                            <img src={icon_3} alt="icon_3" className="w-16 h-16"/>
                            <div className="flex flex-col text-left ml-4">
                                <span className="text-2xl font-semibold lg:text-3xl">Hơn 1000<span className="ml-3 text-base">chuyến xe</span></span>
                                <span className="text-gray-500">Phương Trang phục vụ hơn 1,000 chuyến xe đường dài và liên tỉnh mỗi ngày</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden object-fit-contain sm:block">
                        <img src={gather} alt="gather" loading="lazy" decoding="async" className="w-full"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    )
}
