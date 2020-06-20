import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count is: {count}
      </button>
    </div>
  );
};
