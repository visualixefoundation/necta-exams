import Link from "next/link";
import { preMockRegions } from "../../lib/premock";

export const metadata = {
  title: "Pre Mock Exams | NECTA A-Level Papers",
  description: "Regional pre-mock A-Level exam papers for revision.",
};

export default function PreMockPage() {
  return (
    <>
      <header className="band">
        <div className="wrap">
          <Link href="/" className="crumb">
            ← Home
          </Link>
          <h1 className="subject-title">Pre Mock</h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              Regional pre-mock examinations
            </span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="register">
          <div className="ledger">
            {preMockRegions.map((region, i) => (
              <Link
                key={region.id}
                href={`/pre-mock/${region.id}`}
                className="ledger-row"
              >
                <span className="ledger-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <p className="ledger-name">{region.name}</p>
                </span>
                <span className="ledger-count">{region.year}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
