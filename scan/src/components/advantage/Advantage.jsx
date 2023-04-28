import React from "react";
import "./Advantage.scss";

const Advantage = (props) => {
  const { icon, text } = props
  return (
    <div className="block">
      <img className="icon" src={icon}/>
      <p className="text">{text}</p>
    </div>
  )
}

export default Advantage;