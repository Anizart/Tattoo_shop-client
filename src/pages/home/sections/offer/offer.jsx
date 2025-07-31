import React from "react"
import bg from "@assets/bg.jpg"
import "./offer.css"

const Offer = () => {
  return (
    <section className="section offer" id="offer">
      <div className="offer__wrapper-img">
        <img src={bg} alt="background img" className="offer__img" />
      </div>
      <div className="container">
        <div className="offer__wrapper">
          <h1 className="offer__text-h1">Лучшие товары в мире татуировок</h1>
          <h2 className="offer__text-h2">
            Оборудование и расходники для самых ярких и качественных работ
          </h2>
          <button className="btn offer__btn">Смотреть каталог</button>
        </div>
      </div>
    </section>
  )
}

export default Offer
