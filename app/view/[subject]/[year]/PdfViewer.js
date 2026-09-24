"use client";

import { useEffect, useState } from "react";

export default function PdfViewer({ src, title }) {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Defer iframe until after first paint so the page feels instant
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="pdf-frame-wrap">
      {(!ready || loading) && !error && (
        <div className="pdf-loading" aria-live="polite">
          <div className="spinner" />
          <p>Loading paper…</p>
          <p className="pdf-loading-hint">
            Large files may take a few seconds on slower connections
          </p>
        </div>
      )}

      {error && (
        <div className="pdf-error">
          <p>Could not load the paper in this view.</p>
          <a
            className="btn btn-stamp"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF directly
          </a>
        </div>
      )}

      {ready && (
        <iframe
          className="pdf-frame"
          src={`${src}#toolbar=1&navpanes=0`}
          title={title}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          style={{ opacity: loading ? 0 : 1 }}
        />
      )}
    </div>
  );
}
