import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ( {listings = []} ) => {

  const starRate = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
      <div className='mb-10 df jc-sb'>
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
                  onChange={() => {setRating(currentRate)}}
                  className="hidden"
                />
                <FaStar
                  size={75}
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
      </div>
    );
  }

  const renderItems = listings.map((item, index) => {

    const renderParagraph = item.description.map((question, paraDex) => {
        return (
          <div key={paraDex}>
            <p className='mg-b-40'>{question}</p>
            <div className='df aln-tm-c'>
              <button className='unUsedBtn mg-r-30'>還沒用過</button>
              <div className='df fd-c '>
                {starRate()}
                <ul className='fw df jc-sb' style={{textAlign:'center'}}>
                  <p style={{width:'80px'}}>不好用</p>
                  <p style={{width:'80px'}}>超級好用</p>
                </ul>
              </div>
            </div>
          </div>
        )
    })

    return (
        <div key={index} className='mb-20'>
            <h3 className='mb-10'>{item.title}</h3>
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