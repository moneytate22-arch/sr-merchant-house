import Image from 'next/image';
import Link from 'next/link';
import styles from '../shared.module.css';

export const metadata = {
  title: "Building Materials | SR Merchant House",
  description: "High-grade Laminates and Plywood for modern interior and architectural needs.",
};

const items = [
  {
    category: "Premium Laminates",
    image: "/wood_laminates.png",
    description: "A vast catalog of decorative laminates offering exceptional durability, scratch resistance, and modern aesthetics.",
    items: [
      { name: "Wood Grain Finishes", detail: "Walnut, Oak, Teak, and Mahogany textures" },
      { name: "Solid Colors & Matt", detail: "Anti-fingerprint, soft-touch finishes" },
      { name: "High Gloss & Textured", detail: "Stone, marble, and metallic surface aesthetics" }
    ]
  },
  {
    category: "Plywood Grades",
    image: "/wood_laminates.png",
    description: "Engineered wood products manufactured with superior bonding strength and dimensional stability for diverse applications.",
    items: [
      { name: "MR Grade (Moisture Resistant)", detail: "Commercial grade for interior furniture and paneling" },
      { name: "BWR/BWP Grade (Boiling Water Resistant/Proof)", detail: "Ideal for kitchens, bathrooms, and humid environments" },
      { name: "Marine Grade Plywood", detail: "IS 710 certified, highly durable for extreme conditions" },
      { name: "Film Faced Plywood", detail: "For concrete shuttering and construction use" }
    ]
  }
];

export default function BuildingMaterials() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/wood_laminates.png" alt="Building Materials" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Architectural Grade</div>
          <h1 className={styles.title}>Laminates <br/>& Plywood</h1>
          <p className={styles.subtitle}>Supplying the construction and interior design industry with high-quality engineered wood products and decorative surfaces.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            {items.map((section, idx) => (
              <div key={idx} className={styles.card}>
                {section.image && (
                  <div className={styles.cardImageWrapper}>
                    <Image src={section.image} alt={section.category} fill style={{ objectFit: 'cover' }} />
                  </div>
                )}
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{section.category}</h2>
                  <p className={styles.cardDesc}>{section.description}</p>
                  <ul className={styles.itemList}>
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemDetail}>{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
