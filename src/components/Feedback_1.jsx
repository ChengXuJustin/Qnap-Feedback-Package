import rating_text from '../data/rating.json'
import pract_text from '../data/practicality.json'
import Feedback from './Feedback'

const Feedback_1 = () => {
  return (
    <div>
        <Feedback
            id="rating"
            data={rating_text}
        />

        <Feedback 
            id="practicality"
            data={pract_text}
        />

        <Feedback
            id="openQues"
            data={{}}
        />
    </div>
  )
}

export default Feedback_1
