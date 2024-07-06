import React, {useEffect, useState} from 'react'
import DropDown from '../../components/DropDown.jsx'
import CalendarDropdown from '../../components/Calendar.jsx'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import {getAllOrigins} from "../../services/origins.jsx";

const options = [
    {value: 1, label: '1 vé'},
    {value: 2, label: '2 vé'},
    {value: 3, label: '3 vé'},
]

export default function Home() {
    const [selectedType, setSelectedType] = useState('option1')
    const handleChange = (event) => {
        setSelectedType(event.target.value)
    }

    const [origins, setOrigins] = useState([]);

    const [form, setForm] = useState({
        depart: null, // Initial value for departure selection
        arrive: null, // Initial value for arrival selection
        num: null, // Initial value for number selection
        startDate: null, // Initial value for start date selection
    })

    useEffect(() => {
        getAllOrigins().then((response) => {
            if (response && response.value) {
                setOrigins(response.value)
            }
        })
    }, [])

    const handleSubmit = () => {
        console.log(form)
    }
    return (
        <div className='bg-gray-100'>
            <Header/>
            <div className='relative container my-5 py-3 w-[60%] h-[200px] rounded-md border-2 bg-white p-4 border-blue-500 shadow-xl'>
                <div className='flex items-center space-x-4 text-black my-3'>
                    <span className='text-xl font-semibold'>Chuyến một chiều</span>
                </div>
                <div className='flex items-center justify-between gap-3 '>
                    <DropDown
                        title={'Điểm đi'}
                        label='Select an option'
                        options={origins.map((origin) => ({
                            value: origin.code,
                            label: origin.name
                        }))}

                        onSelect={(value) => {
                            setForm({...form, depart: value?.value})
                        }}
                    />
                    <DropDown
                        title={'Điểm đến'}
                        label='Select an option'
                        options={origins.map((origin) => ({
                            value: origin.code,
                            label: origin.name
                        }))}

                        onSelect={(value) => {
                            setForm({...form, arrive: value?.value})
                        }}
                    />
                    <CalendarDropdown
                        title={'Ngày đi'}
                        onSelectDate={(value) => {
                            setForm({...form, startDate: value})
                        }}
                    />
                    <DropDown
                        title={'Số Vé'}
                        label='Select an option'
                        options={options}
                        onSelect={(value) => {
                            setForm({...form, num: value?.value})
                        }}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className='absolute bottom-[-15%] left-1/2 -translate-x-1/2 bg-orange-600 text-white py-3 px-[70px] rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-orange-700/[.6]'
                >
                    Tìm Chuyến Xe
                </button>
            </div>
            <Footer/>
        </div>

    )
}
