import React from 'react'

const Button = ({children, active}) => {
    return (
        <div className={`w-80 outline-none flex justify-center align-middle ${active ? 'bg-[#40dfcf] text-[#002a5a]' : 'bg-[#7f95ac] text-white'} py-2 rounded-xl cursor-pointer`}>
            {children}
        </div>
    )
}

export default Button