"use client";

import { useState, useEffect } from "react";

export default function PromoVideo() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/promo-url")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => setVideoUrl(data.url))
      .catch(() => setError(true));
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 pb-12">
      {/* Typography */}
      <div className="text-center bg-red-100 px-6 py-2 rounded-xl mb-10">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-700 tracking-tight">
          Watch a 1.32 min video to understand SuperMock briefly
        </h1>
      </div>

      {/* Dynamic Native HTML5 Video Player */}
      {error ? (
        <p className="text-slate-500 text-sm">Unable to load video.</p>
      ) : !videoUrl ? (
        <div className="flex items-center justify-center h-64 w-full max-w-3xl rounded-lg bg-slate-100">
          <span className="text-slate-400 text-sm">Loading video...</span>
        </div>
      ) : (
        <video
          key={videoUrl}
          src={videoUrl}
          disablePictureInPicture={false}
          className="rounded-lg max-h-[75vh] object-contain"
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
        />
      )}
    </section>
  );
}
