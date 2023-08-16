import React from "react";
import { nanoid } from "nanoid";
import "./index.scss";

export default function Header({ addToList }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const item = {
        id: nanoid(),
        name: e.target.value.trim(),
        done: false,
      };
      addToList(item);
      e.target.value = "";
    }
  };

  return (
    <div className="header">
      <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
