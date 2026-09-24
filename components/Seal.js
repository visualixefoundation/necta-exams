export default function Seal() {
  return (
    <svg
      className="seal"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="32" stroke="#af8329" strokeWidth="1.4" />
      <circle
        cx="34"
        cy="34"
        r="26"
        stroke="#af8329"
        strokeWidth="1"
        strokeDasharray="1.5 3.4"
      />
      {/* Open book */}
      <path
        d="M34 22 C28 22 22 24 20 26 V44 C22 42 28 40 34 40 C40 40 46 42 48 44 V26 C46 24 40 22 34 22 Z"
        stroke="#f2ede0"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M34 22 V40"
        stroke="#f2ede0"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Pages lines */}
      <path
        d="M24 30 H30 M24 34 H31 M24 38 H30"
        stroke="#f2ede0"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M38 30 H44 M37 34 H44 M38 38 H44"
        stroke="#f2ede0"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
