import React, { useEffect, useState } from "react";

const targetUnixTime = 1774116000;

const Countdown = () => {
  const [countdown, setCountdown] = useState(-1);

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = targetUnixTime - Math.floor(Date.now() / 1000);
      setCountdown(remaining > 0 ? remaining : 0);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      const checkAndReload = async () => {
        try {
          const response = await fetch("/api/health-check", {
            method: "HEAD",
            cache: "no-cache",
          });

          if (response.ok) {
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          } else {
            // Main site not responding, retry every 30 seconds
            console.error("Main site not ready yet, will retry...");
            setTimeout(checkAndReload, 30000);
          }
        } catch (error) {
          console.error("Main site not ready yet, will retry...", error);
          setTimeout(checkAndReload, 30000);
        }
      };

      checkAndReload();
    }
  }, [countdown]);

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
    <div className="bg-gradient-to-br rounded-2xl w-full">
      <div className="relative z-10 flex flex-col items-center space-y-4 text-center text-4xl font-bold">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-w-full md:min-w-[32rem] w-fit px-2 mx-auto">
          {countdown > 0 ? (
            <>
              {[
                { value: days, label: "Dienos" },
                { value: hours, label: "Valandos" },
                { value: minutes, label: "Minutės" },
                { value: seconds, label: "Sekundės" },
              ].map((unit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-xl shadow-inner min-w-0"
                >
                  <span className="text-6xl">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-sm tracking-wider uppercase">
                    {unit.label}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <div className="col-span-2 md:col-span-4 flex flex-col items-center justify-center p-4 min-w-full md:min-w-[32rem] w-fit">
              <div className="text-3xl whitespace-nowrap">
                Renginys prasidėjo!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
