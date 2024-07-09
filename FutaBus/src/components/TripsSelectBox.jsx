import React, {useState} from 'react';
import DropDown from './DropDown.jsx';
import CalendarDropdown from './Calendar.jsx';
import {formatDate} from "../utils/helpers.js";

const TripsSelectBox = ({options, origins, default_val}) => {
    const [query, setQuery] = useState({
        originCode: '',
        destCode: '',
        fromDate: '',
    })
    const queryParams = new URLSearchParams(window.location.search);

    const handleSubmit = () => {
        //navigate to order ticket page
        window.location.href = `/order-ticket?originCode=${query.originCode}&destCode=${query.destCode}&fromDate=${query.fromDate}`;
    }

    return (
        <>
            <div className='relative container my-10 py-3 w-[60%] h-[200px] rounded-md border-2 bg-white p-4 border-blue-500 shadow-xl'>
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
                            setQuery({...query, originCode: value?.value})
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
                            setQuery({...query, destCode: value?.value})
                        }}
                    />
                    <CalendarDropdown
                        title={'Ngày đi'}
                        onSelectDate={(value) => {
                            setQuery({...query, fromDate: formatDate(value)})
                        }}
                    />
                    <DropDown
                        title={'Số Vé'}
                        label='Select an option'
                        options={options}
                        onSelect={(value) => {
                            setQuery({...query, num: value?.value})
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
        </>
    )
}

export default TripsSelectBox;