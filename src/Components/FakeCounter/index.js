import { useState, useEffect } from "react";
import joinWithComa from "../../Utils/fucntions/joinWithComa";

export default function FakeCounter({ style, startNumber, label }) {
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
    setInterval(() => setNumber((prev) => prev + 1), 100);
  }, []);

  return (
    <div className={style?.fakeCounterContainer}>
      <h3 className={style?.number}>{joinWithComa(number)}</h3>
      {label}
    </div>
  );
}
