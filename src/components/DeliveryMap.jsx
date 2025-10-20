import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Only two pickup points
const pickupPoints = [
  { name: "Gwa Kairu, Ruiru", coords: [-1.1376, 36.9633], color: "green" },
  { name: "Kiambu Mall, Kiambu", coords: [-1.1703, 36.8344], color: "blue" },
];

// Distance calculation function (in km)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

// Draggable delivery marker
function DraggableMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? (
    <Marker
      position={position}
      draggable={true}
      eventHandlers={{
        dragend: (e) => setPosition(e.target.getLatLng()),
      }}
    >
      <Popup>Your Delivery Point 📦</Popup>
    </Marker>
  ) : null;
}

export default function DeliveryMap() {
  const [position, setPosition] = useState(null);
  const [nearestPickup, setNearestPickup] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0);

  useEffect(() => {
    if (position) {
      let closest = null;
      let shortest = Infinity;

      pickupPoints.forEach((p) => {
        const dist = calculateDistance(
          p.coords[0],
          p.coords[1],
          position.lat,
          position.lng
        );
        if (dist < shortest) {
          shortest = dist;
          closest = p;
        }
      });

      const fee = Math.round((shortest / 25) * 500);
      setNearestPickup({ ...closest, distance: shortest });
      setDeliveryFee(fee < 200 ? 200 : fee);
    }
  }, [position]);

  return (
    <div className="map-container">
      <h2>🚚 Delivery Location</h2>
      <p>Click anywhere on the map or drag the marker to set your delivery location.</p>

      <MapContainer
        center={[-1.17, 36.87]}
        zoom={11}
        style={{
          height: "400px",
          width: "100%",
          borderRadius: "1rem",
          marginTop: "1rem",
          zIndex: 1,
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />

        {pickupPoints.map((p, i) => (
          <Marker key={i} position={p.coords}>
            <Popup>
              <strong>{p.name}</strong> <br />
              Pickup Point
            </Popup>
          </Marker>
        ))}

        <DraggableMarker position={position} setPosition={setPosition} />
      </MapContainer>

      {nearestPickup && (
        <div className="delivery-info">
          <h3>
            Nearest Pickup: <span>{nearestPickup.name}</span>
          </h3>
          <p>Distance: {nearestPickup.distance.toFixed(2)} km</p>
          <p className="price">
            Delivery Fee: <strong>Ksh {deliveryFee}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
