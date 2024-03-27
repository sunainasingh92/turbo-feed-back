import React from 'react'
import { useContext } from 'react'
import Feedbackcontext from '../context/Feedbackcontext'

function FeedbackStats() {
  const {feedback} = useContext(Feedbackcontext)

    let average = 
    feedback.reduce((acc, cur) => {
        return acc +cur.rating }, 0) / feedback.length
        average = average.toFixed(1).replace(/[.,]0$/,'')
    
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Review</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats