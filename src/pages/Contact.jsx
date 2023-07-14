import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import SwitchButton from '../components/SwitchButton'

const Contact = ({data,setData}) => {
    return (
        <Form>
            <h1 className='text-gray-300 text-4xl ml-4 mb-4'>Enter Your contact Details</h1>
            <Input type="email" setData={setData} name="email" placeholder="Enter your email" value={data.email} />
            <Input type="number" setData={setData} name="number" placeholder="Enter your number" value={data.number} />
            <Input type="text" setData={setData} name="gitId" placeholder="Enter your GitHub userid" value={data.gitId} />
            <Input type="text" setData={setData} name="LinId" placeholder="Enter your LinkedIn userid" value={data.LinkId} />
            <SwitchButton prev="/" ford="/work" prevDisabled="false" fordDisabled="false" />
        </Form>
    )
}

export default Contact