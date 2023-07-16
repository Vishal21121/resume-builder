import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import SwitchButton from '../components/SwitchButton'

const Work = ({data,setData}) => {
  return (
    <Form>
        <h1 className='text-gray-300 text-4xl ml-4 mb-4'>Work Experience</h1>
        <Input type="text" setData={setData} name="position" placeholder="Enter your Position" value={data.position}/>
        <Input type="text" setData={setData} name="company" placeholder="Enter your Comapany name" value={data.company}/>
        <Input type="text" setData={setData} name="duration" placeholder="Enter the duration you worked" value={data.duration}/>
        <SwitchButton prev="/skill" ford="/edu" prevActive={true} fordActive={true}/>
    </Form>
  )
}

export default Work