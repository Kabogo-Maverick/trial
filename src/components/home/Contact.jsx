export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Get in touch for collaborations or inquiries.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
