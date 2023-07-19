import { useState } from "react";

const Carousel = ({ items }: {
  items: any[]
}) => {
  const [itemsCopy, setItemsCopy] = useState([...items]);
  console.log(itemsCopy)
  const handlePrevClick = () => {
    setItemsCopy(itemsCopy.map((item, index) => {
      if (index === 0) {
        return itemsCopy[itemsCopy.length - 1];
      }
      return itemsCopy[index - 1];
    }));
  };

  const handleNextClick = () => {
    setItemsCopy(itemsCopy.map((item, index) => {
      if (index === itemsCopy.length - 1) {
        return itemsCopy[0];
      }
      return itemsCopy[index + 1];
    }));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-all">
          {itemsCopy.map((item, index) => (
            <div
              key={index}
              className={`w-full px-4 ${index === 2 ? '' : 'blur'}`}
            >
              { index === 2 && <button
          className=""
          onClick={handlePrevClick}
        >Prev</button> }
          <div>
            <img src={item.img} alt="#" />
            {item.text}
          </div>
              { index === 2 && <button
          className=""
          onClick={handleNextClick}
        >
          Next
        </button> }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;