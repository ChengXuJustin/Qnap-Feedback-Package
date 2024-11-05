import './App.css'
import Citation from './components/Citation'
import Feedback from './components/Feedback'
import Feedback_1 from './components/Feedback_1'
import Feedback_2 from './components/Feedback_2'
import Wizard from './components/Wizard'
import rating_text from './data/rating.json'


const App = () => {

  return (
    
    <div className='frame pd-frame bd-rd-frame-20 fh quesps of-y-scl'>

      <h1 className='mb-30' style={{fontSize:'40px'}}>How's Your Experience?</h1>
      
      {/* <>
        <Citation />

        <Feedback
          id="rating"
          data={rating_text}
        />

        <Feedback 
          id="practicality"
          data={rating_text}
        />

        <Feedback
          id="openQues"
          data={{}}
        />
      </> */}


      {/* Type 1 */}
      <Feedback_1 />

      {/* Type 2 */}
      <Feedback_2 />

      {/* Type 3 */}
      <Wizard />
    </div>
  )
}

export default App