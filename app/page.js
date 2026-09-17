import Link from "next/link";
import Seal from "../components/Seal";
import { subjects } from "../lib/subjects";

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
            {subjects.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="ledger-row"
              >
                <span className="ledger-num">{s.entry}</span>
                <span>
                  <p className="ledger-name">{s.name}</p>
                  <p className="ledger-note">{s.note}</p>
                </span>
                <span className="ledger-count">
                  {s.years.length} years available
                </span>
              </Link>
            ))}
          </div>
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
