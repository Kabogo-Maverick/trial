import heroVideo from "../../assets/hero.mp4";
// import "../styles/pages/home.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Nektar Ratish</span>
        </h1>
        <p className="hero-subtitle">
          Elevating traditional flavors into an elegant, modern experience.  
          Crafted with passion, shared with style.
        </p>
        <button className="hero-btn">Discover More</button>
      </div>
    </section>
  );
}
