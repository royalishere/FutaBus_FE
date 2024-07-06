import React, {useEffect, useState} from 'react'
import Dropdown from '../../components/drop-down.jsx'
import CalendarDropdown from '../../components/calendar.jsx'
import Ticket from '../../components/Ticket.jsx'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";

const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'},
]

const data = [
    {
        start: '19:30',
        end: '20:30',
        locationStart: 'Bến Xe Miền Tây',
        locationEnd: 'VP Bến Xe Vũng Tàu',
        time: 3,
        available: 18,
        price: 135000,
    },
    {
        start: '19:30',
        end: '20:30',
        locationStart: 'Bến Xe Miền Tây',
        locationEnd: 'VP Bến Xe Vũng Tàu',
        time: 3,
        available: 18,
        price: 135000,
    },
]

export default function OrderTicket() {
    const [selectedType, setSelectedType] = useState('option1')
    const handleChange = (event) => {
        setSelectedType(event.target.value)
    }
    const [form, setForm] = useState({
        depart: null, // Initial value for departure selection
        arrive: null, // Initial value for arrival selection
        num: null, // Initial value for number selection
        startDate: null, // Initial value for start date selection
        endDate: null, // Initial value for end date selection
    })
    useEffect(() => {
        if (selectedType === 'option1') {
            setForm({...form, endDate: null})
        }
    }, [selectedType])
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
                    <Dropdown
                        title={'Điểm đi'}
                        label='Select an option'
                        options={options}
                        onSelect={(value) => {
                            setForm({...form, depart: value?.value})
                        }}
                    />
                    <Dropdown
                        title={'Điểm đến'}
                        label='Select an option'
                        options={options}
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
                    <Dropdown
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
            <>
                {data.map((e, index) => (
                    <Ticket {...e} key={index}/>
                ))}
            </>
            <Footer/>
        </div>

    )
}
