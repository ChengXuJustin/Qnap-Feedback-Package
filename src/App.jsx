import './App.css'
import Citation from './components/Citation'
import Feedback from './components/Feedback'
import rating_text from './data/rating.json'


function App() {

  return (
    
    <div className='frame pd-frame bd-rd-frame-20 fh quesps'>

      <h1 className='mb-20'>Rate Your Experience with </h1>

      <Citation />

      <Feedback
        id="rating"
        data={rating_text}
      />

      <Feedback
        id="openQues"
        data={{}}
      />
    </div>
  )
}

export default App