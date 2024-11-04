import { useState } from 'react';
import { FaStar, FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa';

const Practicality = ( {listings = []} ) => {

  const thumbArray = [
    { icon: FaRegThumbsDown, value: 1 },
    { icon: FaRegThumbsUp, value: 2 }
  ];

  const starRate = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
      <div className='mb-10'>
        <form action="" className=''>
          {thumbArray.map(({icon: ThumbIcon, value}, index) => {
            return (
              <label
                key={index}
                className="cursor-pointer"
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(null)}
              >
                <input
                  type="radio"
                  name="rate"
                  value={value}
                  onChange={() => setRating(value)}
                  className="hidden"
                />
                <ThumbIcon
                  size={40}
                  className={`
                    transition-all duration-200 mg-r-20
                    ${(hover===value && value===1 || rating===value)
                      ? 'fill-thumbD' : 'default'}
                    ${(hover === value || rating===value)
                      ? 'scale-110 shadow-md' : ''}
                    ${(hover===value && value===2 || rating===value)
                      ? 'fill-thumbU' : 'default'}
                  `}
                />
              </label>
            )
          })}
        </form>
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
            <h2 className='mb-10'>{index+1}. {item.title}</h2>
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

export default Practicality