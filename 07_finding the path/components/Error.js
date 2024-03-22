import React from 'react'

export const Error = () => {
  return (
    <div className='error-page'>
      <div className='err-img'>
        <img src='https://foodfire-chapter07.netlify.app/404%20Error.59df4a5e.jpg'/>
        <h2>Oops! The restaurant you're looking for can't be found.</h2>
        <h3>Error: No route matches URL "/jaja"</h3>
        <h3 class="error-back-home"><a href="/">Back Home</a></h3>
      </div>
      
    </div>
  )
}

