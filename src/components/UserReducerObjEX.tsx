import React, { useReducer } from "react";

const initialState = {
  firstValue: 0,
};

const reduser = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { firstValue: state.firstValue + 1 };
    case "decrement":
      return { firstValue: state.firstValue - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UserReducerObjEX() {
  const [count, dispatch] = useReducer(reduser, initialState);

  return (
    <div>
      <div>Count-{count.firstValue}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default UserReducerObjEX;
