import { useContext } from "react";
import { CountContext } from "./CountContext";

function Controls() {
  // Grab the functions from context
  const { increment, reset } = useContext(CountContext);

  return (
    <div>
      <button onClick={increment} style={{ border: '2px solid green', padding: '10px', marginRight: '10px' }}>
        Add +1
      </button>
      <button onClick={reset} style={{ border: '2px solid green', padding: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Controls;