import Link from "next/link";
import { notFound } from "next/navigation";
import {
  preMockRegions,
  preMockSubjects,
  getPreMockRegion,
  getPreMockSubject,
  preMockPdfPath,
} from "../../../../../../../lib/premock";
import PdfViewer from "../../../../../[subject]/[year]/PdfViewer";
import ShareButtons from "../../../../../../../components/ShareButtons";

export function generateStaticParams() {
  const params = [];
  for (const region of preMockRegions) {
    for (const subject of preMockSubjects) {
      params.push(
        {
          region: region.id,
          year: String(region.year),
          subject: subject.slug,
          type: "paper",
        },
        {
          region: region.id,
          year: String(region.year),
          subject: subject.slug,
          type: "ms",
        }
      );
    }
  }
  return params;
}

export function generateMetadata({ params }) {
  const region = getPreMockRegion(params.region);
  const subject = getPreMockSubject(params.subject);
  if (!region || !subject) return {};
  const kind = params.type === "ms" ? "Marking scheme" : "Paper";
  const title = `${subject.name} ${kind} · ${region.name} ${params.year} | NECTA A-Level Papers`;
  return {
    title,
    description: `View ${region.name} ${params.year} pre-mock ${subject.name} ${kind.toLowerCase()}.`,
  };
}

export default function PreMockViewerPage({ params }) {
  const region = getPreMockRegion(params.region);
  const subject = getPreMockSubject(params.subject);
  if (!region || !subject) notFound();
  if (params.type !== "paper" && params.type !== "ms") notFound();

  const year = Number(params.year);
  if (year !== region.year) notFound();

  const pdfUrl = preMockPdfPath(region.id, year, subject.slug, params.type);
  const kind = params.type === "ms" ? "Marking scheme" : "Question paper";
  const shareTitle = `${subject.name} ${kind} — ${region.name} ${year} Pre Mock`;

  return (
    <>
      <header className="band band-compact">
        <div className="wrap">
          <Link
            href={`/pre-mock/${region.id}/${subject.slug}`}
            className="crumb"
          >
            ← {subject.name}
          </Link>
          <h1
            className="subject-title"
            style={{ fontSize: "1.75rem", marginTop: "0.5rem" }}
          >
            {subject.name} — {kind}
          </h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              {region.name} Pre Mock {year}
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

        <PdfViewer src={pdfUrl} title={shareTitle} />
      </main>
    </>
  );
}
