import { useState } from "react";

export default function PhotoCard({ photo, isFav, onToggleFav, isTall, isWide }) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fade-up"
      style={{
        gridRow:    isTall ? "span 2" : "span 1",
        gridColumn: isWide ? "span 2" : "span 1",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        border: hovered ? "1px solid var(--border-h)" : "1px solid var(--border)",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.25s, box-shadow 0.35s",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,121,249,0.15)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="skeleton" style={{ position: "absolute", inset: 0 }} />
      )}

      {/* Image */}
      <img
        src={photo.download_url}
        alt={photo.author}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "transform 0.5s ease, opacity 0.4s",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,8,16,0.92) 0%, rgba(8,8,16,0.1) 55%, transparent 100%)",
        transition: "opacity 0.3s",
        opacity: hovered ? 1 : 0.7,
      }} />

      {/* Top-left: photo ID */}
      <div style={{
        position: "absolute", top: "12px", left: "12px",
        background: "rgba(8,8,16,0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "100px",
        padding: "3px 10px",
        fontSize: "10px",
        color: "var(--muted)",
        letterSpacing: "0.08em",
        fontFamily: "'Outfit', monospace",
      }}>
        #{photo.id}
      </div>

      {/* Top-right: fav button */}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleFav(); }}
        title={isFav ? "Remove from saved" : "Save"}
        style={{
          position: "absolute", top: "12px", right: "12px",
          width: "34px", height: "34px",
          borderRadius: "50%",
          background: isFav ? "rgba(232,121,249,0.2)" : "rgba(8,8,16,0.6)",
          backdropFilter: "blur(10px)",
          border: isFav ? "1px solid rgba(232,121,249,0.5)" : "1px solid rgba(255,255,255,0.1)",
          color: isFav ? "var(--accent)" : "var(--muted)",
          fontSize: "15px",
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
          transform: isFav ? "scale(1.1)" : "scale(1)",
          boxShadow: isFav ? "0 0 20px rgba(232,121,249,0.35)" : "none",
        }}
      >
        {isFav ? "♥" : "♡"}
      </button>

      {/* Bottom: author info */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "14px 16px",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px",
      }}>
        <div style={{ minWidth: 0 }}>
          <p style={{
            fontSize: "10px", color: "var(--muted)",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "2px",
          }}>
            Photographer
          </p>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "13px", fontWeight: 700,
            color: "var(--text)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {photo.author}
          </p>
        </div>

        {/* View link */}
        <a
          href={photo.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          title="View on Picsum"
          style={{
            flexShrink: 0,
            width: "30px", height: "30px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--muted)", fontSize: "14px",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            e.currentTarget.style.color = "var(--muted)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          ↗
        </a>
      </div>
    </div>
  );
}