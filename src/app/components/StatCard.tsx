import React from "react";

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="backdrop-blur-lg bg-white/60 dark:bg-black/60 dark:shadow-black/30 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-4">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-xl">{value}</p>
    </div>
  );
};

export default StatCard;
