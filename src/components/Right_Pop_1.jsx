import pract_text from '../data/practicality.json'
import Feedback from './Feedback'
import { FaTelegramPlane } from "react-icons/fa";


const Right_Pop_1 = ({ data = [] }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (

    <div className='frameR pd-frame bd-rd-frame-20 fh quesps of-y-scl'>
      <form action="" onSubmit={handleSubmit}>

        <h1 className='mb-30' style={{fontSize:'40px'}}>How's Your Experience?</h1>
          
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

export default Right_Pop_1
