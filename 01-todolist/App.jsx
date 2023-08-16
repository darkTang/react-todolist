import React, { createContext, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export const ListContext = createContext();

export default function App() {
  const [list, setList] = useState([
    { id: "001", name: "吃饭", done: true },
    { id: "002", name: "睡觉", done: true },
    { id: "003", name: "打代码", done: false },
  ]);

  const addToList = (item) => {
    setList([item, ...list]);
  };

  const handleDelete = (id) => {
    if (window.confirm("确定删除吗")) {
      const newList = list.filter((item) => item.id != id);
      setList(newList);
    }
  };

  const changeState = (id, isChecked) => {
    const findItem = list.find((item) => item.id == id);
    findItem.done = isChecked;
    setList([...list]);
  };

  const handleChange = (isChecked) => {
    const newList = list.map((item) => ({ ...item, done: isChecked }));
    setList(newList);
  };

  const handleAllDone = () => {
    const newList = list.filter((item) => !item.done);
    setList(newList);
  };

  return (
    <div className="container">
      <div>
        <Header addToList={addToList}></Header>
        <ListContext.Provider value={{ handleDelete, changeState }}>
          <List list={list}></List>
        </ListContext.Provider>
      </div>
      <Footer
        list={list}
        handleChange={handleChange}
        handleAllDone={handleAllDone}
      ></Footer>
    </div>
  );
}
