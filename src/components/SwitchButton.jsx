import React from 'react'
import { Link } from 'react-router-dom'

const SwitchButton = ({ prev, ford, prevActive, fordActive }) => {
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
            <Link to="/renderpdf" className="text-white bg-purple-500 hover:bg-purple-600 w-fit p-2 rounded-lg mx-2 ">Preview</Link>

        </div>
    )
}

export default SwitchButton