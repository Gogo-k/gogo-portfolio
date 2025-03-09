//app global-error.tsx

"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    //global error must include html and body tags
    <html>
      <body>
        <h1>Global Error</h1>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
