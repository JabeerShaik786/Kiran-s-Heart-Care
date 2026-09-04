"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Something went wrong!</h2>
        <p className="text-sm text-slate-500 mb-6">{error?.message || "An unexpected error occurred."}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-[#087CE2] text-white font-semibold text-sm rounded-xl hover:bg-[#1D4ED8] transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
