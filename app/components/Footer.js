import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Leaf size={20} />
            </div>
            <span className={styles.logoTitle}>SR Merchant House<span className={styles.logoDot}>.</span></span>
          </Link>
          <p className={styles.footerText}>
            Premium sustainable jute, cotton, canvas products, agricultural equipment, HDPE pipes, and organic commodities exported globally from India.
          </p>
        </div>
        
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Our Products</Link></li>
            <li><Link href="/products/hdpe-pipes">HDPE Pipes</Link></li>
            <li><Link href="/products/organic-products">Organic Range</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Contact Us</h4>
          <ul className={styles.footerContact}>
            <li>
              <MapPin size={18} />
              <span>668, 1st floor, 20th Cross, 2nd Block, Rajajinagar, Bangalore, Karnataka 560010</span>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:admin@srmhouse.com">admin@srmhouse.com</a>
            </li>
            <li>
              <Phone size={18} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="tel:+917259600532">+91 72596 00532</a>
                <a href="tel:+917411149629">+91 7411 149 629</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={`container ${styles.footerBottom}`}>
        <p>&copy; {new Date().getFullYear()} SR Merchant House. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Global Network"><Globe size={20} /></a>
          <a href="#" aria-label="Social Media"><Share2 size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
