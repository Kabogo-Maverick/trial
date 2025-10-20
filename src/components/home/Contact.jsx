import contactImage from "../../assets/8.jfif";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side — Text & Form */}
        <div className="contact-left">
          <h2>
            Let’s <span>Connect</span>
          </h2>
          <p>
            Whether you're curious about our Muratina selection, Shisha rentals,
            or just want to say hi — our team is ready to assist. 
            Fill in your details and we’ll get back to you within a few hours.
          </p>

          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>

        {/* Right Side — Image */}
        <div className="contact-right">
          <img src={contactImage} alt="Support staff" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
}
