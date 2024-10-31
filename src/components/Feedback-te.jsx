import Citation from './Citation'
import Rating from './Rating'
import OpenQuestion from './OpenQuestion'
import Practicality from './Practicality'
import rating_text from '../data/rating.json'


const Feedback = () => {
    return (
        <div className='frame pd-frame bd-rd-frame-20 fh quesps'>
            <h1 className='mb-20'>Rate Your Experience with </h1>
            <Citation />
            <Rating listings={rating_text}/>
            <Practicality />
            <OpenQuestion />
        </div>
  )
}

export default Feedback
