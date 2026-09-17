import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header className="band">
        <div className="wrap">
          <div className="masthead">
            <div>
              <h1>Not on file</h1>
              <p>That page isn&apos;t in this archive.</p>
            </div>
          </div>
        </div>
      </header>
      <main className="wrap" style={{ padding: "40px 0" }}>
        <Link href="/" className="btn">
          Back to all subjects
        </Link>
      </main>
    </>
  );
}
