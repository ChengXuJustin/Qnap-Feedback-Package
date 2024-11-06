import { useState } from 'react';
import pract_text from '../data/practicality.json'
import Feedback from './Feedback'
import { FaTelegramPlane, FaWpforms } from "react-icons/fa";


const Right_Pop_2 = ({ data = [] }) => {

  const [popActive, setPopActive] = useState(true)

  const closePop = (popActive) => {
    setPopActive(!popActive)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (

    <div className={`frameR pd-frame bd-rd-frame-20 fh quesps of-y-scl ${popActive ? '' : 'dn'}`}>

        <li 
          className='closeBtn'
          onClick={() => {closePop(popActive)}}  
        >X</li>

      <form action="" onSubmit={handleSubmit}>

        <li className='df aln-tm-ct mb-30'>
          <FaWpforms size={36} className='mg-r-10'/>
          <h1>意見回饋</h1>
        </li>
          
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


        <div className='df fw jc-fe'>
            <button className='sm-btn df aln-tm-ct jc-sb'>
              Submit<FaTelegramPlane className='mg-l-10'/>
            </button>
          </div>
      </form>
          
    </div>

        


    
  )
}

export default Right_Pop_2
