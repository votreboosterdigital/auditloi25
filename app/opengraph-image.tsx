import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "auditloi25.ca – Audit de conformité Loi 25 pour PME et OBNL québécois";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617", // slate-950
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(56,189,248,0.08)",
            border: "1px solid rgba(56,189,248,0.25)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#38bdf8",
            }}
          />
          <span style={{ color: "#7dd3fc", fontSize: "18px", fontWeight: 600 }}>
            Pour PME et OBNL québécois · Aligné CAI
          </span>
        </div>

        {/* Titre */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "28px",
          }}
        >
          Audit Loi 25{" "}
          <span style={{ color: "#38bdf8" }}>de votre site web</span>
        </div>

        {/* Sous-titre */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            maxWidth: "780px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          Pré-audit gratuit · Rapport instantané · Sans engagement
        </div>

        {/* Domaine */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#38bdf8",
          }}
        >
          auditloi25.ca
        </div>
      </div>
    ),
    size
  );
}
