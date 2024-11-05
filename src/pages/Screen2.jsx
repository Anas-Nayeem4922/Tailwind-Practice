import React, { useState } from 'react'
import Logo from '../components/Logo'
import Content from '../components/Content'
import Input from '../components/Input'
import Button from '../components/Button'

const Screen2 = () => {
    const [active, setActive] = useState(false);
    return (
        <div className='bg-[#002a5a] h-screen flex items-center flex-col w-full'>
            <Logo className=''/>
            <Content>Let's get started</Content>
            <Input placeholder={"E-mail"} type={"email"} setActive={setActive} desc={false}/>
            <Button active={active}>Continue</Button>
        </div>
    )
}

export default Screen2