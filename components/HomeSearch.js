"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function HomeSearch({ categories, subjects }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        type: "categories",
        items: categories.map((cat, i) => {
          const items = subjects.filter((s) => s.category === cat.id);
          const totalYears = items.reduce((sum, s) => sum + s.years.length, 0);
          return {
            ...cat,
            entry: String(i + 1).padStart(2, "0"),
            paperCount: items.length,
            yearCount: totalYears,
            href: `/${cat.id}`,
          };
        }),
      };
    }

    // Match subjects by name, or years that include the query
    const matchedSubjects = subjects.filter((s) => {
      const nameMatch = s.name.toLowerCase().includes(q);
      const yearMatch = s.years.some((y) => String(y).includes(q));
      const catMatch = s.category.replace(/-/g, " ").includes(q);
      return nameMatch || yearMatch || catMatch;
    });

    // Also match categories by name
    const matchedCats = categories.filter((c) =>
      c.name.toLowerCase().includes(q)
    );

    if (matchedSubjects.length === 0 && matchedCats.length === 0) {
      return { type: "empty", items: [] };
    }

    // Prefer showing subject papers when searching
    if (matchedSubjects.length > 0) {
      return {
        type: "subjects",
        items: matchedSubjects.map((s) => ({
          ...s,
          href: `/${s.slug}`,
          label: s.name,
          meta: `${s.years.length} years available`,
        })),
      };
    }

    return {
      type: "categories",
      items: matchedCats.map((cat) => {
        const items = subjects.filter((s) => s.category === cat.id);
        const totalYears = items.reduce((sum, s) => sum + s.years.length, 0);
        const idx = categories.findIndex((c) => c.id === cat.id);
        return {
          ...cat,
          entry: String(idx + 1).padStart(2, "0"),
          paperCount: items.length,
          yearCount: totalYears,
          href: `/${cat.id}`,
        };
      }),
    };
  }, [query, categories, subjects]);

  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Search by subject or year…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search subjects or years"
        />
      </div>

      <section className="register">
        {filtered.type === "empty" ? (
          <p className="search-empty">No papers match “{query.trim()}”.</p>
        ) : (
          <div className="ledger">
            {filtered.items.map((item) =>
              filtered.type === "categories" ? (
                <Link key={item.id} href={item.href} className="ledger-row">
                  <span className="ledger-num">{item.entry}</span>
                  <span>
                    <p className="ledger-name">{item.name}</p>
                  </span>
                  <span className="ledger-count">
                    {item.paperCount} papers · {item.yearCount} years
                  </span>
                </Link>
              ) : (
                <Link key={item.slug} href={item.href} className="ledger-row">
                  <span className="ledger-num">{item.entry}</span>
                  <span>
                    <p className="ledger-name">{item.label}</p>
                  </span>
                  <span className="ledger-count">{item.meta}</span>
                </Link>
              )
            )}
          </div>
        )}
      </section>
    </>
  );
}
