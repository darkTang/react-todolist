import React, { memo, useCallback, useMemo, useState } from "react";

const Header = memo(function Header() {
  console.log(1);
  return <div>hello Header</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [msg] = useState("hello react");
  // const list = [msg.toLowerCase(), msg.toUpperCase()];
  const list = useMemo(() => [msg.toLowerCase(), msg.toUpperCase()], [msg]); // 响应式变量包括 props、state 和所有你直接在组件中定义的变量和函数

  // let fn = () => {
  //   console.log(msg);
  // };

  // const fn = useMemo(() => () => {
  //   console.log(msg);
  // }, [msg])

  const fn = useCallback(() => {
    console.log(msg);
  }, [msg]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Hello App
      <Header list={list} fn={fn} />
      <h2>{count}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

/**
 * 1. memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。
 * 2. 第二个参数一般不需要指定
 */

/**
 * 1. useMemo 每次重新渲染的时候能够缓存计算的结果。
 */

/**
 * 2. useCallback 相当于useMemo的特例
 */
