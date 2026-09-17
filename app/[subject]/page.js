import Link from "next/link";
import { notFound } from "next/navigation";
import { subjects, getSubject } from "../../lib/subjects";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export function generateMetadata({ params }) {
  const subject = getSubject(params.subject);
  if (!subject) return {};
  return {
    title: `${subject.name} Past Papers | NECTA A-Level Papers`,
    description: `View and download NECTA ${subject.name} past exam papers, ${subject.years[0]}–${subject.years[subject.years.length - 1]}.`,
  };
}

export default function SubjectPage({ params }) {
  const subject = getSubject(params.subject);
  if (!subject) notFound();

  const years = [...subject.years].sort((a, b) => b - a);

  return (
    <>
      <header className="band">
        <div className="wrap">
          <Link href="/" className="crumb">
            ← All subjects
          </Link>
          <p className="subject-kicker">Entry {subject.entry}</p>
          <h1 className="subject-title">{subject.name}</h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              {subject.paper}
            </span>
            <span>
              <i className="dot" />
              {subject.note}
            </span>
            <span>
              <i className="dot" />
              {years.length} papers on file
            </span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="years">
          {years.map((year) => {
            const viewHref = `/view/${subject.slug}/${year}`;
            const downloadHref = `/exams/${subject.slug}/${year}.pdf`;
            return (
              <div className="year-row" key={year}>
                <div>
                  <p className="year-label">{year}</p>
                  <p className="year-sub">
                    {subject.name} — {year} examination
                  </p>
                </div>
                <div className="actions">
                  <Link className="btn" href={viewHref}>
                    View paper
                  </Link>
                  <a className="btn btn-stamp" href={downloadHref} download>
                    Download
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            Papers are shared for personal revision. If a link is broken or
            you have a paper missing from this archive, let the site owner
            know.
          </p>
        </div>
      </footer>
    </>
  );
}
