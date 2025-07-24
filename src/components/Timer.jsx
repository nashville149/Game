import { useEffect, useState } from "react";

function Timer({ isPlaying, duration, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    if (!isPlaying) {
      setTimeLeft(duration / 1000);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpire(); // optional callback
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration, onExpire]);

  return <h3>⏳ Time Left: {timeLeft}s</h3>;
}

export default Timer;
