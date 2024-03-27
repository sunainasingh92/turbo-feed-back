import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Feedbackcontext from '../context/Feedbackcontext'

function FeedbackItem({item}) {
const {deleteFeedback, editFeedback} = useContext(Feedbackcontext)
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color="blue"/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'> <FaEdit color='purple' /></button>
        <div className='text-display'>{item.text}</div>  
    </Card>
  )
}

export default FeedbackItem
