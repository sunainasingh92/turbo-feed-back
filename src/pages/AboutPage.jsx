import React from 'react'
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className='container' >
      <h1>About page</h1>
      <p> This is a React app to leave feedback for a product or service</p>
      <p>Version 1.0.0</p>

      <Link to='/'>Back to Home</Link>

    </div>
  )
}

export default AboutPage
