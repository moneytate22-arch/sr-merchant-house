"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import styles from './Header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Spices & Agro commodities', href: '/products/agro-commodities' },
  { label: 'HDPE Pipe and Fittings', href: '/products/hdpe-pipes' },
  { label: 'Eco-Friendly Packaging', href: '/products/jute-packaging' },
  { label: 'Organic Products', href: '/products/organic-products' },
  { label: 'Agricultural Equipment', href: '/products/agriculture' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Leaf size={24} />
          </div>
          <div className={styles.logoTextWrapper}>
            <div className={styles.logoTitle}>
              <span className={styles.logoTitleLine}>SR Merchant</span>
              <span className={styles.logoTitleLine}>House<span className={styles.logoDot}>.</span></span>
            </div>
            <span className={styles.logoSubtitle}>Global Export Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
            <div className={styles.logoIcon}>
              <Leaf size={20} />
            </div>
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoTitle} style={{ fontSize: '1.1rem' }}>
                <span className={styles.logoTitleLine}>SR Merchant</span>
                <span className={styles.logoTitleLine}>House<span className={styles.logoDot}>.</span></span>
              </div>
            </div>
          </Link>
        </div>
        <nav className={styles.mobileNav}>
          {navItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>}
    </header>
  );
}
