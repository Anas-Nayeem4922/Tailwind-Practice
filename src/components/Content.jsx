import React from 'react'

const Content = ({children}) => {
    return (
        <div>
            <p className='mb-20 text-2xl text-white font-bold'>{children}</p>
        </div>
    )
}

export default Content