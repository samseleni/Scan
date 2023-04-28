import React, { cloneElement } from "react";
import "./Slider.scss";
import { useState, useEffect, Children } from "react";
import ArrowBack from '../../assets/arrow_back.svg';
import ArrowForward from '../../assets/arrow_forward.svg';

const Slider = ({ children }) => {
  const PAGE_WIDTH = 430;
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + PAGE_WIDTH, 0);
    })
  }

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
        return Math.max(currentOffset - PAGE_WIDTH, -PAGE_WIDTH * (pages.length - 3));
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          key: `child-${i}`,
        });
      })
    )
  }, [])

  return (
    <div className="slider">
      <img className="arrow left" src={ArrowBack} onClick={handleLeftArrowClick}/>
      <div className="carousel">
        <div className="all-items-container" 
          style={{transform: `translateX(${offset}px)`}}>
          {pages}
        </div>
      </div>
      <img className="arrow right" src={ArrowForward} onClick={handleRightArrowClick}/>
    </div>
  )
}

export default Slider;