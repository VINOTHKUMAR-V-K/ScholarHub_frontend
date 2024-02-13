import React, { useState } from 'react'

export const Empty = () => {
    const [data,setData]=useState([])
    setData(sessionStorage.getItem("data"))
    console.log(data);
  return (
    <div>
        <div className='border border-3 rounded-3'>
            <h1></h1>
        </div>
    </div>
  )
}
