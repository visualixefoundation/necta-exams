import Link from "next/link";
import { notFound } from "next/navigation";
import {
  preMockRegions,
  preMockCategories,
  getPreMockRegion,
  getPreMockSubjectsByCategory,
} from "../../../lib/premock";

export function generateStaticParams() {
  return preMockRegions.map((r) => ({ region: r.id }));
}

export function generateMetadata({ params }) {
  const region = getPreMockRegion(params.region);
  if (!region) return {};
  return {
    title: `${region.name} Pre Mock ${region.year} | NECTA A-Level Papers`,
    description: `${region.name} ${region.year} pre-mock A-Level papers and marking schemes.`,
  };
}

export default function PreMockRegionPage({ params }) {
  const region = getPreMockRegion(params.region);
  if (!region) notFound();

  return (
    <>
      <header className="band">
        <div className="wrap">
          <Link href="/pre-mock" className="crumb">
            ← Pre Mock
          </Link>
          <h1 className="subject-title">{region.name}</h1>
          <div className="subject-meta">
            <span>
              <i className="dot" />
              Pre Mock {region.year}
            </span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="register">
          {preMockCategories.map((cat) => {
            const items = getPreMockSubjectsByCategory(cat.id);
            if (items.length === 0) return null;
            return (
              <div className="category-block" key={cat.id}>
                <h2 className="category-title">{cat.name}</h2>
                <div className="ledger">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/pre-mock/${region.id}/${s.slug}`}
                      className="ledger-row"
                    >
                      <span className="ledger-num">{s.entry}</span>
                      <span>
                        <p className="ledger-name">{s.name}</p>
                      </span>
                      <span className="ledger-count">{s.paper}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
