import React from "react";
import "./Rate.scss";

const Rate = (props) => {
  const { name, appointment, newPrice, oldPrice, pricePlan, includes, color, icon, fontColor } = props;
  return (
    <div className="rate" style={{border: "2px solid color"}}>
      <div className='head' style={{background: `${color}`, color: `${fontColor}`}}>
        <h3 className="title">{name}</h3>
        <p className="appointment">{appointment}</p>
        <img src={require(`../../assets/${icon}`)} className="icon" />
      </div>
      <div className="main">
        <div className="price">
          <span className="newprice">{newPrice}</span>
          <span className="oldprice">{oldPrice}</span>
          <div className="plan">{pricePlan}</div>
        </div>
        <div className="list-container">
          <span className="list-name">В тариф входит:</span>
          <ul className="list">
            {includes.map(item => {
              return (<li className="item" key={item}>{item}</li>)
            })}
          </ul>
        </div>
        <button className="button">Подробнее</button>
      </div>
      
    </div>
  )
}

export default Rate;