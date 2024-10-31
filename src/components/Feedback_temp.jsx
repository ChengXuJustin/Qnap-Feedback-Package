import Rating from './Rating'
import OpenQuestion from './OpenQuestion'
import Practicality from './Practicality'


const Feedback_temp = ( { id, data } ) => {

  const Feedback_id = () => {
    switch (id) {
      case 'openQues':
        return <OpenQuestion />
      case 'rating':
        return <Rating listings={data}/>
      case 'practicality':
        return <Practicality />
    }
  }

  return (
    <div className='frame pd-frame bd-rd-frame-20 fh quesps'>
      <h1 className='mb-20'>Rate Your Experience with </h1>
      {Feedback_id()}
    </div>
  )
}


export default Feedback_temp
