import React from "react";

interface DownloadItemProps {
  filename: string;
  path: string;
  downloadName: string;
  size: string;
}

const DownloadItem = ({
  filename,
  path,
  downloadName,
  size,
}: DownloadItemProps) => {
  return (
    <li className="flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition-colors">
      <a
        href={path}
        download={downloadName}
        className="flex justify-between items-center w-full"
      >
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {filename}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{size}</span>
      </a>
    </li>
  );
};

export default DownloadItem;
