import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interestedIn: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Check if a product was selected from products section
    const selectedProduct = sessionStorage.getItem('selectedProduct');
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, interestedIn: selectedProduct }));
      sessionStorage.removeItem('selectedProduct'); // Clear it after use
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const showToast = (message, type = 'success') => {
    setSubmitStatus({ message, type });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      showToast('Thanks! We\'ll get back to you within 24 hours.', 'success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interestedIn: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-bg-alt">
      <div className="container">
        <div className="section-header text-center">
          <h2>Get in Touch</h2>
          <p>Ready to discuss your packaging needs? We're here to help!</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interestedIn" className="form-label">Interested In</label>
                <select
                  id="interestedIn"
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a product category</option>
                  <option value="Food Grade Paper">Food Grade Paper</option>
                  <option value="Carry Bag & Envelope Paper">Carry Bag & Envelope Paper</option>
                  <option value="MG Paper Bags">MG Paper Bags</option>
                  <option value="Duplex Paper">Duplex Paper</option>
                  <option value="Recycled Eco-Friendly Paper">Recycled Eco-Friendly Paper</option>
                  <option value="Virgin Imported Paper">Virgin Imported Paper</option>
                  <option value="Kraft Liner & Semi-Chemical Paper">Kraft Liner & Semi-Chemical Paper</option>
                  <option value="Custom Solutions">Custom Solutions</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your requirements, quantities, delivery location, etc."
                  rows="5"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card card">
              <h3>Business Information</h3>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>Serve No. 205/3/1, Behind Irrigation Banglow, Janki Vishwa, Kopargaon, Dist. Ahilyanagar, Maharashtra – 423601</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 8698155151<br />+91 9423167809</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>ashtavinayak29@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {submitStatus && (
        <div className={`toast ${submitStatus.type}`}>
          <div className="toast-content">
            <span className="toast-message">{submitStatus.message}</span>
            <button 
              className="toast-close"
              onClick={() => setSubmitStatus(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
