import React, {useEffect, useState} from 'react'
import Dropdown from '../../components/drop-down.jsx'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import RouteHolder from "../../components/RouteHolder.jsx";

const Schedule = () => {
    const routes = [
        {
            route: 'An Nhơn ⇀ TP. Hồ Chí Minh',
            type: 'Giường',
            distance: '639km',
            duration: '11 giờ 30 phút',
            price: '120.000',
        },
        {
            route: 'An Nhơn ⇀ TP. Hồ Chí Minh',
            type: 'Giường',
            distance: '660km',
            duration: '13 giờ 46 phút',
            price: '120.000',
        },
        {
            route: 'An Nhơn ⇀ TP. Hồ Chí Minh',
            type: 'Thường',
            distance: '627km',
            duration: '10 giờ 7 phút',
            price: '120.000',
        },
    ]

    const routesList = [routes, routes];

    const [form, setForm] = useState({
        depart: null, // Initial value for departure selection
        arrive: null, // Initial value for arrival selection
    })
    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
    ]
    const handleSubmit = () => {
        //
    }
    useEffect(() => {
        handleSubmit()
    }, [form])
    return (
        <div className='bg-gray-100'>
            <Header/>
            <div className=' relative container my-5 w-[70%]'>
                <div className='relative container my-5 py-3 w-[60%]  rounded-md  bg-white p-4 border-blue-500 shadow-xl'>
                    <div className='flex items-center justify-between gap-3 '>
                        <Dropdown
                            title={'Điểm đi'}
                            label='Select an option'
                            options={options}
                            onSelect={(value) => {
                                setForm({...form, depart: value?.value})
                            }}
                        />
                        <div className='h-10 w-10 flex items-center justify-center text-center rounded-full bg-blue-300 text-white'>
                            ⇀
                        </div>
                        <Dropdown
                            title={'Điểm đến'}
                            label='Select an option'
                            options={options}
                            onSelect={(value) => {
                                setForm({...form, arrive: value?.value})
                            }}
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-4 text-black my-3 lg:text-sm'>
                    <div className='min-w-full drop-shadow-lg'>
                        <div className='flex rounded-3xl bg-white border-orange-500 border-1 py-3 text-left'>
                            <div className='w-1/5 px-8'>
                                Tuyến xe
                            </div>
                            <div className='w-1/6 px-8'>
                                Loại xe
                            </div>
                            <div className='w-1/6'>
                                Quãng đường
                            </div>
                            <div className='w-1/6'>
                                Thời gian hành trình
                            </div>
                            <div className='w-1/6'>
                                Giá vé
                            </div>
                            <div className='px-6 bg-white'></div>
                        </div>
                        <div className='mt-4'>
                            {routesList.map((routes, index) => (
                                <div key={index} className='mb-6'>
                                    <div className=' bg-gray-100 p-4 rounded-md'>
                                        <div className='min-w-full flex flex-col space-y-2 overflow-auto max-h-[150px]'>
                                            {routes.map((route, idx) => (
                                                <RouteHolder key={idx} route={route}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default Schedule