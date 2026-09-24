"use client";

import { useState } from "react";

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined" ? window.location.href : "";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(`${title}\n${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="share-actions">
      <button type="button" className="btn" onClick={copyLink}>
        {copied ? "Link copied" : "Copy link"}
      </button>
      <button type="button" className="btn" onClick={shareWhatsApp}>
        Share on WhatsApp
      </button>
    </div>
  );
}
