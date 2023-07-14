import React from 'react'
import { Link } from 'react-router-dom'

const SwitchButton = ({prev,ford, prevDisabled, fordDisabled}) => {
    return (
        //! TODO: correct the disabled option which is not working
        <div className='flex justify-center my-4 '> 
            <Link to={prev} className={`text-white bg-orange-500 hover:bg-orange-600 w-fit p-2 rounded-lg mx-2 ${prevDisabled ? "disabled:opacity-10":""}`}>Previous</Link>
            <Link to={ford} className='text-white bg-blue-500 hover:bg-blue-600 w-fit p-2 rounded-lg mx-2'>Forward</Link>
        </div>
    )
}

export default SwitchButton