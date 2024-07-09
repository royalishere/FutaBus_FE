import React, {useEffect, useState} from 'react'
import TripsSelectBox from "../../components/TripsSelectBox.jsx";
import Ticket from '../../components/Ticket.jsx'
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import {getAllOrigins} from "../../services/originsApi.jsx";
import {getAllTrips, getTripsByCodes} from "../../services/tripsApi.jsx";

const options = [
    {value: 1, label: '1 vé'},
    {value: 2, label: '2 vé'},
    {value: 3, label: '3 vé'},
    {value: 4, label: '4 vé'},
]

export default function OrderTicket() {
    const [origins, setOrigins] = useState([]);
    const [trips, setTrips] = useState([]);
    const query = {
        originCode: '',
        destCode: '',
        fromDate: '',
    }
    const queryParams = new URLSearchParams(window.location.search);
    for (let [key, value] of queryParams) {
        query[key] = value;
    }

    useEffect(() => {
        getAllOrigins().then((response) => {
            if (response && response.value) {
                setOrigins(response.value)
            }
        })

        if (query.originCode || query.destCode || query.fromDate) {
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
    }, [])

    return (
        <div className='bg-gray-100'>
            <Header/>
            <TripsSelectBox options={options} origins={origins}/>
            <>
                {trips.length ? (
                    <div className='w-[65%] container flex flex-col space-y-2 overflow-auto max-h-[450px]'>
                        {trips.map((trip, index) => (
                            <Ticket key={index} trip={trip} route={trip.route}/>
                        ))
                        }
                    </div>
                ) : (
                    <div className='text-center text-2xl'>Không tìm thấy chuyến xe nào</div>)
                }
            </>
            <Footer/>
        </div>

    )
}
