import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react';
//import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";
import Feedbackcontext from '../context/Feedbackcontext';
import { FaSpinner } from 'react-icons/fa';
//function FeedbackList({feedback, handleDelete}){

function FeedbackList(){
  const {feedback, isLoading} = useContext(Feedbackcontext)
  if(!isLoading && !feedback || feedback.length === 0){
    return <p>No feedback Yet!</p>
  }
  return isLoading ? (
    <FaSpinner />
    ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}

      </AnimatePresence>
    </div>
    )
  }
  /*
  return (
  <div className="feedback-list">
 { feedback.map((item) => (
    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  ))}
  </div>
  )
}
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}*/
export default FeedbackList