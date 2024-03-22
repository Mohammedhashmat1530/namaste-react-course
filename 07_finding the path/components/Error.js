import React from 'react'
import { useRouteError,Link } from 'react-router-dom'

export const Error = () => {
  const err= useRouteError()
  return (
    <div className='error-page'>
      <div className='err-img'>
        <img src='https://foodfire-chapter07.netlify.app/404%20Error.59df4a5e.jpg'/>
        <h2>Oops! The restaurant you're looking for can't be found.</h2>
        <h3>Error: No route matches URL:{err.data}</h3>
        <h3 class="error-back-home"><Link to="/">Back Home</Link></h3>
      </div>
      
    </div>
  )
}

