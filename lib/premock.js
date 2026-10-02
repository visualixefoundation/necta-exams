// Pre-Mock exam archive data

export const preMockRegions = [
  {
    id: "njombe",
    name: "Njombe Region",
    year: 2026,
  },
];

export const preMockSubjects = [
  {
    slug: "economics-1",
    entry: "01",
    name: "Economics 1",
    paper: "Paper 1",
    category: "economics",
  },
  {
    slug: "economics-2",
    entry: "02",
    name: "Economics 2",
    paper: "Paper 2",
    category: "economics",
  },
  {
    slug: "computer-science-1",
    entry: "03",
    name: "Computer Science 1",
    paper: "Paper 1",
    category: "computer-science",
  },
  {
    slug: "computer-science-2",
    entry: "04",
    name: "Computer Science 2",
    paper: "Paper 2",
    category: "computer-science",
  },
  {
    slug: "advanced-mathematics-1",
    entry: "05",
    name: "Advanced Mathematics 1",
    paper: "Paper 1",
    category: "advanced-mathematics",
  },
  {
    slug: "advanced-mathematics-2",
    entry: "06",
    name: "Advanced Mathematics 2",
    paper: "Paper 2",
    category: "advanced-mathematics",
  },
  {
    slug: "academic-communication",
    entry: "07",
    name: "Academic Communication",
    paper: "Paper",
    category: "academic-communication",
  },
];

export const preMockCategories = [
  { id: "economics", name: "Economics" },
  { id: "computer-science", name: "Computer Science" },
  { id: "advanced-mathematics", name: "Advanced Mathematics" },
  { id: "academic-communication", name: "Academic Communication" },
];

export function getPreMockRegion(id) {
  return preMockRegions.find((r) => r.id === id);
}

export function getPreMockSubject(slug) {
  return preMockSubjects.find((s) => s.slug === slug);
}

export function getPreMockSubjectsByCategory(categoryId) {
  return preMockSubjects.filter((s) => s.category === categoryId);
}

export function preMockPdfPath(regionId, year, subjectSlug, type) {
  // type: "paper" | "ms"
  return `/pre-mock/${regionId}/${year}/${subjectSlug}/${type}.pdf`;
}
