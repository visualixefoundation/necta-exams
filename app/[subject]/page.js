import Link from "next/link";
import { notFound } from "next/navigation";
import {
  subjects,
  categories,
  getSubject,
  getCategory,
  getSubjectsByCategory,
} from "../../lib/subjects";

export function generateStaticParams() {
  const subjectParams = subjects.map((s) => ({ subject: s.slug }));
  const categoryParams = categories.map((c) => ({ subject: c.id }));
  return [...categoryParams, ...subjectParams];
}

export function generateMetadata({ params }) {
  const category = getCategory(params.subject);
  if (category) {
    return {
      title: `${category.name} Past Papers | NECTA A-Level Papers`,
      description: `Browse NECTA ${category.name} A-Level past papers (Paper 1 and Paper 2).`,
    };
  }
  const subject = getSubject(params.subject);
  if (!subject) return {};
  return {
    title: `${subject.name} Past Papers | NECTA A-Level Papers`,
    description: `View and download NECTA ${subject.name} past exam papers, ${subject.years[0]}–${subject.years[subject.years.length - 1]}.`,
  };
}

export default function DynamicPage({ params }) {
  const category = getCategory(params.subject);

  // Category page: show Paper 1 and Paper 2
  if (category) {
    const items = getSubjectsByCategory(category.id);
    return (
      <>
        <header className="band">
          <div className="wrap">
            <Link href="/" className="crumb">
              ← All subjects
            </Link>
            <h1 className="subject-title">{category.name}</h1>
            <div className="subject-meta">
              <span>
                <i className="dot" />
                {items.length} papers
              </span>
            </div>
          </div>
        </header>

        <main className="wrap">
          <section className="register">
            <div className="ledger">
              {items.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="ledger-row"
                >
                  <span className="ledger-num">{s.entry}</span>
                  <span>
                    <p className="ledger-name">{s.name}</p>
                  </span>
                  <span className="ledger-count">
                    {s.years.length} years available
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </>
    );
  }

  // Subject page: show years
  const subject = getSubject(params.subject);
  if (!subject) notFound();

  const years = [...subject.years].sort((a, b) => b - a);
  const parent = getCategory(subject.category);

  return (
    <>
      <header className="band">
        <div className="wrap">
          <Link href={parent ? `/${parent.id}` : "/"} className="crumb">
            ← {parent ? parent.name : "All subjects"}
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
    </>
  );
}
