import React, {useState} from 'react';
import active from '../assets/seat_active.svg';
import disabled from '../assets/seat_disabled.svg';
import selecting from '../assets/seat_selecting.svg';

const Seat = ({seat, onSelect}) => {
    const [status, setStatus] = useState(seat.status);
    const handleClick = () => {
        if (status === "Blank") {
            setStatus("Pending");
            onSelect(seat, "Pending");
        } else if (status === "Pending") {
            setStatus("Blank");
            onSelect(seat, "Blank");
        }
    }

    return (
        <div className={`relative mt-1 flex text-center justify-center ${status !== "Blank" && status !== "Pending" ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={handleClick}>
            <img src={status === "Blank" ? active : status === "Pending" ? selecting : disabled}
                 alt="seat" className="min-w-[40px]"/>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500 font-bold">{seat.chairName}</span>
        </div>
    )
}

export default Seat;