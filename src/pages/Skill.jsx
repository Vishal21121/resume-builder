import React from 'react'
import Form from "../components/Form"
import Input from "../components/Input"
import SwitchButton from '../components/SwitchButton'

const Skill = ({ data, setData }) => {
    
    return (
        <Form>
            <h1 className='text-gray-300 text-4xl ml-4 mb-4'>Skills</h1>
            <Input type="text" setData={setData} name="skill" placeholder="Enter your skills by placing comma" value={data.skill} page="skill" />
            <SwitchButton prev="/contact" ford="/work" prevActive={true} fordActive={true} />
        </Form>
    )
}

export default Skill