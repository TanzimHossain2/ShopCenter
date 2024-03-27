const Rating = ({ rating }) => {
    const stars = Array(rating).fill();  // fill() method fills the elements of an array with a static value(in this case, undefined)

    return (
      <>
        {stars.map((_, index) => (
          <img key={index} src="/svg/star.svg" width="20px" alt="" />
        ))}
      </>
    );
  };
  
  export default Rating;
  