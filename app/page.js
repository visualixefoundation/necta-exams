import Seal from "../components/Seal";
import HomeSearch from "../components/HomeSearch";
import { categories, subjects, paperCount } from "../lib/subjects";

export default function HomePage() {
  const totalPapers = subjects.length;
  const totalYears = paperCount();

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
                Past NECTA A-Level papers for revision — view online or download.
              </p>
              <p className="masthead-stats">
                <span>{categories.length} subjects</span>
                <span className="stat-dot" />
                <span>{totalPapers} papers</span>
                <span className="stat-dot" />
                <span>{totalYears} years</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="wrap">
        <HomeSearch categories={categories} subjects={subjects} />
      </main>
    </>
  );
}
