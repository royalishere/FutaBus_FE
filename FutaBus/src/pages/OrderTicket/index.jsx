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
]

export default function OrderTicket() {
    const [origins, setOrigins] = useState([]);
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAllOrigins().then((response) => {
            if (response && response.value) {
                setOrigins(response.value)
            }
        })
        // get query params from url
        const urlParams = new URLSearchParams(window.location.search);
        const queries = {
            originCode: urlParams.get('originCode'),
            destCode: urlParams.get('destCode'),
            fromDate: urlParams.get('fromDate'),
        }

        if (queries.originCode || queries.destCode || queries.fromDate) {
            getTripsByCodes(queries.originCode, queries.destCode, queries.fromDate).then((response) => {
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
                {trips.map((trip, index) => (
                    <Ticket key={index} trip={trip} route={trip.route}/>
                ))}
            </>
            <Footer/>
        </div>

    )
}
