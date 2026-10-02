import Link from "next/link";
import { notFound } from "next/navigation";
import {
  preMockRegions,
  preMockSubjects,
  getPreMockRegion,
  getPreMockSubject,
  preMockPdfPath,
} from "../../../../lib/premock";

export function generateStaticParams() {
  const params = [];
  for (const region of preMockRegions) {
    for (const subject of preMockSubjects) {
      params.push({ region: region.id, subject: subject.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }) {
  const region = getPreMockRegion(params.region);
  const subject = getPreMockSubject(params.subject);
  if (!region || !subject) return {};
  return {
    title: `${subject.name} · ${region.name} ${region.year} Pre Mock | NECTA A-Level Papers`,
    description: `View and download ${region.name} ${region.year} pre-mock ${subject.name} paper and marking scheme.`,
  };
}

export default function PreMockSubjectPage({ params }) {
  const region = getPreMockRegion(params.region);
  const subject = getPreMockSubject(params.subject);
  if (!region || !subject) notFound();

  const paperUrl = preMockPdfPath(region.id, region.year, subject.slug, "paper");
  const msUrl = preMockPdfPath(region.id, region.year, subject.slug, "ms");
  const viewPaper = `/view/pre-mock/${region.id}/${region.year}/${subject.slug}/paper`;
  const viewMs = `/view/pre-mock/${region.id}/${region.year}/${subject.slug}/ms`;

  return (
    <>
      <header className="band">
        <div className="wrap">
          <Link href={`/pre-mock/${region.id}`} className="crumb">
            ← {region.name}
          </Link>
          <p className="subject-kicker">
            {region.name} · Pre Mock {region.year}
          </p>
          <h1 className="subject-title">{subject.name}</h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              {subject.paper}
            </span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="years">
          <div className="year-row">
            <div>
              <p className="year-label">Question paper</p>
              <p className="year-sub">
                {subject.name} — {region.year} pre-mock
              </p>
            </div>
            <div className="actions">
              <Link className="btn" href={viewPaper}>
                View paper
              </Link>
              <a className="btn btn-stamp" href={paperUrl} download>
                Download
              </a>
            </div>
          </div>

          <div className="year-row">
            <div>
              <p className="year-label">Marking scheme</p>
              <p className="year-sub">
                {subject.name} — {region.year} answers
              </p>
            </div>
            <div className="actions">
              <Link className="btn" href={viewMs}>
                View scheme
              </Link>
              <a className="btn btn-stamp" href={msUrl} download>
                Download
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
