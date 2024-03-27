import Image from "next/image";

const Rating = ({ rating }) => {
    const stars = Array(rating).fill();  // fill() method fills the elements of an array with a static value(in this case, undefined)

    return (
      <>
        {stars.map((_, index) => (
          <Image key={index} src="/svg/star.svg" width={20} alt="" height={20} />
        ))}
      </>
    );
  };
  
  export default Rating;
  