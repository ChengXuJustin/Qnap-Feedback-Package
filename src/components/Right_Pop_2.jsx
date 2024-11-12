import { useState } from 'react';
import pract_text from '../data/practicality.json'
import Feedback from './Feedback'
import { FaTelegramPlane, FaWpforms } from "react-icons/fa";
import Appreciation from './Appreciation';


const Right_Pop_2 = ({ data = [] }) => {

  const [popActive, setPopActive] = useState(true)
  const [popAppr, setPopAppr] = useState(true)

  const closePop = (popActive) => {
    setPopActive(!popActive)
  }

  const openAppr = (popAppr) => {
    setPopAppr(!popAppr)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (

    <div>
      <div className={`frameR pd-frame bd-rd-frame-20 fh quesps of-y-scl ${(popActive && popAppr) ? '' : 'wp-r'}`}>
  
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
  
  
          <div className='df jc-fe'>
            <button 
              className='sm-btn df aln-tm-ct jc-ct mg-r-30'
              onClick={() => {openAppr(popAppr)}}
            >
              Submit<FaTelegramPlane className='mg-l-10'/>
            </button>

            <button 
              className={`sm-btnCancel df aln-tm-ct jc-ct`}
              onClick={() => {closePop(popActive)}} 
            >
              Cancel
            </button>
          </div>

          
        </form>
            
  
      </div>
      <div className={`trans-3 ${popAppr ? 'dn' : 'df'}`}>
        <Appreciation />
      </div>
    </div>

        


    
  )
}

export default Right_Pop_2
