export default function FeatureBanner({ icon, title, desc, stats, color = "#FF9933" }) {
  return (
    <div
      style={{
        padding: "20px",
        border: `1px solid ${color}`,
        borderLeft: `5px solid ${color}`,
        borderRadius: "12px",
        background: "#ffffff",
        color: "#222222",
        marginBottom: "20px",
      }}
    >
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>

      <h3 style={{ margin: "0 0 10px", color }}>{title}</h3>

      <p style={{ margin: "0 0 16px", lineHeight: 1.6 }}>{desc}</p>

      {stats && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {stats.map((group, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                background: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              {group.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}