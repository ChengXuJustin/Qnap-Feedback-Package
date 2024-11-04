import { FaStar } from 'react-icons/fa';

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='mb-10'>
      <form action="" className=''>
        {[...Array(3)].map((_, index) => {
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
                  transition-all duration-200
                  ${(hover || rating) >= currentRate 
                    ? 'fill-Star' : 'default'}
                  ${hover === currentRate 
                    ? 'scale-110 shadow-md' : ''}
                `}
              />
            </label>
          )
        })}
      </form>
    </div>
  );
};

export default StarRate;