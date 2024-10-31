import Rating from './Rating'
import OpenQuestion from './OpenQuestion'
import Practicality from './Practicality'


export function Feedback( { id, data } ){

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
    Feedback_id()
  )
}