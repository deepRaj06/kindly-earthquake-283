import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const CarousalComponent = () => {
  const [items, setItems] = useState(new Array(10).fill(1));
  console.log(items);
  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };
  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {items.map((item,index) => (
          <div
            style={{
              border: "2px solid",
              width: "40px",
              height: "40px",
              background: "lightblue",
              margin: "10px",
            }}
            key={index}
          >
            {item}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarousalComponent;
