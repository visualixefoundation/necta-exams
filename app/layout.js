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
  metadataBase: new URL("https://necta-exams.vercel.app"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: "NECTA A-Level Papers | Past Exam Archive",
    description:
      "Browse and download past NECTA Advanced Level exam papers for Economics, Computer Science and Advanced Mathematics.",
    url: "https://necta-exams.vercel.app",
    siteName: "NECTA A-Level Papers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NECTA A-Level Papers | Past Exam Archive",
    description:
      "Browse and download past NECTA Advanced Level exam papers for Economics, Computer Science and Advanced Mathematics.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
