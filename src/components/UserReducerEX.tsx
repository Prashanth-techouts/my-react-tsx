import React, { useReducer } from "react";

const initialState = 0;

const reduser = (state: any, action: any) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UserReducerEX() {
  const [count, dispatch] = useReducer(reduser, initialState);

  return (
    <div>
      <div>Count-{count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default UserReducerEX;
