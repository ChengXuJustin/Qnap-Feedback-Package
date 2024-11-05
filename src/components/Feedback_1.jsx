import pract_text from '../data/practicality.json'
import Feedback from './Feedback'

const Feedback_1 = ({ data = [] }) => {
  return (
    <div>
        <Feedback
            id="rating"
            data={data}
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
