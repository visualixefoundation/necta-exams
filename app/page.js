import Link from "next/link";
import Seal from "../components/Seal";

export default function HomePage() {
  return (
    <>
      <header className="band">
        <div className="wrap">
          <p className="band-kicker">Visualixe Foundation · Exam Archive</p>
          <div className="masthead">
            <Seal />
            <div>
              <h1>
                <span className="title-necta">NECTA</span>
                <span className="title-main">A-Level Papers</span>
              </h1>
              <p className="masthead-lead">
                Past papers and pre-mock exams for revision. View online or
                download.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="register">
          <div className="ledger">
            <Link href="/pre-mock" className="ledger-row">
              <span className="ledger-num">01</span>
              <span>
                <p className="ledger-name">Pre Mock</p>
              </span>
              <span className="ledger-count">Regional pre-mocks</span>
            </Link>
            <Link href="/acsee" className="ledger-row">
              <span className="ledger-num">02</span>
              <span>
                <p className="ledger-name">ACSEE</p>
              </span>
              <span className="ledger-count">Past NECTA papers</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
