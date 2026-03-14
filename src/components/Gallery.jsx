import PhotoCard from "./PhotoCard";

export default function Gallery({ photos, favourites, toggleFav }) {
  if (photos.length === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 0", gap: "12px" }}>
        <div style={{ fontSize: "40px", opacity: 0.15 }}>✦</div>
        <p style={{ color: "var(--muted)", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          No photos found
        </p>
      </div>
    );
  }

  return (
    <div
      className="bento-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "200px",
        gap: "12px",
      }}
    >
      {photos.map((photo, i) => {
        // Bento pattern: every 7th card is tall, every 11th is wide
        const isTall = i % 7 === 0;
        const isWide = !isTall && i % 11 === 3;

        return (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={favourites.some((f) => f.id === photo.id)}
            onToggleFav={() => toggleFav(photo)}
            isTall={isTall}
            isWide={isWide}
          />
        );
      })}
    </div>
  );
}