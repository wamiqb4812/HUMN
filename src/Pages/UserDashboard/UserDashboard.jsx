import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import "./UserDashboard.css";

const savedPerfumes = [
  { id: 1, name: "HUMN Noir", price: "$185", note: "Dark · Woody" },
  { id: 2, name: "HUMN Bloom", price: "$155", note: "Fresh · Green" },
];

export default function UserDashboard() {
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!currentUser) return;
      const snap = await getDoc(doc(db, "users", currentUser.uid));
      if (snap.exists()) setUserData(snap.data());
    };
    fetchUser();
  }, [currentUser]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const tabs = ["profile", "saved", "orders"];

  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <Link to="/" className="dashboard__logo">HUMN<span>·</span></Link>

        <div className="dashboard__user-info">
          <div className="dashboard__avatar">
            {currentUser?.email?.[0]?.toUpperCase()}
          </div>
          <p className="dashboard__user-email">{currentUser?.email}</p>
          <span className="dashboard__user-badge">Member</span>
        </div>

        <nav className="dashboard__nav">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`dashboard__nav-item ${activeTab === tab ? "dashboard__nav-item--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        <button className="dashboard__logout" onClick={handleLogout}>Sign Out</button>
      </div>

      <div className="dashboard__main">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "profile" && (
            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <span className="gold-line" />
                <h1 className="dashboard__section-title">My Profile</h1>
              </div>
              <div className="dashboard__profile-grid">
                <div className="dashboard__info-card">
                  <label className="dashboard__info-label">Email Address</label>
                  <p className="dashboard__info-value">{currentUser?.email}</p>
                </div>
                <div className="dashboard__info-card">
                  <label className="dashboard__info-label">Member Since</label>
                  <p className="dashboard__info-value">
                    {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" }) : "—"}
                  </p>
                </div>
                <div className="dashboard__info-card">
                  <label className="dashboard__info-label">Account Status</label>
                  <p className="dashboard__info-value dashboard__info-value--gold">Active Member</p>
                </div>
                <div className="dashboard__info-card">
                  <label className="dashboard__info-label">Saved Fragrances</label>
                  <p className="dashboard__info-value">{savedPerfumes.length} items</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <span className="gold-line" />
                <h1 className="dashboard__section-title">Saved Fragrances</h1>
              </div>
              <div className="dashboard__saved-list">
                {savedPerfumes.map((p, i) => (
                  <motion.div
                    key={p.id}
                    className="dashboard__saved-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="dashboard__saved-bottle">
                      <svg viewBox="0 0 40 70" xmlns="http://www.w3.org/2000/svg">
                        <rect x="14" y="4" width="12" height="5" rx="1" fill="#c9a96e" />
                        <rect x="12" y="8" width="16" height="8" rx="2" fill="#c9a96e" />
                        <rect x="14" y="14" width="12" height="16" rx="1" fill="#1e1b15" />
                        <path d="M8 32 Q4 40 4 50 Q4 64 20 66 Q36 64 36 50 Q36 40 32 32 Z" fill="#1e1b15" />
                        <text x="20" y="52" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="4" fill="rgba(240,235,227,0.8)" letterSpacing="2">HUMN</text>
                      </svg>
                    </div>
                    <div className="dashboard__saved-info">
                      <h3 className="dashboard__saved-name">{p.name}</h3>
                      <p className="dashboard__saved-note">{p.note}</p>
                    </div>
                    <span className="dashboard__saved-price">{p.price}</span>
                    <button className="dashboard__saved-cart">Add to Cart</button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <span className="gold-line" />
                <h1 className="dashboard__section-title">Order History</h1>
              </div>
              <div className="dashboard__empty">
                <p className="dashboard__empty-text">No orders yet.</p>
                <Link to="/" className="dashboard__empty-btn">Explore Collection</Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
