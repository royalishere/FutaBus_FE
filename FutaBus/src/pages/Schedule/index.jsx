import React, { useEffect, useState } from 'react'
import Dropdown from '../HomePage/component/drop-down'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
const Schedule = () => {
  const routes = [
    {
      route: 'An Nhơn ⇀ TP. Hồ Chí Minh',
      type: 'Giường',
      distance: '639km',
      duration: '11 giờ 30 phút',
      price: '---',
    },
    {
      route: 'An Nhơn ⇀ TP. Hồ Chí Minh',
      type: 'Giường',
      distance: '660km',
      duration: '13 giờ 46 phút',
      price: '---',
    },
    {
      route: 'An Nhơn ⇀ TP. Hồ Chí Minh',
      type: '---',
      distance: '627km',
      duration: '10 giờ 7 phút',
      price: '---',
    },
  ]
  const [form, setForm] = useState({
    depart: null, // Initial value for departure selection
    arrive: null, // Initial value for arrival selection
  })
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]
  const handleSubmit = () => {
    console.log(form)
  }
  useEffect(() => {
    handleSubmit()
  }, [form])
  return (
    <div className='bg-black/20'>
        <Header/>
        <div className=' relative container my-5 w-[60%]'>
            <div className='relative container my-5 py-3 w-[60%]  rounded-md border-2 bg-white p-4 border-blue-500   '>
                <div className='flex items-center justify-between gap-3 '>
                <Dropdown
                    title={'Điểm đi'}
                    label='Select an option'
                    options={options}
                    onSelect={(value) => {
                    setForm({ ...form, depart: value?.value })
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
                    setForm({ ...form, arrive: value?.value })
                    }}
                />
                </div>
            </div>
            <div className='flex items-center space-x-4 text-black my-3'>
                <table className='min-w-full '>
                <thead>
                    <tr className='border-seperate'>
                    <th className='rounded-l-md px-6 py-3 border-y-2 border-l-2  text-left leading-4 text-gray-600 bg-white'>
                        Tuyến xe
                    </th>
                    <th className='px-6 py-3 border-y-2  text-left leading-4 text-gray-600 bg-white'>
                        Loại xe
                    </th>
                    <th className='px-6 py-3 border-y-2  text-left leading-4 text-gray-600 bg-white'>
                        Quãng đường
                    </th>
                    <th className='px-6 py-3 border-y-2  text-left leading-4 text-gray-600 bg-white'>
                        Thời gian hành trình
                    </th>
                    <th className='px-6 py-3 border-y-2  text-left leading-4 text-gray-600 bg-white'>
                        Giá vé
                    </th>
                    <th className='rounded-r-md px-6 py-3 border-y-2 border-r-2  bg-white'></th>
                    </tr>
                </thead>
                <tbody className='my-3'>
                    <tr className='invisible'>
                    <td className='p-3'>Empty Space</td>
                    </tr>
                    {routes.map((route, index) => (
                    <tr key={index} className='border-b bg-white'>
                        <td
                        className={`${index == 0 && 'rounded-tl-md'} ${
                            index == routes.length - 1 && 'rounded-bl-md'
                        } px-6 py-4 whitespace-no-wrap`}
                        >
                        {route.route}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>{route.type}</td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                        {route.distance}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                        {route.duration}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>{route.price}</td>
                        <td
                        className={`${index == 0 && 'rounded-tr-md'} ${
                            index == routes.length - 1 && 'rounded-br-md'
                        } px-6 py-4 whitespace-no-wrap`}
                        >
                        <button className='bg-red-200 text-red-700 px-3 py-1 rounded'>
                            Tìm tuyến xe
                        </button>
                        </td>
                    </tr>
                    ))}
                    <tr className='invisible'>
                    <td className='p-3'>Empty Space</td>
                    </tr>
                    {routes.map((route, index) => (
                    <tr key={index} className='border-b bg-white'>
                        <td
                        className={`${index == 0 && 'rounded-tl-md'} ${
                            index == routes.length - 1 && 'rounded-bl-md'
                        } px-6 py-4 whitespace-no-wrap`}
                        >
                        {route.route}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>{route.type}</td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                        {route.distance}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                        {route.duration}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>{route.price}</td>
                        <td
                        className={`${index == 0 && 'rounded-tr-md'} ${
                            index == routes.length - 1 && 'rounded-br-md'
                        } px-6 py-4 whitespace-no-wrap`}
                        >
                        <button className='bg-red-200 text-red-700 px-3 py-1 rounded'>
                            Tìm tuyến xe
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Schedule