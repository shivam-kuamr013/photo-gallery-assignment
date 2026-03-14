export default function Footer() {
  return (
    <footer style={{
      position: "relative",
      zIndex: 1,
      borderTop: "1px solid var(--border)",
      background: "rgba(8,8,16,0.9)",
      backdropFilter: "blur(20px)",
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}>

        {/* Logo mark */}
        <div style={{
          width: "36px", height: "36px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #e879f9, #818cf8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px",
        }}>✦</div>

        {/* Made by */}
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "13px",
          color: "var(--muted)",
          letterSpacing: "0.05em",
        }}>
          Designed & built by{" "}
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            background: "linear-gradient(90deg, #e879f9, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Shivam
          </span>
        </p>

        {/* Divider line */}
        <div style={{
          width: "40px", height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent2), transparent)",
        }} />

        {/* Copyright */}
        <p style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "'Outfit', sans-serif",
        }}>
          © {new Date().getFullYear()} CelebGallery · All rights reserved
        </p>

      </div>
    </footer>
  );
}
