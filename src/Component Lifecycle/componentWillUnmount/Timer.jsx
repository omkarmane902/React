import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped (Component Unmounted)");
    };
  }, []);

  return <h2>Timer is running</h2>;
}

export default Timer;
