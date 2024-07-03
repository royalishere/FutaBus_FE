import React, { useEffect, useState } from 'react'
import Dropdown from './component/drop-down' // Assuming your Dropdown component is in a file named Dropdown.js
import CalendarDropdown from './component/calendar'
import Ticket from './component/Ticket'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
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

export default function Home() {
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
      setForm({ ...form, endDate: null })
    }
  }, [selectedType])
  const handleSubmit = () => {
    console.log(form)
  }
  return (
    <div className='bg-black/20'>
      <Header/>
      <div className='relative container my-5 py-3 w-[60%] h-[200px] rounded-md border-2 bg-white p-4 border-blue-500   '>
        <div className='flex items-center space-x-4 text-black my-3'>
          <div className='flex items-center'>
            <label
              htmlFor='option1'
              className={`radio-circle w-4 h-4 rounded-full border m-1 ${
                selectedType === 'option1'
                  ? 'border-blue-500'
                  : 'border-gray-500'
              }  cursor-pointer flex justify-center items-center p-0`}
            >
              {selectedType === 'option1' && (
                <div className='radio-circle w-3 h-3 rounded-full bg-blue-500 cursor-pointer' />
              )}
            </label>
            <input
              type='radio'
              id='option1'
              name='options'
              value='option1'
              checked={selectedType === 'option1'}
              onChange={handleChange}
              className='hidden'
            />
            <label htmlFor='option1'>Một Chiều</label>
          </div>
          <div className='flex items-center'>
            <label
              htmlFor='option2'
              className={`radio-circle w-4 h-4 rounded-full border m-1 ${
                selectedType === 'option2'
                  ? 'border-blue-500'
                  : 'border-gray-500'
              }  cursor-pointer flex justify-center items-center p-0`}
            >
              {selectedType === 'option2' && (
                <div className='radio-circle w-3 h-3 rounded-full bg-blue-500 cursor-pointer' />
              )}
            </label>
            <input
              type='radio'
              id='option2'
              name='options'
              value='option2'
              checked={selectedType === 'option2'}
              onChange={handleChange}
              className='hidden'
            />
            <label htmlFor='option2'>Khứ Hồi</label>
          </div>
        </div>
        <div className='flex items-center justify-between gap-3 '>
          <Dropdown
            title={'Điểm đi'}
            label='Select an option'
            options={options}
            onSelect={(value) => {
              setForm({ ...form, depart: value?.value })
            }}
          />
          <Dropdown
            title={'Điểm đến'}
            label='Select an option'
            options={options}
            onSelect={(value) => {
              setForm({ ...form, arrive: value?.value })
            }}
          />
          <CalendarDropdown
            title={'Ngày đi'}
            onSelectDate={(value) => {
              setForm({ ...form, startDate: value })
            }}
          />
          {selectedType === 'option2' && (
            <CalendarDropdown
              title={'Ngày Về'}
              onSelectDate={(value) => {
                setForm({ ...form, endDate: value })
              }}
            />
          )}
          <Dropdown
            title={'Số Vé'}
            label='Select an option'
            options={options}
            onSelect={(value) => {
              setForm({ ...form, num: value?.value })
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className='absolute bottom-[-12%] left-1/2 -translate-x-1/2 bg-blue-500 text-white py-3 px-[70px] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'
        >
          Tìm Chuyến Xe
        </button>
      </div>
      <>
      {data.map((e, i) => (
        <Ticket {...e} />
      ))}
    </>
    <Footer/>
    </div>
    
  )
}
