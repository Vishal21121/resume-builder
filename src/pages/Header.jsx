import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import SwitchButton from '../components/SwitchButton'

const Header = ({data, setData}) => {
    return (
        <div>
            <Form >
                <h1 className='text-gray-300 text-4xl ml-4 mb-4'>Enter headers</h1>
                <Input type="text" setData={setData} name="name" placeholder="Enter your name" value={data.name} />
                <Input type="text" setData={setData} name="pos" placeholder="Enter your position" value={data.pos} />
                <Input type="text" setData={setData} name="tagLine" placeholder="Enter your tagline" value={data.tagLine} />
                <SwitchButton prev="" ford="/contact" prevDisabled="true" fordDisabled="false" />
            </Form>
        </div>
    )
}

export default Header