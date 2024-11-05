import React, { useState } from 'react'

const Input = ({setActive, placeholder, type="text", desc=true}) => {
    function handleInputChange(e) {
        if(e.target.value === '') {
            setActive(false);
        }else{
            setActive(true);
        }
    }
    return (
        <div className='flex items-center flex-col'>
            {desc ? <p className='mb-4 text-gray-400 opacity-55'>Please confirm your birth year. This data will not be stored</p> : null}
            <input onChange={handleInputChange} className='mb-8 px-3 py-2 bg-[#183f6a] rounded-lg w-80 outline-none text-white' type={type}placeholder={placeholder}/>
        </div>
    )
}

export default Input