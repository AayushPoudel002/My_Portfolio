import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import "./Contact.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission (no backend)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success state after a delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const socialLinks = [
    { name: "github", href: portfolioData.socials.github, label: "GitHub" },
    { name: "linkedin", href: portfolioData.socials.linkedin, label: "LinkedIn" },
    { name: "email", href: `mailto:${portfolioData.socials.email}`, label: "Email" },
  ];

  const renderSocialIcon = (name) => {
    switch (name) {
      case "github":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        );
      case "linkedin":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "email":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Background */}
      <div className="contact__bg" />

      <div className="container contact__container">
        <div className="contact__wrapper">
          {/* Section Header */}
          <div className="contact__header textCenter">
            <span className="contact__tag mono">// Get In Touch</span>
            <h2 className="sectionTitle mb4">
              Let's <span className="gradientText">Build Something</span>
            </h2>
            <p className="sectionSubtitle contact__subtitle">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="contact__grid">
            {/* Contact Form */}
            <div className="contact__form-wrapper glassCard">
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="formGroup">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? "inputError" : ""}`}
                  />
                  {errors.name && <p className="errorText">{errors.name}</p>}
                </div>

                <div className="formGroup">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${errors.email ? "inputError" : ""}`}
                  />
                  {errors.email && <p className="errorText">{errors.email}</p>}
                </div>

                <div className="formGroup">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`textarea ${errors.message ? "inputError" : ""}`}
                  />
                  {errors.message && <p className="errorText">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting || isSubmitted} className="btn btnPrimary contact__submit">
                  {isSubmitting ? (
                    <>
                      <span className="contact__spinner" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact__info">
              <div className="contact__info-card glassCard">
                <h3 className="contact__info-title">Direct Contact</h3>
                <p className="contact__info-text">
                  Prefer to reach out directly? Feel free to email me or connect on social media.
                </p>
                <a href={`mailto:${portfolioData.socials.email}`} className="contact__email mono">
                  {portfolioData.socials.email}
                </a>

                <div className="contact__socials">
                  {socialLinks.map(({ name, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      aria-label={label}
                    >
                      {renderSocialIcon(name)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact__response glassCard">
                <h3 className="contact__info-title">Response Time</h3>
                <p className="contact__info-text">
                  I typically respond within 24-48 hours. For urgent matters, please reach out via gmail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
