  import React, { useState } from "react";
  import axios from "axios";
  import "./Contact.css";
  import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

  const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = (e) => {
      e.preventDefault();
      if (loading) return;
      setLoading(true);

      axios.post("https://yugendraportfolio.onrender.com/contact", { name, email, message })
        .then((res) => {
          alert("✅ Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.error(err);
          alert("❌ Failed to send message. Please try again.");
        })
        .finally(() => setLoading(false));
    };

    return (
      <section className="contact-section" id="contact">
        <h2 className="contact-title text-center mb-4">Get In Touch</h2>

        <div className="container contact-container">
          <div className="row align-items-center">

            <div className="col-md-5 contact-info">
              <h4>Let's Connect</h4>
              <p className="contact-desc justify">
                Feel free to reach out for collaborations, freelance work, or just to say hi 👋.  
                I’m always open to discussing new ideas or opportunities.
              </p>

              <div className="info-item">
                <FaEnvelope className="icon" />
                <a href="mailto:aviligondayugendra18@gmail.com">
                  aviligondayugendra18@gmail.com
                </a>
              </div>
             <div className="info-item">
  <FaPhoneAlt className="icon" />
  <a href="tel:+919347472939" className="phone-link">
    +91 93474 72939
  </a>
</div>

              <div className="info-item">
                <FaLinkedin className="icon" />
                <a
                  href="https://www.linkedin.com/in/aviligonda-yugendra-kumar-183588312/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="info-item">
                <FaGithub className="icon" />
                <a href="https://github.com/yugendra503" target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>

            <div className="col-md-7">
              <form className="contact-form shadow-lg" onSubmit={sendMessage}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-submit d-flex align-items-center justify-content-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm text-light"
                        role="status"
                      ></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message 🚀"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
