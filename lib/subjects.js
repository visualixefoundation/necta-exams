// Register of subjects held in this archive.
// `entry` is the ledger number used in the UI — it reflects listing order,
// not an official NECTA subject code.
export const subjects = [
  {
    slug: "economics-1",
    entry: "01",
    name: "Economics 1",
    paper: "Paper 1",
    note: "Micro & macroeconomic theory",
    category: "economics",
    years: [2020, 2021, 2022, 2023, 2024, 2025],
  },
  {
    slug: "economics-2",
    entry: "02",
    name: "Economics 2",
    paper: "Paper 2",
    note: "Applied & quantitative economics",
    category: "economics",
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
  },
  {
    slug: "computer-science-1",
    entry: "03",
    name: "Computer Science 1",
    paper: "Paper 1",
    note: "Theory of computing",
    category: "computer-science",
    years: [2020, 2021, 2022, 2023, 2024, 2025],
  },
  {
    slug: "computer-science-2",
    entry: "04",
    name: "Computer Science 2",
    paper: "Paper 2",
    note: "Practical & applied computing",
    category: "computer-science",
    years: [2020, 2021, 2022, 2023, 2024, 2025],
  },
  {
    slug: "advanced-mathematics-1",
    entry: "05",
    name: "Advanced Mathematics 1",
    paper: "Paper 1",
    note: "Pure mathematics",
    category: "advanced-mathematics",
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
  },
  {
    slug: "advanced-mathematics-2",
    entry: "06",
    name: "Advanced Mathematics 2",
    paper: "Paper 2",
    note: "Applied mathematics & statistics",
    category: "advanced-mathematics",
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
  },
];

export const categories = [
  {
    id: "economics",
    name: "Economics",
  },
  {
    id: "computer-science",
    name: "Computer Science",
  },
  {
    id: "advanced-mathematics",
    name: "Advanced Mathematics",
  },
];

export function getSubject(slug) {
  return subjects.find((s) => s.slug === slug);
}

export function getCategory(id) {
  return categories.find((c) => c.id === id);
}

export function getSubjectsByCategory(categoryId) {
  return subjects.filter((s) => s.category === categoryId);
}

export function paperCount() {
  return subjects.reduce((sum, s) => sum + s.years.length, 0);
}
