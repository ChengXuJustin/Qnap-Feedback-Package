import { useState } from 'react'
import './App.css'
import Citation from './components/Citation'
import Right_Pop_2 from './components/Right_Pop_2'
import Wizard from './components/Wizard'
import rating_text from './data/rating.json'
import wizard_text from './data/wizard.json'
import Right_Pop_1 from './components/Right_Pop_1'
import Appreciation from './components/Appreciation'


const App = () => {

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (
    <div>

      {/* ==== Right Popup Version1 ==== */}
      <Right_Pop_1 data={rating_text} />

      {/* ==== Right Popup Version2 ==== */}
      {/* <Right_Pop_2 data={rating_text} /> */}

      {/* ==== Wizard ==== */}
      {/* <div
        className='wizardFrame'
        style={{
          backgroundImage:'url(https://live.staticflickr.com/65535/54118311701_628c95ca1b_c.jpg)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain'
        }}>
        <Wizard data={wizard_text}/>
      </div> */}

    </div>
    
    
  )
}

export default App