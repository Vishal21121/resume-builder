import React from 'react'

const Form = ({ children }) => {
    return (
        <div className='bg-gray-950 h-screen py-10'>
            <div className='w-3/4 h-3/4 mx-auto py-4 rounded-lg border-4 border-orange-500 flex flex-col justify-start'>
                {children}
            </div>
        </div>
    )
}

export default Form