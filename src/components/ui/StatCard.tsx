import React from "react";
import Panel from "@/components/ui/Panel";

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <Panel className="rounded-lg p-4 backdrop-blur-lg">
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="text-xl">{value}</p>
    </Panel>
  );
};

export default StatCard;