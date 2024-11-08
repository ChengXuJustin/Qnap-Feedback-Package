import { useState } from 'react';
import Feedback from './Feedback'
import { FaTelegramPlane, FaWpforms } from "react-icons/fa";
import Appreciation from './Appreciation';

const Wizard = ({ data = [] }) => {

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
      <div className={`fh frameWz pd-frame quesps ${(popActive && popAppr) ? '' : 'dn'}`}>

        <li 
          className='closeBtn'
          onClick={() => {closePop(popActive)}}  
        >X</li>

        <form action="" onSubmit={handleSubmit}>

        <li className='df aln-tm-ct mb-30'>
          <FaWpforms size={30} className='mg-r-10'/>
          <h2>意見回饋</h2>
        </li>

          <div>
            <Feedback 
              id="rating"
              data={data}
            />
            <Feedback 
              id="openQues"
              data={data}
            />
          </div>

          <div className='df fh fw jc-fe'>
            <button 
              className='df aln-tm-ct jc-sb'
              onClick={() => {openAppr(popAppr)}}
            >
              Submit<FaTelegramPlane className='mg-l-10'/>
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

export default Wizard
