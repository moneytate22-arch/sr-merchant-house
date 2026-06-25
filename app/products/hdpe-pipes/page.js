import Image from 'next/image';
import { ShieldCheck, Cog, Droplet, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: "Premium HDPE Pipes | SR Merchant House",
  description: "High-Density Polyethylene (HDPE) Pressure Pipes. 50+ year service life, virgin grade PE solutions.",
};

export default function HdpePipes() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/hdpe_pipes.png" alt="HDPE Pipes" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Industrial Grade Export</div>
          <h1 className={styles.title}>Premium HDPE <br/>Pressure Pipes</h1>
          <p className={styles.subtitle}>Engineered to ISO 4427 and DIN 8074 standards for water supply, irrigation, gas, and industrial applications globally.</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Year Service Life</p>
            </div>
            <div className={styles.statItem}>
              <h3>1600</h3>
              <p>Max OD (mm)</p>
            </div>
            <div className={styles.statItem}>
              <h3>PN 25</h3>
              <p>Max Pressure Rating</p>
            </div>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>Virgin Grade PE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Technical Specifications</h2>
            <div className={styles.divider}></div>
            <p>We supply a comprehensive range of PE grades and dimension ratios to meet demanding infrastructure projects in the UAE and worldwide.</p>
          </div>

          <div className={styles.specsGrid}>
            <div className={styles.specCard}>
              <h3>Available PE Grades</h3>
              <ul className={styles.specList}>
                <li>
                  <strong>PE 100+</strong>
                  <span>&gt;10.0 MPa | Enhanced crack resistance. High-stress installations.</span>
                </li>
                <li>
                  <strong>PE 100</strong>
                  <span>10.0 MPa | Current international gold standard. Municipal & Industrial.</span>
                </li>
                <li>
                  <strong>PE 80</strong>
                  <span>8.0 MPa | Irrigation mains, low-pressure rural water supply.</span>
                </li>
              </ul>
            </div>
            <div className={styles.specCard}>
              <h3>Key Features</h3>
              <ul className={styles.specList}>
                <li>
                  <strong>Leak-Free Joints</strong>
                  <span>Butt fusion and electrofusion create joints stronger than the pipe itself.</span>
                </li>
                <li>
                  <strong>High Flexibility</strong>
                  <span>Can be bent to a radius of 20-25 times the pipe diameter.</span>
                </li>
                <li>
                  <strong>Corrosion Resistant</strong>
                  <span>No rust, rot, or galvanic corrosion. Excellent chemical resistance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SDR Table */}
          <div className={styles.tableWrapper}>
            <h3>Standard Dimensional Ratio (SDR) & Pressure Ratings</h3>
            <p>Common SDR and PN pairings for PE100 pipes. Dimensions conform to ISO 4427 / DIN 8074.</p>
            <div className={styles.tableResponsive}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>SDR Rating</th>
                    <th>Pressure Nominal (PN)</th>
                    <th>Application Profile</th>
                    <th>Common Sizes (OD mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.highlight}>SDR 11</td>
                    <td>PN 16</td>
                    <td>High-pressure water networks, critical mains.</td>
                    <td>20 - 1000</td>
                  </tr>
                  <tr>
                    <td className={styles.highlight}>SDR 13.6</td>
                    <td>PN 12.5</td>
                    <td>Medium to high pressure municipal distribution.</td>
                    <td>25 - 1200</td>
                  </tr>
                  <tr>
                    <td className={styles.highlight}>SDR 17</td>
                    <td>PN 10</td>
                    <td>Standard water supply, general industrial use.</td>
                    <td>32 - 1600</td>
                  </tr>
                  <tr>
                    <td className={styles.highlight}>SDR 21</td>
                    <td>PN 8</td>
                    <td>Low-pressure irrigation, rural networks.</td>
                    <td>40 - 1600</td>
                  </tr>
                  <tr>
                    <td className={styles.highlight}>SDR 26</td>
                    <td>PN 6</td>
                    <td>Gravity mains, sewer, and light irrigation.</td>
                    <td>50 - 1600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
