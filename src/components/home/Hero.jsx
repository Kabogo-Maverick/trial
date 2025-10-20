import heroImage from "../../assets/7.jfif";
// import "../styles/pages/home.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay for readability */}
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          textAlign: "center",
          color: "#fff",
          zIndex: 2,
          padding: "0 1rem",
        }}
      >
        <h1 className="hero-title" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to <span className="highlight" style={{ color: "#00ffcc" }}>Nektar Ratish</span>
        </h1>
        <p className="hero-subtitle" style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Elevating traditional flavors into an elegant, modern experience.  
          Crafted with passion, shared with style.
        </p>
        <button
          className="hero-btn"
          style={{
            background: "linear-gradient(90deg, #00ffcc, #0077ff)",
            border: "none",
            padding: "0.8rem 2rem",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          Discover More
        </button>
      </div>
    </section>
  );
}
