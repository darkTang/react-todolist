import React from "react";

export default function App() {
  fetch("/api/queryUserInfo")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
  return <div>App</div>;
}
