import React from 'react'
import { Link } from 'react-router-dom'

const SwitchButton = ({ prev, ford, prevActive, fordActive }) => {
    console.log(typeof prevActive, typeof fordActive)
    return (
        <div className='flex justify-center my-4 '>
            {
                prevActive ? <Link to={prev} className="text-white bg-orange-500 hover:bg-orange-600 w-fit p-2 rounded-lg mx-2 ">Previous</Link>
                    : ""
            }
            {
                fordActive ? <Link to={ford} className='text-white bg-blue-500 hover:bg-blue-600 w-fit p-2 rounded-lg mx-2'>Forward</Link>
                    : ""
            }

        </div>
    )
}

export default SwitchButton