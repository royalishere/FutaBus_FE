import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles

const CalendarDropdown = ({
                              title,
                              onSelectDate,
                              placeholderText = 'Select Date',
                          }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date)
        onSelectDate(date) // Call the callback function with the selected date
        setIsOpen(false) // Close the dropdown after selection
    }

    return (
        <div className='flex flex-col gap-2 relative w-[250px]'>
            <span className='text-black font-semibold'>{title}</span>
            <DatePicker
                dateFormat='dd/MM/yyyy' // Set the date format
                selected={selectedDate} // Set initial selected date
                onChange={handleDateChange}
                className='bg-white text-black rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full' // Set full width for the calendar
                placeholderText={placeholderText} // Set placeholder text within the DatePicker
                onSelect={() => setIsOpen(false)}
            />
        </div>
    )
}

export default CalendarDropdown;
