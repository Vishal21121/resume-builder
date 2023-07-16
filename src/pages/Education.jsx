import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import SwitchButton from '../components/SwitchButton'

const Education = ({data,setData}) => {
    return (
        <Form>
            <h1 className='text-gray-300 text-4xl ml-4 mb-4'>Education</h1>
            <Input type="text" setData={setData} name="degree" placeholder="Enter your Degree info" value={data.degree} />
            <Input type="text" setData={setData} name="university" placeholder="Enter your university name" value={data.university} />
            <Input type="text" setData={setData} name="edduration" placeholder="Enter the duration you studied" value={data.edduration} />
            <SwitchButton prev="/work" ford="/renderpdf" prevActive={true} fordActive={true} />
        </Form>
    )
}

export default Education