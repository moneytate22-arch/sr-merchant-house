import Image from 'next/image';
import Link from 'next/link';
import styles from '../shared.module.css';

export const metadata = {
  title: "Eco-Friendly Packaging | SR Merchant House",
  description: "Sustainable jute shopping bags, canvas totes, and custom eco-packaging.",
};

const items = [
  {
    category: "Jute Shopping Bags",
    image: "/jute_bags.png",
    description: "Eco-friendly, durable, and stylish shopping companions. 100% Natural Jute, 300-400 GSM.",
    items: [
      { name: "Standard Jute Tote", detail: "14\" x 16\" x 6\" - Reusable, Bio-degradable" },
      { name: "Premium Printed Bags", detail: "Customizable designs for retail brands" }
    ]
  },
  {
    category: "Cotton Canvas Totes",
    image: "/jute_bags.png",
    description: "Premium quality organic cotton canvas totes for everyday use. Heavy-duty and washable.",
    items: [
      { name: "Canvas Grocery Bag", detail: "280 GSM, 15\" x 15\"" },
      { name: "Custom Canvas Bags", detail: "Made to order with brand logos" }
    ]
  },
  {
    category: "Sustainable Packaging",
    image: "/jute_bags.png",
    description: "Custom zero-waste packaging solutions for eco-conscious brands using recycled paper and jute blends.",
    items: [
      { name: "Jute Drawstring Pouches", detail: "Perfect for cosmetics and small items" },
      { name: "Custom Rigid Boxes", detail: "Branding friendly, sustainable core" }
    ]
  },
  {
    category: "Custom Textiles",
    image: "/jute_bags.png",
    description: "Tailored fabric solutions for home and fashion using Cotton and Jute blends (200-500 GSM).",
    items: [
      { name: "Fabric Rolls", detail: "Available in natural dyes" },
      { name: "Cut Pieces", detail: "Pre-cut versatile fabric pieces" }
    ]
  }
];

export default function JutePackaging() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/jute_bags.png" alt="Eco Packaging" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Sustainable Packaging</div>
          <h1 className={styles.title}>Eco-Friendly <br/>Jute & Canvas</h1>
          <p className={styles.subtitle}>Premium sustainable jute, cotton, and canvas products crafted with care for the planet and exported globally from India.</p>
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
