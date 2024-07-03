import React, { useState } from 'react'

const Dropdown = ({ title, label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<any>(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false)
    onSelect(option) // Call the callback function with the selected option
  }

  return (
    <div className='flex flex-col gap-2 relative w-[250px]'>
      <span className='text-black font-semibold'>{title}</span>
      <button
        type='button'
        className='rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500'
        onClick={handleClick}
      >
        {selected ? (
          <p className='text-black'>{selected.label}</p>
        ) : (
          <p className='text-black/50'>{label}</p>
        )}
      </button>
      {isOpen && (
        <ul
          onMouseLeave={handleClick}
          className='absolute top-full left-0 w-full rounded-md shadow-md mt-1 bg-white z-50 max-w-[200px]'
        >
          {options.map((option) => (
            <li
              key={option.value}
              className='hover:bg-gray-100 px-3 py-2 transition duration-200 text-black hover:cursor-pointer rounded-md'
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
