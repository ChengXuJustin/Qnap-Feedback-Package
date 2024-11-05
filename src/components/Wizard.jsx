import Feedback from './Feedback'
import { FaTelegramPlane } from "react-icons/fa";

const Wizard = ({ data = [] }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (

    <div className='frame pd-frame bd-rd-frame-20 fh quesps of-y-scl'>
      <form action="" onSubmit={handleSubmit}>

        <h1 className='mb-30' style={{fontSize:'40px'}}>How's Your Experience?</h1>

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

        <div className='df fw jc-fe'>
          <button className='sm-btn df aln-tm-ct jc-sb'>
            Submit<FaTelegramPlane className='mg-l-10'/>
          </button>
        </div>
      </form>
    </div>

  )
}

export default Wizard
