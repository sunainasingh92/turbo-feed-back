import React from 'react' //impt + tabkey
import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor, color:textColor, fontSize:'20px'
  } 
  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}



Header.defaultProps ={
  bgColor: 'pink',
  textColor: 'white', 
  text: 'Feedback React UI'
}

Header.propTypes ={
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
