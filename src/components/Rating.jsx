import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ( {listings = []} ) => {

  const starRate = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
      <div className='mb-10'>
        {/* <form action="" className=''> */}
          {[...Array(5)].map((_, index) => {
            const currentRate = index + 1;
            
            return (
              <label
                key={index}
                className="cursor-pointer"
                onMouseEnter={() => setHover(currentRate)}
                onMouseLeave={() => setHover(null)}
              >
                <input
                  type="radio"
                  name="rate"
                  value={currentRate}
                  onChange={() => setRating(currentRate)}
                  className="hidden"
                />
                <FaStar
                  size={40}
                  className={`
                    transition-all duration-200 mg-r-10
                    ${(hover || rating) >= currentRate 
                      ? 'fill-Star' : 'default'}
                    ${hover === currentRate 
                      ? 'scale-110 shadow-md' : ''}
                  `}
                />
              </label>
            )
          })}
        {/* </form> */}
      </div>
    );
  }

  const renderItems = listings.map((item, index) => {

    const renderParagraph = item.description.map((question, paraDex) => {
        return (
          <div key={paraDex}>
            <p className='mb-10'>{question}</p>
            {starRate()}
          </div>
        )
    })

    return (
        <div key={index} className='mb-20'>
            <h2 className='mb-10'>{item.title}</h2>
            {renderParagraph}
        </div>
    )
})

  return (
    <div className='mb-30'>
      {renderItems}
    </div>
  )
}

export default Rating