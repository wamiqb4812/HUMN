import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { collection, getDocs, doc, deleteDoc, addDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import "./AdminDashboard.css";

const initialPerfumes = [
  { id: "1", name: "HUMN Noir", price: 185, stock: 48, category: "EDP" },
  { id: "2", name: "HUMN Essence", price: 165, stock: 34, category: "EDP" },
  { id: "3", name: "HUMN Bloom", price: 155, stock: 61, category: "EDT" },
];

export default function AdminDashboard() {
  const { currentUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [users, setUsers] = useState([]);
  const [perfumes, setPerfumes] = useState(initialPerfumes);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [newPerfume, setNewPerfume] = useState({ name: "", price: "", stock: "", category: "EDP" });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  useEffect(() => {
    if (activeTab === "users") {
      setLoadingUsers(true);
      getDocs(collection(db, "users"))
        .then((snap) => {
          setUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        })
        .catch(console.error)
        .finally(() => setLoadingUsers(false));
    }
  }, [activeTab]);

  const handleAddPerfume = (e) => {
    e.preventDefault();
    if (!newPerfume.name) return;
    setPerfumes((prev) => [
      ...prev,
      { id: Date.now().toString(), ...newPerfume, price: Number(newPerfume.price), stock: Number(newPerfume.stock) },
    ]);
    setNewPerfume({ name: "", price: "", stock: "", category: "EDP" });
    setShowForm(false);
  };

  const handleDeletePerfume = (id) => {
    setPerfumes((prev) => prev.filter((p) => p.id !== id));
  };

  const stats = [
    { label: "Total Products", value: perfumes.length },
    { label: "Total Users", value: users.length || "—" },
    { label: "Avg. Price", value: `$${Math.round(perfumes.reduce((a, p) => a + p.price, 0) / perfumes.length)}` },
    { label: "Total Stock", value: perfumes.reduce((a, p) => a + p.stock, 0) },
  ];

  return (
    <div className="dashboard admin-dashboard">
      <div className="dashboard__sidebar">
        <Link to="/" className="dashboard__logo">HUMN<span>·</span></Link>

        <div className="dashboard__user-info">
          <div className="dashboard__avatar admin-dashboard__avatar">A</div>
          <p className="dashboard__user-email">{currentUser?.email}</p>
          <span className="dashboard__user-badge admin-dashboard__badge">Administrator</span>
        </div>

        <nav className="dashboard__nav">
          {["overview", "perfumes", "users"].map((tab) => (
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
          {activeTab === "overview" && (
            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <span className="gold-line" />
                <h1 className="dashboard__section-title">Admin Overview</h1>
              </div>
              <div className="admin-dashboard__stats">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="admin-dashboard__stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="admin-dashboard__stat-value">{s.value}</span>
                    <span className="admin-dashboard__stat-label">{s.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="admin-dashboard__recent">
                <h2 className="admin-dashboard__sub-title">Quick Actions</h2>
                <div className="admin-dashboard__actions">
                  <button className="admin-dashboard__action-btn" onClick={() => setActiveTab("perfumes")}>
                    Manage Perfumes
                  </button>
                  <button className="admin-dashboard__action-btn" onClick={() => setActiveTab("users")}>
                    View Users
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "perfumes" && (
            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <span className="gold-line" />
                <h1 className="dashboard__section-title">Manage Perfumes</h1>
                <button
                  className="admin-dashboard__add-btn"
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? "Cancel" : "+ Add New"}
                </button>
              </div>

              {showForm && (
                <motion.form
                  className="admin-dashboard__form"
                  onSubmit={handleAddPerfume}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="admin-dashboard__form-grid">
                    <div className="auth-page__field">
                      <label className="auth-page__label">Name</label>
                      <input className="auth-page__input" value={newPerfume.name} onChange={(e) => setNewPerfume((p) => ({ ...p, name: e.target.value }))} placeholder="HUMN ..." required />
                    </div>
                    <div className="auth-page__field">
                      <label className="auth-page__label">Price ($)</label>
                      <input className="auth-page__input" type="number" value={newPerfume.price} onChange={(e) => setNewPerfume((p) => ({ ...p, price: e.target.value }))} placeholder="150" required />
                    </div>
                    <div className="auth-page__field">
                      <label className="auth-page__label">Stock</label>
                      <input className="auth-page__input" type="number" value={newPerfume.stock} onChange={(e) => setNewPerfume((p) => ({ ...p, stock: e.target.value }))} placeholder="50" required />
                    </div>
                    <div className="auth-page__field">
                      <label className="auth-page__label">Category</label>
                      <select className="auth-page__input" value={newPerfume.category} onChange={(e) => setNewPerfume((p) => ({ ...p, category: e.target.value }))}>
                        <option>EDP</option>
                        <option>EDT</option>
                        <option>Parfum</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="admin-dashboard__add-btn">Add Perfume</button>
                </motion.form>
              )}

              <table className="admin-dashboard__table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {perfumes.map((p, i) => (
                    <motion.tr
                      key={p.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <td className="admin-dashboard__td-name">{p.name}</td>
                      <td>{p.category}</td>
                      <td className="admin-dashboard__td-price">${p.price}</td>
                      <td>{p.stock}</td>
                      <td>
                        <button className="admin-dashboard__delete-btn" onClick={() => handleDeletePerfume(p.id)}>
                          Remove
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "users" && (
            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <span className="gold-line" />
                <h1 className="dashboard__section-title">User Management</h1>
              </div>

              {loadingUsers ? (
                <p className="admin-dashboard__loading">Loading users...</p>
              ) : users.length === 0 ? (
                <div className="dashboard__empty">
                  <p className="dashboard__empty-text">No users found in the database.</p>
                </div>
              ) : (
                <table className="admin-dashboard__table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, i) => (
                      <motion.tr
                        key={u.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <td>{u.email}</td>
                        <td>
                          <span className={`admin-dashboard__role-badge admin-dashboard__role-badge--${u.role}`}>
                            {u.role}
                          </span>
                        </td>
                        <td>{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
