import { createContext, useState, useEffect} from 'react'

const Feedbackcontext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    /*const [feedback, setFeedback] = useState([
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
        
    ])*/

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

    useEffect(()=> {
       fetchFeedback()
    }, [])

//fetch response 
const fetchFeedback = async() => {
    const response = await fetch(
        `/feedback`
    )
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
}

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
        //newFeedback.id = uuidv4()
        const data = await response.json()

        setFeedback([data, ...feedback])
      } 

    const deleteFeedback =async (id) => {  
        if(window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})

          setFeedback(feedback.filter((item) => item.id !== id))
            }
        }
    
    const updateFeedback =async (id, updItem) => { //console.log(id, updItem);
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()
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
        feedback, feedbackEdit,isLoading, deleteFeedback, addFeedback, editFeedback, updateFeedback
        }}
    >
        {children}
    </Feedbackcontext.Provider>
  )
}

export default Feedbackcontext