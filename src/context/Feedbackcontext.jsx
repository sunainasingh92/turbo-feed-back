import { createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Feedbackcontext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This item is from context',
        rating: 10,
    },
        {
        id: 2,
        text: 'This item is from context',
        rating: 9,
        },
    {
        id: 3,
        text: 'This item is from context',
        rating: 8,
    },
        {
        id: 4,
        text: 'This item is from context',
        rating: 7,
    },
    {
        id: 5,
        text: 'This item is from context',
        rating: 5,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      } 

    const deleteFeedback = (id) => {  
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => item.id !== id))
            }
        }
    
    const updateFeedback = (id, updItem) => { console.log(id, updItem);
       setFeedback(
          feedback.map((item) => (item.id === id ? { ...item, ...updItem} : item))
       )
    }
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit: true
            })
        }
  return (
    <Feedbackcontext.Provider 
    value={{ 
        feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback
        }}
    >
        {children}
    </Feedbackcontext.Provider>
  )
}

export default Feedbackcontext