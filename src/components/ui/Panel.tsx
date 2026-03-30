import React from "react";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Panel = ({ children, className = "", ...props }: PanelProps) => {
  return (
    <div
      className={`border border-gray-200 bg-white/60 shadow-lg dark:border-gray-700 dark:bg-black/60 dark:shadow-black/30 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Panel;