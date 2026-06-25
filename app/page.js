import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Globe, Leaf } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroBadge}>Sustainable Export Solutions</div>
          <h1 className={styles.heroTitle}>
            Crafting <span className={styles.textGradient}>Nature</span> <br/>
            <span className={styles.heroTitleHighlight}>into Excellence</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Global exporters of premium HDPE pipes, agricultural equipment, sustainable jute packaging, and raw organic commodities. Delivered worldwide from India.
          </p>
          <div className={styles.heroActions}>
            <Link href="/products" className="btn-primary">
              Explore Collection <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>Our Global Catalog</h2>
          <p className={styles.sectionDesc}>Discover our comprehensive range of high-quality products sourced and manufactured for the world.</p>
          
          <div className={styles.categoryGrid}>
            <Link href="/products/hdpe-pipes" className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image src="/hdpe_pipes.png" alt="HDPE Pipes" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.categoryContent}>
                <h3>HDPE Pipes & Fittings</h3>
                <p>Premium pressure pipes, all SDR ratings, PE100/PE80</p>
              </div>
            </Link>

            <Link href="/products/organic-products" className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image src="/organic_oils.png" alt="Organic Products" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Organic Products</h3>
                <p>Cold-pressed oils, Millets, Jaggery & Pure Cow Ghee</p>
              </div>
            </Link>

            <Link href="/products/jute-packaging" className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image src="/jute_bags.png" alt="Jute Packaging" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Eco Packaging</h3>
                <p>Jute shopping bags, canvas totes & custom textiles</p>
              </div>
            </Link>

            <Link href="/products/agro-commodities" className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image src="/agro_spices.png" alt="Agro Commodities" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Agro & Spices</h3>
                <p>Turmeric, chilli powder, Basmati & premium rice varieties</p>
              </div>
            </Link>
            
            <Link href="/products/building-materials" className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image src="/wood_laminates.png" alt="Building Materials" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Building Materials</h3>
                <p>Premium laminates, MR, BWR, BWP & Marine grade plywood</p>
              </div>
            </Link>

            <Link href="/products/agriculture" className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image src="/agri_equipment.png" alt="Agricultural Equipment" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Agricultural Equipment</h3>
                <p>Water sprinklers, rain guns, drip irrigation & hoses</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <div className={styles.whyUsHeader}>
            <h2 className={styles.sectionTitle}>Why Partner With Us?</h2>
            <p className={styles.sectionDesc}>We don't just export products; we export values and reliability.</p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <ShieldCheck size={40} className={styles.featureIcon} />
              <h4>Certified Quality</h4>
              <p>Strict quality control processes ensuring global compliance and standards for every shipment.</p>
            </div>
            <div className={styles.featureCard}>
              <Globe size={40} className={styles.featureIcon} />
              <h4 >Global Reach</h4>
              <p>Seamless logistics and export capabilities to over 40+ countries across the globe.</p>
            </div>
            <div className={styles.featureCard}>
              <Leaf size={40} className={styles.featureIcon} />
              <h4>Sustainable Practices</h4>
              <p>Committed to eco-friendly manufacturing, fair trade, and reducing our carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
