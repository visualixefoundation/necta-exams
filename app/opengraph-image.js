import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NECTA A-Level Papers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          background: "linear-gradient(180deg, #1f3d30 0%, #12261d 100%)",
          color: "#f2ede0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "2px solid #af8329",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              color: "#af8329",
            }}
          >
            📖
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.18em",
                color: "#af8329",
                marginBottom: 8,
              }}
            >
              NECTA
            </div>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
              A-Level Papers
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "rgba(242,237,224,0.72)",
            maxWidth: 700,
          }}
        >
          Past exam archive for revision — Economics, Computer Science &
          Advanced Mathematics
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 18,
            letterSpacing: "0.06em",
            color: "rgba(242,237,224,0.45)",
            textTransform: "uppercase",
          }}
        >
          Visualixe Foundation · Exam Archive
        </div>
      </div>
    ),
    { ...size }
  );
}
