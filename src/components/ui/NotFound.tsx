import React from "react";
import Link from "next/link";
import Image from "next/image";

type Suggestion = { label: string; href: string };

interface NotFoundProps {
  title?: string;
  message?: React.ReactNode;
  subject?: string;
  suggestions?: Suggestion[];
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
      <div className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-lg backdrop-blur-lg dark:border-gray-700 dark:bg-black/60">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="w-full text-center md:w-2/3 md:text-left">
            <h1 className="mb-2 text-3xl font-bold">
              {title}
              {subject ? <span className="font-mono"> {subject}</span> : null}
            </h1>
            {message && (
              <p className="mb-4 text-gray-700 dark:text-gray-300">{message}</p>
            )}
            <div className="mb-4 flex flex-wrap justify-center gap-3 md:justify-start">
              {suggestions.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="rounded-lg border bg-white/40 px-4 py-2 hover:opacity-95 dark:bg-black/40"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            {note && (
              <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400 md:text-left">
                {note}
              </p>
            )}
          </div>
          <div className="order-first w-full shrink-0 md:order-last md:w-1/3">
            <div className="relative h-44 w-full overflow-hidden rounded-lg md:h-48">
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
