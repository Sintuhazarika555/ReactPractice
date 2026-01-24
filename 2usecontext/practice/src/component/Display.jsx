import { useContext } from "react";
import { CountContext } from "./CountContext";

function Display() {
  // Grab only the count from context
  const { count } = useContext(CountContext);

  return (
    <div style={{ border: '2px solid red', fontSize: '24px', margin: '20px', color: 'blue' }}>
      Current Count: <strong>{count}</strong>
    </div>
  );
}

export default Display;