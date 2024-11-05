import { useState } from 'react'
import './App.css'
import Citation from './components/Citation'
import Feedback_1 from './components/Feedback_1'
import Feedback_2 from './components/Feedback_2'
import Wizard from './components/Wizard'
import rating_text from './data/rating.json'



const App = () => {

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (
    <div>

      {/* Right Popup */}
      <div className='frame pd-frame bd-rd-frame-20 fh quesps of-y-scl'>

        <form action="" onSubmit={handleSubmit}>
          
          <h1 className='mb-30' style={{fontSize:'40px'}}>How's Your Experience?</h1>
          
          {/* Type 1 */}
          {/* <Feedback_1 data={rating_text}/> */}

          {/* Type 2 */}
          {/* <Feedback_2 /> */}

          {/* <div className='df fw jc-fe'>
            <button className='sm-btn df aln-tm-ct jc-sb'>
              Submit<FaTelegramPlane className='mg-l-10'/>
            </button>
          </div> */}
        </form>

      </div>

      {/* Wizard */}
      <Wizard data={rating_text}/>
    </div>
    
    
  )
}

export default App