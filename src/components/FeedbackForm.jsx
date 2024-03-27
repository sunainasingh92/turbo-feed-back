import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import Feedbackcontext from '../context/Feedbackcontext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(Feedbackcontext)

    
    const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
        const newFeedback = {
          text,
          rating,
        }
        //addFeedback(newFeedback)
        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else {   addFeedback(newFeedback)   }
        
        setText('')
      }
    }
    useEffect(()=> { console.log('hello')
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
       setText(e.target.value)
       if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
    }
    else if(text !=='' && text.trim().length <= 10){
        setMessage('Test must be at lest 10 characters')
        setBtnDisabled(true)
    }
    else{
        setMessage(null)
        setBtnDisabled(false)
    }
    
    }
  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => console.log(rating)} />
            <div className='input-group'>
                <input onChange={ handleTextChange } type="text" placeholder='Write a review' value={text}/>
                <Button type="submit" isDisabled={btnDisabled} version='secondary'>Send</Button>
            </div>
            {message && <div className='message'>{message}</div> } 
        </form>
      </Card>
    </div> 
  )
}

export default FeedbackForm
