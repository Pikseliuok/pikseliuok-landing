import React, { useEffect, useState } from "react";

const targetUnixTime = 1774116000;

const Countdown = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = targetUnixTime - Math.floor(Date.now() / 1000);
      setCountdown(remaining > 0 ? remaining : 0);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  interface TimeParts {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const getTimeParts = (totalSeconds: number): TimeParts => {
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeParts(countdown);

  return (
    <div className="bg-gradient-to-br rounded-2xl w-auto">
      <div className="relative z-10 flex flex-col items-center space-y-4 text-center text-4xl font-bold">
        {countdown > 0 ? (
          <div className="flex flex-wrap justify-center overflow-x-auto px-2">
            {[
              { value: days, label: "Dienos" },
              { value: hours, label: "Valandos" },
              { value: minutes, label: "Minutės" },
              { value: seconds, label: "Sekundės" },
            ].map((unit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl shadow-inner m-2"
              >
                <span className="text-6xl">
                  {unit.value.toString().padStart(2, "0")}
                </span>
                <span className="mt-2 text-sm tracking-wider uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-3xl">Renginys prasidėjo!</div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
