import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function AboutIconlink({textFloat, textColor}) {
    const aboutStyles = {
        color:textColor
      } 
  return (
    <div className='about-link' style={aboutStyles} >
        <Link to='/about'><FaQuestion size={30} /></Link>
    </div>
  )
}

AboutIconlink.defaultProps ={
    bgColor: 'pink',
    textColor: 'white', 
    text: 'Feedback React UI',
    textFloat: 'right'
  }
  
  AboutIconlink.propTypes ={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    textFloat: PropTypes.string
  }
  

export default AboutIconlink
