import Image from 'next/image';
import Link from 'next/link';
import styles from '../shared.module.css';

export const metadata = {
  title: "Agricultural Equipment | SR Merchant House",
  description: "Advanced irrigation solutions including water sprinklers, rain guns, lay-flat hoses, and LLDPE Drip Lateral Pipes.",
};

const items = [
  {
    category: "Irrigation Systems",
    image: "/agri_equipment.png",
    description: "Efficient and robust water delivery systems designed to maximize crop yield and conserve water resources.",
    items: [
      { name: "Water Sprinklers", detail: "Impact and micro-sprinklers for uniform water distribution" },
      { name: "Rain Guns", detail: "High volume, large radius coverage for extensive fields" },
      { name: "Drip Irrigation Lateral Pipes", detail: "LLDPE material, UV stabilized, precise water control" }
    ]
  },
  {
    category: "Hoses & Fittings",
    image: "/hdpe_pipes.png",
    description: "Durable fluid transport solutions for demanding agricultural environments.",
    items: [
      { name: "Lay-Flat Hoses", detail: "Flexible, high-pressure delivery hoses for mobile pumping" },
      { name: "HDPE Irrigation Mains", detail: "Primary water supply lines for farm networks" },
      { name: "Quick-Couple Fittings", detail: "Leak-proof, easy to assemble connections" }
    ]
  }
];

export default function Agriculture() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/agri_equipment.png" alt="Agriculture Equipment" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Farm Efficiency</div>
          <h1 className={styles.title}>Agricultural <br/>Equipment</h1>
          <p className={styles.subtitle}>Empowering global agriculture with advanced irrigation solutions, durable hoses, and water management systems.</p>
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
