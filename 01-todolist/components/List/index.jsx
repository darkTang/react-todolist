import React from "react";
import "./index.scss";
import Item from "../Item";

export default function List({ list }) {
  return (
    <ul className="list">
      {list.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
}
