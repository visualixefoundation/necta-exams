import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject } from "../../../../lib/subjects";
import PdfViewer from "./PdfViewer";
import ShareButtons from "../../../../components/ShareButtons";

export function generateStaticParams() {
  return [];
}

export function generateMetadata({ params }) {
  const subject = getSubject(params.subject);
  if (!subject) return {};
  const title = `${subject.name} ${params.year} | NECTA A-Level Papers`;
  const description = `View and download the ${params.year} NECTA ${subject.name} examination paper.`;
  const url = `https://necta-exams.vercel.app/view/${params.subject}/${params.year}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "NECTA A-Level Papers",
      type: "website",
      images: [
        {
          url: "https://necta-exams.vercel.app/og.png",
          width: 1200,
          height: 630,
          alt: "NECTA A-Level Papers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://necta-exams.vercel.app/og.png"],
    },
  };
}

export default function ViewPaperPage({ params }) {
  const subject = getSubject(params.subject);
  if (!subject) notFound();

  const year = Number(params.year);
  if (!subject.years.includes(year)) notFound();

  const pdfUrl = `/exams/${subject.slug}/${year}.pdf`;
  const shareTitle = `${subject.name} ${year} — NECTA A-Level Papers`;

  return (
    <>
      <header className="band band-compact">
        <div className="wrap">
          <Link href={`/${subject.slug}`} className="crumb">
            ← {subject.name}
          </Link>
          <h1
            className="subject-title"
            style={{ fontSize: "1.75rem", marginTop: "0.5rem" }}
          >
            {subject.name} — {year}
          </h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              {subject.paper}
            </span>
          </div>
        </div>
      </header>

      <main className="wrap viewer-main">
        <div className="viewer-toolbar">
          <a className="btn btn-stamp" href={pdfUrl} download>
            Download PDF
          </a>
          <a
            className="btn"
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in new tab
          </a>
          <ShareButtons title={shareTitle} />
        </div>

        <PdfViewer src={pdfUrl} title={`${subject.name} ${year}`} />
      </main>
    </>
  );
}
