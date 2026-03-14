import { useReducer, useState, useMemo, useCallback, useEffect } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import { favouritesReducer } from "./reducers/favouritesReducer";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const [showFavsOnly, setShowFavsOnly] = useState(false);

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFav = useCallback((photo) => {
    dispatch({ type: "TOGGLE_FAV", payload: photo });
  }, []);

  const filteredPhotos = useMemo(() => {
    let list = showFavsOnly
      ? photos.filter((p) => favourites.some((f) => f.id === p.id))
      : photos;
    return list.filter((p) =>
      p.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search, favourites, showFavsOnly]);

  if (loading)
    return (
      <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%",
          border: "2px solid rgba(232,121,249,0.15)",
          borderTopColor: "var(--accent)",
          animation: "spin 0.8s linear infinite"
        }} />
        <p style={{ color: "var(--muted)", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Loading Gallery
        </p>
      </div>
    );

  if (error)
    return (
      <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#f87171" }}>
        {error}
      </div>
    );

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--bg)", zIndex: 1 }}>

      {/* ── Navbar ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(8,8,16,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", userSelect: "none" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "10px",
              background: "linear-gradient(135deg, #e879f9, #818cf8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "15px",
            }}>✦</div>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "20px", fontWeight: 800,
              letterSpacing: "-0.5px",
            }}>
              <span className="gradient-text">Celeb</span>
              <span style={{ color: "var(--text)" }}>Gallery</span>
            </span>
          </div>

          {/* Search + Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, maxWidth: "480px" }}>
            <div style={{
              flex: 1, display: "flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              padding: "8px 16px",
            }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="var(--muted)" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search photographer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  background: "transparent", border: "none", outline: "none",
                  color: "var(--text)", fontSize: "13px",
                  fontFamily: "'Outfit', sans-serif", width: "100%",
                }}
              />
            </div>

            <button
              onClick={() => setShowFavsOnly(v => !v)}
              style={{
                background: showFavsOnly ? "rgba(232,121,249,0.15)" : "rgba(255,255,255,0.04)",
                border: showFavsOnly ? "1px solid rgba(232,121,249,0.4)" : "1px solid var(--border)",
                borderRadius: "100px",
                padding: "8px 16px",
                color: showFavsOnly ? "var(--accent)" : "var(--muted)",
                fontSize: "13px",
                fontFamily: "'Outfit', sans-serif",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              {showFavsOnly ? "♥" : "♡"} {favourites.length} Saved
            </button>
          </div>

        </div>
      </header>

      {/* ── Hero label ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 20px", position: "relative", zIndex: 1 }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
          color: "var(--text)",
        }}>
          Discover{" "}
          <span className="gradient-text">Extraordinary</span>
          <br />Photography
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "10px" }}>
          <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", marginRight: "8px", verticalAlign: "middle" }} />
          {filteredPhotos.length} photos{showFavsOnly ? " · saved" : ""}
        </p>
      </div>

      {/* ── Gallery ── */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 48px", position: "relative", zIndex: 1 }}>
        <Gallery
          photos={filteredPhotos}
          favourites={favourites}
          toggleFav={toggleFav}
        />
      </main>

      {/* ── Footer ── */}
      <Footer />

    </div>
  );
}