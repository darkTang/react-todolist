import React, { useContext } from "react";
import "./index.scss";
import { ListContext } from "../../App";

export default function Item({ id, name, done }) {
  const { handleDelete, changeState } = useContext(ListContext);
  return (
    <div>
      <li>
        <div>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => changeState(id, e.target.checked)}
          />
          <span>{name}</span>
        </div>
        <button onClick={() => handleDelete(id)}>删除</button>
      </li>
    </div>
  );
}
