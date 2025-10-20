import { useState } from "react";
import "../styles/pages/bookings.css";
import img1 from "../assets/1.jfif";
import img2 from "../assets/2.jfif";
import img3 from "../assets/3.jfif";
import img4 from "../assets/4.jfif";
import img5 from "../assets/5.jfif";
import img6 from "../assets/6.jfif";
import img7 from "../assets/7.jfif";
import DeliveryMap from "../components/DeliveryMap";
import Footer from "../components/Footer";



export default function Bookings() {
  const [selectedItem, setSelectedItem] = useState(null);

  const muratinaProducts = [
    { id: 1, name: "Muratina 1L", price: 150, img: img1 },
    { id: 2, name: "Muratina 5L", price: 750, img: img2 },
    { id: 3, name: "Muratina 10L", price: 1500, img: img3 },
    { id: 4, name: "Muratina 20L", price: 3000, img: img4 },
  ];

  const shishaProducts = [
    { id: 1, name: "Standard Hookah Pot", price: 800, img: img5 },
    { id: 2, name: "Deluxe Hookah Setup", price: 1500, img: img6 },
    { id: 3, name: "Premium Lounge Hookah", price: 2500, img: img7 },
  ];

  const handleSelect = (item) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeForm = () => setSelectedItem(null);

  return (
    <div className="bookings-page">
      {/* HERO */}
      <header className="bookings-hero">
        <h1>🍯 Experience the Tradition, Feel the Vibe 💨</h1>
        <p>
          Fresh <strong>Muratina</strong> delivered to your doorstep or rent a
          sleek <strong>Hookah Pot</strong> for your chill sessions.
        </p>
      </header>

      {/* Muratina Section */}
      <section className="product-section muratina-section">
        <h2 className="section-title">🥂 Muratina Orders</h2>
        <p className="section-subtext">
          Authentic brew of the culture — choose your preferred size.
        </p>
        <div className="product-grid">
          {muratinaProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="image-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p className="price">Ksh {item.price.toLocaleString()}</p>
              <button onClick={() => handleSelect(item)} className="order-btn">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hookah Section */}
      <section className="product-section shisha-section">
        <h2 className="section-title">💨 Shisha Rentals</h2>
        <p className="section-subtext">
          Select your setup and bring the lounge experience home.
        </p>
        <div className="product-grid">
          {shishaProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="image-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p className="price">Ksh {item.price.toLocaleString()}</p>
              <button onClick={() => handleSelect(item)} className="order-btn">
                Book Pot
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Popup */}
      {selectedItem && (
        <div className="form-overlay">
          <div className="booking-form-section">
            <button className="close-btn" onClick={closeForm}>✕</button>
            <h2>Booking: {selectedItem.name}</h2>
            <p className="form-price">
              Ksh {selectedItem.price.toLocaleString()} (Delivery excluded)
            </p>

            <form className="booking-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="form-row">
                <input type="date" required />
                <input type="time" required />
              </div>

              <input
                type="text"
                placeholder="Delivery Location / Address"
                required
              />

              <textarea placeholder="Any special requests?" rows="3"></textarea>

              <button type="submit" className="booking-btn">
                Confirm Booking ✅
              </button>
            </form>
          </div>
        </div>
      )}
      <DeliveryMap />
      <Footer/>

    </div>
  );
}
