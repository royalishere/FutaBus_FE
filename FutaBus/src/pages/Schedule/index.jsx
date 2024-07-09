import React, {useEffect, useState} from 'react'
import DropDown from '../../components/DropDown.jsx'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import RouteHolder from "../../components/RouteHolder.jsx";
import {getAllTrips, getTripsByCodes} from "../../services/tripsApi.jsx";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

const Schedule = () => {
    const [trips, setTrips] = useState([]);
    const [query, setQuery] = useState({
        originCode: '',
        destCode: '',
    })

    const [input, setInput] = useState({
        origin: '',
        dest: '',
    })

    useEffect(() => {
        if (query.originCode || query.destCode) {
            getTripsByCodes(query.originCode, query.destCode, query.fromDate).then((response) => {
                if (response && response.value) {
                    setTrips(response.value)
                }
            })
        } else {
            getAllTrips().then((response) => {
                if (response && response.value) {
                    setTrips(response.value)
                }
            })
        }
    }, [query.originCode, query.destCode])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSearchBtn = () => {
        setQuery({
            originCode: input.origin,
            destCode: input.dest,
        })
    }

    return (
        <div className='bg-gray-100'>
            <Header/>
            <div className=' relative container my-5 w-[75%]'>
                <div className='relative container my-5 py-3 w-min-full rounded-md bg-white sm:p-4 shadow-xl'>
                    <div className='flex items-center justify-center gap-3 '>
                        <input type='text' placeholder='Nhập điểm đi' className='px-4 grow lh-lg text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
                               value={input.origin} onChange={handleChange} name='origin'
                        />
                        <button className='h-10 w-10 flex justify-center items-center rounded-full bg-orange-500 text-white'>
                            <MagnifyingGlassIcon className='h-6 w-6' onClick={handleSearchBtn}/>
                        </button>
                        <input type='text' placeholder='Nhập điểm đến' className='px-4 grow lh-lg text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
                               value={input.dest} onChange={handleChange} name='dest'
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
                                Chỗ trống
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
                            <div className=' bg-gray-100 p-4 rounded-md'>
                                <div className='min-w-full flex flex-col space-y-2 overflow-auto max-h-[200px]'>
                                    {trips.map((trip, index) => (
                                        <RouteHolder key={index} trip={trip} route={trip.route}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default Schedule