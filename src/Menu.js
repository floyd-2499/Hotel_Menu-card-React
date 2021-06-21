import React from "react";
import "./css/menu.css";

const Menu = ({ items }) => {
  return (
    <div className="containerBox">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div className="containerItem" key={id}>
            <article key={id}>
              <div className="sec1" key={id}>
                <img src={img} alt={title} />
              </div>

              <div className="sec2">
                <h2>{title}</h2>
                <h4 className="price">Rs.{price}</h4>
                <div className="sec2a">
                  <span>{desc}</span>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
