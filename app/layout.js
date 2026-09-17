import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "NECTA A-Level Papers | Past Exam Archive",
  description:
    "Browse and download past NECTA Advanced Level exam papers for Economics, Computer Science and Advanced Mathematics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <footer className="site-footer">
          <div className="wrap">
            <p className="site-footer-copy">
              © 2026{" "}
              <a
                href="https://visualixe-foundation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visualixe Foundation
              </a>
              . All rights reserved.
            </p>
            <p className="site-footer-tagline">Built with purpose ✊</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
