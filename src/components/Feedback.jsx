import Rating from './Rating'
import OpenQuestion from './OpenQuestion'
import Practicality from './Practicality'
import Reccommendation from './Reccommendation'


export function Feedback({ id, data }){

  

  const Feedback_id = () => {
    switch (id) {
      case 'openQues':
        return <OpenQuestion />
      case 'rating':
        return <Rating listings={data}/>
      case 'practicality':
        return <Practicality listings={data}/>
      case 'reccomendation':
        return <Reccommendation listings={data}/>
    }
  }

  return (
    <div style={{marginBottom:'60px'}}>
      {Feedback_id()}
    </div>
  )
}

export default Feedback