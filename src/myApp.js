import { useState } from "react";
const MyApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <div class="btn from-right">From Right</div>
    </div>
  );
};

export default MyApp;
