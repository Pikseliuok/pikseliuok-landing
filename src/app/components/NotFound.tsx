"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Suggestion = { label: string; href: string };

interface NotFoundProps {
  title?: string;
  message?: React.ReactNode;
  resource?: string;
  subject?: string;
  suggestions?: Suggestion[];
  // new props for image
  imageSrc?: string;
  imageAlt?: string;
  note?: React.ReactNode;
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = "Nerasta",
  message = "Puslapis nerastas.",
  subject,
  suggestions = [],
  imageSrc = "/not-found.png",
  imageAlt = "Not found",
  note,
  className = "",
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 ${className}`}
    >
      <div className="bg-white/70 dark:bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Text area */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">
              {title}
              {subject ? <span className="font-mono"> {subject}</span> : null}
            </h1>
            {message && (
              <p className="text-gray-700 dark:text-gray-300 mb-4">{message}</p>
            )}

            <div className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start">
              {suggestions.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="px-4 py-2 rounded-lg bg-white/40 dark:bg-black/40 border hover:opacity-95"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            {note && (
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
                {note}
              </p>
            )}
          </div>

          {/* Image area */}
          <div className="w-full md:w-1/3 flex-shrink-0 md:order-last order-first">
            <div className="w-full h-44 md:h-48 relative rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                unoptimized
                style={{
                  objectFit: "contain",
                  imageRendering: "pixelated",
                  pointerEvents: "none",
                }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
