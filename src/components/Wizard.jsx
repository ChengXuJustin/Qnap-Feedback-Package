import Feedback from './Feedback'
import { FaTelegramPlane, FaWpforms } from "react-icons/fa";

const Wizard = ({ data = [] }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (
      <div className='fh frameWz pd-frame quesps'>

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
            <button className='df aln-tm-ct jc-sb'>
              Submit<FaTelegramPlane className='mg-l-10'/>
            </button>
          </div>
        </form>

      </div>

  )
}

export default Wizard
