import React from "react";
import "./index.scss";

export default function Footer({ list, handleChange, handleAllDone }) {
  let doneCount = list.reduce((prev, cur) => {
    if (cur.done) {
      prev++;
    }
    return prev;
  }, 0);
  let total = list.length;
  return (
    <div className="footer">
      <div>
        <input
          type="checkbox"
          checked={total !== 0 && doneCount === total}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <span>
          已完成{doneCount} / 全部{total}
        </span>
      </div>
      <button onClick={handleAllDone}>清理已完成任务</button>
    </div>
  );
}
