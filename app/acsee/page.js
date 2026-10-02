import Link from "next/link";
import { categories, getSubjectsByCategory } from "../../lib/subjects";

export const metadata = {
  title: "ACSEE Past Papers | NECTA A-Level Papers",
  description:
    "Browse past NECTA ACSEE A-Level exam papers for Economics, Computer Science and Advanced Mathematics.",
};

export default function AcseePage() {
  return (
    <>
      <header className="band">
        <div className="wrap">
          <Link href="/" className="crumb">
            ← Home
          </Link>
          <h1 className="subject-title">ACSEE</h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              Past NECTA A-Level papers
            </span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="register">
          <div className="ledger">
            {categories.map((cat, i) => {
              const items = getSubjectsByCategory(cat.id);
              const totalYears = items.reduce(
                (sum, s) => sum + s.years.length,
                0
              );
              const entry = String(i + 1).padStart(2, "0");
              return (
                <Link
                  key={cat.id}
                  href={`/${cat.id}`}
                  className="ledger-row"
                >
                  <span className="ledger-num">{entry}</span>
                  <span>
                    <p className="ledger-name">{cat.name}</p>
                  </span>
                  <span className="ledger-count">
                    {items.length} papers · {totalYears} years
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
