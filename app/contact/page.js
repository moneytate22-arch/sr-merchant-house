import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: "Contact Us | SR Merchant House",
  description: "Get in touch with SR Merchant House for premium global exports.",
};

export default function Contact() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerArea}>
        <div className="container">
          <h1 className={styles.pageTitle}>Start Your Sustainable Journey</h1>
          <p className={styles.pageSubtitle}>Request our detailed product catalog or discuss your custom export requirements.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className={`container ${styles.contactGrid}`}>
          {/* Form Side */}
          <div className={styles.formCol}>
            <div className={styles.formHeader}>
              <h2>Send an Inquiry</h2>
              <p>Fill out the form below and our export team will get back to you within 24 hours.</p>
            </div>
            
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" placeholder="Your Company Ltd." />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="product">Product Interest</label>
                <select id="product" required>
                  <option value="">Select a Category...</option>
                  <option value="hdpe">HDPE Pipes & Fittings</option>
                  <option value="agri">Agricultural Equipment</option>
                  <option value="jute">Jute & Eco Packaging</option>
                  <option value="building">Building Materials (Laminates)</option>
                  <option value="agro">Agro Commodities & Spices</option>
                  <option value="organic">Organic Wellness Range</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message / Requirements</label>
                <textarea id="message" rows="5" placeholder="Tell us about your bulk needs, target destination, etc." required></textarea>
              </div>
              
              <button type="button" className={styles.submitBtn}>
                <Send size={18} /> Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Details Side */}
          <div className={styles.detailsCol}>
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsTitle}>Direct Contact</h3>
              
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <a href="mailto:admin@srmhouse.com">admin@srmhouse.com</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <a href="tel:+917259600532">+91 72596 00532</a><br/>
                    <a href="tel:+917411149629" style={{marginTop: '4px', display: 'inline-block'}}>+91 7411 149 629</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Visit Headquarters</h4>
                    <p>668, 1st floor, 20th Cross,<br/>2nd Block, Rajajinagar,<br/>Bangalore, Karnataka 560010<br/>India</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapBox}>
                <div className={styles.mapPlaceholder}>
                  <MapPin size={32} style={{ color: 'var(--color-gold-500)', marginBottom: '8px' }} />
                  <span>Bangalore HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
