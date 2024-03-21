import { useState } from "react";

export default function useCount(initialValue = 0) {
  const [countPosition, setCountPosition] = useState(initialValue);

  function increment() {
    setCountPosition(countPosition + 1);
  }

  function decrement() {
    setCountPosition(countPosition - 1);
  }

  function reset() {
    setCountPosition(initialValue);
  }

  return { countPosition, increment, decrement, reset };
}
