import React, {useEffect, useState} from 'react'
import TripsSelectBox from "../../components/TripsSelectBox.jsx";
import Ticket from '../../components/Ticket.jsx'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import {getAllOrigins} from "../../services/origins.jsx";

const options = [
    {value: 1, label: '1 vé'},
    {value: 2, label: '2 vé'},
    {value: 3, label: '3 vé'},
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
            <>
                {data.map((e, index) => (
                    <Ticket {...e} key={index}/>
                ))}
            </>
            <Footer/>
        </div>

    )
}
