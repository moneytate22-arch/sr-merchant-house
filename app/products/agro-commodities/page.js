import Image from 'next/image';
import Link from 'next/link';
import styles from '../shared.module.css';

export const metadata = {
  title: "Agro Commodities & Spices | SR Merchant House",
  description: "Premium Indian spices, turmeric, chilli powder, and fine rice varieties exported globally.",
};

const items = [
  {
    category: "Premium Spices",
    image: "/agro_spices.png",
    description: "Sourced from the finest farms in India, our spices are known for their vibrant color, pungent aroma, and high essential oil content.",
    items: [
      { name: "Turmeric Powder", detail: "High curcumin content, deep golden color" },
      { name: "Red Chilli Powder", detail: "Perfect balance of heat and color" },
      { name: "Whole Spices", detail: "Cardamom, Cumin, Coriander, Black Pepper" }
    ]
  },
  {
    category: "Rice Varieties",
    image: "/rice_product.jpg",
    description: "We export the finest grains of rice, meticulously milled and sorted to ensure uniform size, purity, and exceptional taste.",
    items: [
      { name: "Basmati Rice", detail: "Extra-long grain, aromatic, aged to perfection" },
      { name: "Sona Masoori", detail: "Lightweight, aromatic medium-grain rice" },
      { name: "Rajamudi Rice", detail: "Rare and treasured variety, highly nutritious" },
      { name: "Parboiled Rice", detail: "Nutrient-retained, easy to cook" }
    ]
  }
];

export default function AgroCommodities() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/agro_spices.png" alt="Agro Commodities" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Premium Quality Exports</div>
          <h1 className={styles.title}>Agro Commodities <br/>& Spices</h1>
          <p className={styles.subtitle}>Delivering the authentic taste of India to the world. High-grade spices and premium rice varieties exported in bulk.</p>
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
