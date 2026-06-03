import { useState } from "react";
import "./styles/digital_card.css";

// ── REPLACE with actual logo ──
// import logoImg from "./ashtavinayak-logo.png";
const logoImg = "/public/logocircle.png";

const BUSINESS = {
  name: "Ashtavinayak Enterprises",
  tagline: "Trusted Since Inception",
  category: "Wholesale & Distribution",
  description:
    "One of Maharashtra's most trusted wholesale distributors, delivering quality products with integrity, speed, and excellence.",
  phone1: "8698155151",
 
  whatsapp: "8698155151",
  email: "ashtavinayak29@gmail.com",
  website: "https://ashtavinayak.enterprises",
  officeAddress:
    "M.C. No.R-8/885/28, Beside Karwa Avenue, Opp. Nandai Hostel, Seetaram Nagar, Latur – 413 512.",
  factoryAddress:
    "Plot No. C-55 & C-61, MIDC, Ausa, Dist. Latur – 413520.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30427.70!2d76.5604!3d18.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf5b5efa3fffff%3A0x1!2sLatur%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1",
  mapDirectionsUrl:
    "https://maps.google.com/?q=Seetaram+Nagar+Latur+Maharashtra",
};

/* ══════════════
   SVG ICON SET
══════════════ */
const Icon = {
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#237a4e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path fill="#25D366" d="M12.004 0h-.008C5.372 0 0 5.373 0 12c0 2.625.846 5.059 2.28 7.047L.79 23.494a.5.5 0 00.617.63l4.571-1.463A11.945 11.945 0 0012.004 24C18.628 24 24 18.626 24 12S18.628 0 12.004 0zm0 21.818a9.818 9.818 0 01-5.044-1.392l-.362-.215-3.754 1.202 1.147-3.635-.236-.374A9.782 9.782 0 012.182 12c0-5.418 4.405-9.818 9.822-9.818 5.418 0 9.814 4.4 9.814 9.818 0 5.417-4.396 9.818-9.814 9.818z"/>
    </svg>
  ),
  Gmail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.183l9.615-6.362h.749A1.636 1.636 0 0124 5.457z"/>
    </svg>
  ),
  Location: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a6fa5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Factory: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V8l6-4v4l6-4v4l6-4v16H2z"/>
      <rect x="8" y="14" width="2" height="6" rx="1"/>
      <rect x="14" y="14" width="2" height="6" rx="1"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Share: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Apple: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  Android: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5S22 17.33 22 16.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A6.95 6.95 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C7.15 3.23 6 5.01 6 7h12c0-1.99-1.15-3.77-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  /* Quick link icons */
  ISO: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a5c3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  GST: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  Company: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a6fa5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
      <line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
  Gallery: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  Bank: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22"/>
      <line x1="6" y1="18" x2="6" y2="11"/>
      <line x1="10" y1="18" x2="10" y2="11"/>
      <line x1="14" y1="18" x2="14" y2="11"/>
      <line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
};

/* ══════════
   COMPONENT
══════════ */
export default function AshtavinayakCard() {
  const [toast, setToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: BUSINESS.name,
      text: `Contact ${BUSINESS.name} — ${BUSINESS.phone1}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (_) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      setToast(true);
      setTimeout(() => setToast(false), 2800);
    }
  };

  return (
    <div className="page-shell">
      <div className="desktop-layout">

        {/* ══ HERO / LEFT PANEL ══ */}
        <div className="hero">
          <div className="hero-inner">

            {/* Share FAB */}
            <button className="share-fab" onClick={handleShare} title="Share this card" aria-label="Share">
              <Icon.Share />
            </button>

            {/* Logo + Name */}
            <div className="logo-lockup">
              <div className="logo-frame">
                <img src={logoImg} alt="Ashtavinayak Enterprises Logo" />
              </div>
              <div>
                <div className="hero-name">{BUSINESS.name}</div>
                <div className="hero-sub">{BUSINESS.tagline}</div>
              </div>
            </div>

            <div className="hero-divider" />

            <p className="hero-desc">{BUSINESS.description}</p>
            <span className="hero-badge">
              <Icon.ISO />
              {BUSINESS.category}
            </span>
          </div>
        </div>

        {/* ══ RIGHT PANEL / CARD BODY ══ */}
        <div className="card-body">

          {/* Quick Action Strip */}
          <div className="quick-actions">
            <a className="qa-btn" href={`tel:${BUSINESS.phone1}`}>
              <div className="qa-icon call"><Icon.Phone /></div>
              <span className="qa-label">Call</span>
            </a>
            <a className="qa-btn" href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer">
              <div className="qa-icon wa"><Icon.WhatsApp /></div>
              <span className="qa-label">WhatsApp</span>
            </a>
            <a className="qa-btn" href={`mailto:${BUSINESS.email}`}>
              <div className="qa-icon mail"><Icon.Gmail /></div>
              <span className="qa-label">Email</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className="section">
            <div className="section-head">
              <span className="section-tag">Contact Details</span>
            </div>

            <a className="contact-row" href={`tel:${BUSINESS.phone1}`}>
              <div className="cr-icon phone"><Icon.Phone /></div>
              <div className="cr-text">
                <div className="cr-label">Phone</div>
                <div className="cr-value highlight">{BUSINESS.phone1} · {BUSINESS.phone2}</div>
              </div>
              <div className="cr-arrow"><Icon.ChevronRight /></div>
            </a>

            <a className="contact-row" href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer">
              <div className="cr-icon wa"><Icon.WhatsApp /></div>
              <div className="cr-text">
                <div className="cr-label">WhatsApp</div>
                <div className="cr-value highlight">{BUSINESS.whatsapp}</div>
              </div>
              <div className="cr-arrow"><Icon.ChevronRight /></div>
            </a>

            <a className="contact-row" href={`mailto:${BUSINESS.email}`}>
              <div className="cr-icon mail"><Icon.Gmail /></div>
              <div className="cr-text">
                <div className="cr-label">Email</div>
                <div className="cr-value">{BUSINESS.email}</div>
              </div>
              <div className="cr-arrow"><Icon.ChevronRight /></div>
            </a>
          </div>

          {/* Address + Map */}
          <div className="section">
            <div className="section-head">
              <span className="section-tag">Address & Location</span>
            </div>

            <a className="contact-row" href={BUSINESS.mapDirectionsUrl} target="_blank" rel="noreferrer">
              <div className="cr-icon loc"><Icon.Location /></div>
              <div className="cr-text">
                <div className="cr-label">Office Address</div>
                <div className="cr-value">{BUSINESS.officeAddress}</div>
              </div>
              <div className="cr-arrow"><Icon.ChevronRight /></div>
            </a>

            <a className="contact-row" href="https://maps.google.com/?q=MIDC+Ausa+Latur" target="_blank" rel="noreferrer">
              <div className="cr-icon fac"><Icon.Factory /></div>
              <div className="cr-text">
                <div className="cr-label">Factory / Works</div>
                <div className="cr-value">{BUSINESS.factoryAddress}</div>
              </div>
              <div className="cr-arrow"><Icon.ChevronRight /></div>
            </a>

            {/* Google Maps Embed */}
            <div className="map-wrapper">
              <iframe
                title="Ashtavinayak Enterprises Location"
                src={BUSINESS.mapEmbedUrl}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="map-overlay-btn"
                href={BUSINESS.mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon.MapPin />
                Get Directions
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="section">
            <div className="section-head">
              <span className="section-tag">Quick Links</span>
            </div>
            <div className="ql-grid">
              <a href="#iso" className="ql-item">
                <div className="ql-icon" style={{ background: "#e8f5ee" }}><Icon.ISO /></div>
                <span className="ql-label">ISO Cert</span>
              </a>
              <a href="#gst" className="ql-item">
                <div className="ql-icon" style={{ background: "#fff3e8" }}><Icon.GST /></div>
                <span className="ql-label">GST</span>
              </a>
              <a href="#company" className="ql-item">
                <div className="ql-icon" style={{ background: "#e8f0ff" }}><Icon.Company /></div>
                <span className="ql-label">Profile</span>
              </a>
              <a href="#gallery" className="ql-item">
                <div className="ql-icon" style={{ background: "#f5e8ff" }}><Icon.Gallery /></div>
                <span className="ql-label">Gallery</span>
              </a>
              <a href="#bank" className="ql-item">
                <div className="ql-icon" style={{ background: "#ffe8e8" }}><Icon.Bank /></div>
                <span className="ql-label">Bank</span>
              </a>
            </div>
          </div>

          {/* Save Contact */}
          <div className="save-section">
            <a className="save-btn save-ios" href="#ios">
              <Icon.Apple /> Save to iPhone
            </a>
            <a className="save-btn save-android" href="#android">
              <Icon.Android /> Save Contact
            </a>
          </div>

        </div>{/* end card-body */}
      </div>{/* end desktop-layout */}

      {/* Share Toast */}
      <div className={`share-toast${toast ? " visible" : ""}`}>
        Link copied to clipboard!
      </div>
    </div>
  );
}