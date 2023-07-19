import { useState } from "react";

const Carousel = ({ items }: { items: any[] }) => {
  const [itemsCopy, setItemsCopy] = useState([...items]);

  const handlePrevClick = () => {
    setItemsCopy(
      itemsCopy.map((item, index) => {
        if (index === 0) {
          return itemsCopy[itemsCopy.length - 1];
        }
        return itemsCopy[index - 1];
      })
    );
  };

  const handleNextClick = () => {
    setItemsCopy(
      itemsCopy.map((item, index) => {
        if (index === itemsCopy.length - 1) {
          return itemsCopy[0];
        }
        return itemsCopy[index + 1];
      })
    );
  };

  const getImgStyles = (index: number) => {
    if (index === 2) return "w-[300px] mx-10"
    if (index === 1 || index === 3) return "w-[200px] mx-10"
    if (index === 0 || index === 4) return "w-[100px] mx-10"
  }

  const getBlockStyles = (index: number) => {
    if (index === 2) return ""
    if (index === 1 || index === 3) return "blur-sm"
    if (index === 0 || index === 4) return "blur"
  }

  const getTextStyled = (index: number) => {
    if (index === 2) return "block text-2xl not-italic text-center pt-2 font-sans font-bold"
    return "hidden";
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-all mt-10 items-center">
          {itemsCopy.map((item, index) => (
            <div
              key={index}
              className={`w-full px-4 flex ${getBlockStyles(index)}`}
            >
              {index === 2 && (
                <button className="" onClick={handlePrevClick}>
                  Prev
                </button>
              )}
              <div className={getImgStyles(index)}>
                <img src={item.img} alt="#" />
                <span className={getTextStyled(index)}>{item.text}</span>
              </div>
              {index === 2 && (
                <button className="" onClick={handleNextClick}>
                  Next
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
