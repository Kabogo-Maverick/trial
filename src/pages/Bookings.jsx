import { useState } from "react";
import "../styles/pages/bookings.css";

// Updated image imports
import img1 from "../assets/1.jfif";
import img2 from "../assets/2.jfif";
import img3 from "../assets/3.jfif";
import img4 from "../assets/4.jfif";
import img5 from "../assets/5.jfif";
import img6 from "../assets/6.jfif";
import img7 from "../assets/7.jfif";

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

  return (
    <div className="bookings-page">
      {/* HERO SECTION */}
      <div className="bookings-hero">
        <h1>Order & Experience the Taste of Culture 🍯</h1>
        <p>
          Choose your favorite <strong>Muratina</strong> or rent a stylish{" "}
          <strong>Hookah Pot</strong>. Freshly prepared. Delivered fast.
        </p>
      </div>

      {/* PRODUCTS SECTION */}
      <section className="product-section">
        <h2 className="section-title">Muratina Orders</h2>
        <div className="product-grid">
          {muratinaProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Ksh {item.price.toLocaleString()}</p>
              <button onClick={() => handleSelect(item)}>Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Shisha Rentals</h2>
        <div className="product-grid">
          {shishaProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Ksh {item.price.toLocaleString()}</p>
              <button onClick={() => handleSelect(item)}>Book Pot</button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      {selectedItem && (
        <div className="booking-form-section">
          <h2>Book: {selectedItem.name}</h2>
          <p>Price: Ksh {selectedItem.price.toLocaleString()} (Delivery excluded)</p>

          <form className="booking-form">
            <div className="form-row">
              <div className="form-group half">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group half">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Delivery Date</label>
                <input type="date" required />
              </div>
              <div className="form-group half">
                <label>Delivery Time</label>
                <input type="time" required />
              </div>
            </div>

            <div className="form-group">
              <label>Location / Address</label>
              <input type="text" placeholder="Where should we deliver?" required />
            </div>

            <div className="form-group">
              <label>Special Notes</label>
              <textarea placeholder="Any special requests?" rows="3"></textarea>
            </div>

            <button type="submit" className="booking-btn">Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
}
