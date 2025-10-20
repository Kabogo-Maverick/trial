import feature1 from "../../assets/1.jfif";
import feature2 from "../../assets/2.jfif";
import feature3 from "../../assets/3.jfif";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-text">
          <h2>
            Experience <span>Excellence</span>
          </h2>
          <p>
            Every pour, every puff, and every moment at Nektar Ratish is designed
            to awaken your senses. Our blend of authenticity, artistry, and modern luxury 
            makes every experience unforgettable.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <img src={feature1} alt="Muratina" />
            <div className="feature-info">
              <h3>Muratina Mastery</h3>
              <p>
                Handcrafted traditional Muratina infused with contemporary flair —
                smooth, balanced, and delightfully Kenyan.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img src={feature2} alt="Shisha Lounge" />
            <div className="feature-info">
              <h3>Shisha & Serenity</h3>
              <p>
                Immerse yourself in flavor — premium shisha blends that define luxury relaxation.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img src={feature3} alt="Ratish Experience" />
            <div className="feature-info">
              <h3>The Ratish Experience</h3>
              <p>
                From order to enjoyment, every detail is crafted to perfection —
                your comfort is our art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
