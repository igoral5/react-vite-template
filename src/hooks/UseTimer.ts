import { useEffect, useReducer, useRef } from "react";
import { Timer } from "../Timer";

export function useTimer() {
  const [_, forceUpdate] = useReducer((v) => v + 1, 0);
  const ref = useRef(new Timer());

  useEffect(() => {
    const timer = ref.current;

    timer.onChange(forceUpdate);
    timer.start();
    return () => {
      timer.stop();
    };
  }, []);

  return ref.current.time;
}
