import Link from "next/link";
import Seal from "../components/Seal";
import { categories, getSubjectsByCategory } from "../lib/subjects";

export default function HomePage() {
  return (
    <>
      <header className="band">
        <div className="wrap">
          <div className="masthead">
            <Seal />
            <div>
              <h1>NECTA A-Level Papers</h1>
              <p>
                A running archive of past Advanced Level exam papers, kept
                for Form V and VI candidates to revise from — open any paper
                to read it, or download it to keep offline.
              </p>
            </div>
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
