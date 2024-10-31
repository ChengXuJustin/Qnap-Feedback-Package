import './App.css'
// import Feedback from './components/Feedback'
import Citation from './components/Citation'
import Feedback_temp from './components/Feedback_temp'
import rating_text from './data/rating.json'


function App() {

  return (
    <>
      {/* <Feedback /> */}
      <Citation />

      <Feedback_temp 
        id="rating"
        data={rating_text}
      />

      <Feedback_temp 
        id="openQues"
        data={{}}
      />
    </>
  )
}

export default App