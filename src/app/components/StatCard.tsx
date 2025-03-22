import React from "react";

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-xl">{value}</p>
    </div>
  );
};

export default StatCard;
