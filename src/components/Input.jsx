import React, { useState } from 'react'

const Input = ({ setData, name, placeholder, value, type, page }) => {
    const handleChange = (e) => {
        if(page){
            let arr = e.target.value.split(",")
            console.log(arr);
            setData(prev => ({...prev,skill:arr}))
        }else{
            setData(prev => ({ ...prev, [`${e.target.name}`]: e.target.value }))
        }
    }
    return (
        <input type={type} name={name} id="" placeholder={placeholder} className='p-2 my-2 mx-4 rounded-lg bg-gray-300 placeholder:text-black outline-none' value={value} onChange={handleChange} />
    )
}

export default Input