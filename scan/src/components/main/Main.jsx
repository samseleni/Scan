import React from "react";
import "./Main.scss";
import Slider from "../slider/Slider";
import Advantage from "../advantage/Advantage";
import IconClock from "../../assets/icon-clock.svg";
import IconSearch from "../../assets/icon-search.svg";
import IconSecurity from "../../assets/icon-security.svg"
import Rate from "../rate/Rate";
import data from "../../mock.json";

const Main = () => {
  const rates = data.rates;

  return (
    <main className="main container">
      <section className="description">
        <h1 className="title">сервис по поиску публикаций <br/> о компании<br/> по его ИНН</h1>
        <p className="text">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        <button className="btn">Запросить данные</button>
      </section>
      <section className="advantages">
        <h2 className="subtitle">Почему именно мы</h2>
        <Slider>
          <Advantage
            icon={IconClock}
            text="Высокая и оперативная скорость обработки заявки"
          />
          <Advantage 
            icon={IconSearch}
            text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
          />
          <Advantage 
            icon={IconSecurity}
            text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
          />
          <Advantage 
            icon={IconClock}
            text="Высокая и оперативная скорость обработки заявки"
          />
          <Advantage 
            icon={IconSearch}
            text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
          />
          <Advantage 
            icon={IconSecurity}
            text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
          />
        </Slider>
      </section>
      <section className="rates">
        <h2 className="subtitle">Наши тарифы</h2>
        <div className="rates-container">
          {rates.map(rate => {
            const fontColor = rate.color === "black" ? "white" : "inherit";
            return (
            <Rate 
              key={rate.name}
              name={rate.name} 
              appointment={rate.appointment} 
              newPrice={rate.newPrice} 
              oldPrice={rate.oldPrice}
              pricePlan={rate.priceplan} 
              includes={rate.includes}
              color={rate.color}
              icon={rate.icon}
              fontColor={fontColor}
            />)
          })}
        </div>
      </section>
    </main>
  )
}

export default Main;