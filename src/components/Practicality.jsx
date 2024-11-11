import { useState } from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown} from 'react-icons/fa';

const Practicality = ( {listings = []} ) => {

  const thumbArray = [
    { icon: FaThumbsDown, value: 1 },
    { icon: FaThumbsUp, value: 2 }
  ];

  const starRate = () => {
    const [rating, setRating] = useState();
    const [hover, setHover] = useState(null);

    return (
      <div className='mb-10 df'>
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
                <div className='df aln-tm-ct pracThumb' style={{marginRight:'90px'}}>
                  <ThumbIcon
                    size={28}
                    className={`
                      transition-all duration-200 mg-r-20
                      ${(hover===1 || rating===1) && value===1
                        ? 'fill-thumbD' : 'thumbDefault'}
                      ${(hover)
                        ? 'scale-110 shadow-md' : ''}
                      ${(hover===2 || rating===2) && value===2
                        ? 'fill-thumbU' : 'thumbDefault'}
                   
                    `}
                  />
                  <h3>{(value===1) ? '不實用' : '很實用'}</h3>
                </div>
              </label>
            )
          })}
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
            <h3 className='mb-20'>{item.title}</h3>
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