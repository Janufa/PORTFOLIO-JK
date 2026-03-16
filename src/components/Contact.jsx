import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({
        loading: false,
        success: data.message || "Message sent successfully!",
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus({
        loading: false,
        success: "",
        error: error.message || "Failed to fetch",
      });
    }
  };

  return (
    <section id="contact" className="section center-section">
      <h2 className="section-title">Contact Me</h2>

      <form className="glass-card contact-form center-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="primary-btn" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send Message"}
        </button>

        {status.success && (
          <p style={{ color: "#22c55e", marginTop: "12px" }}>{status.success}</p>
        )}

        {status.error && (
          <p style={{ color: "#ef4444", marginTop: "12px" }}>{status.error}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;