import Image from 'next/image';
import Link from 'next/link';
import styles from '../shared.module.css';

export const metadata = {
  title: "Organic Products | SR Merchant House",
  description: "Premium cold-pressed oils, millets, jaggery, ghee, honey, and traditional utensils.",
};

const organicItems = [
  {
    category: "Cold-Pressed Oils",
    image: "/organic_oils.png",
    description: "Extracted using traditional wooden Kachi Ghani press techniques to retain 100% natural nutrients, flavor, and aroma. Zero cholesterol and trans-fat free.",
    items: [
      { name: "Almond Oil", detail: "Rich in protein, ideal for nutrition boost" },
      { name: "Black Sesame Oil", detail: "Lowers inflammation, improves digestion" },
      { name: "Virgin Coconut Oil", detail: "Meticulously extracted from fresh coconuts" },
      { name: "Yellow Mustard Oil", detail: "Strengthens immunity, natural pungency" },
      { name: "Walnut Oil", detail: "Omega-3 and Omega-6 rich" },
      { name: "Flaxseed Oil", detail: "Essential ALA powerhouse" }
    ]
  },
  {
    category: "Healthy Millets",
    image: "/organic_millets.png",
    description: "Nutrient-rich, gluten-free traditional grains cultivated without harmful chemicals. Packed with fiber and antioxidants.",
    items: [
      { name: "Barnyard Millet", detail: "Sustained energy, aids digestion" },
      { name: "Foxtail Millet", detail: "Wholesome and balanced nutrition" },
      { name: "Kodo Millet", detail: "Balances blood sugar levels" },
      { name: "Pearl Millet", detail: "Rich source of protein and fiber" }
    ]
  },
  {
    category: "Pure Cow Ghee & Honey",
    image: "/cow_ghee_honey.png",
    description: "Ethically sourced from nature. Our ghee supports Desi Cow communities, and our honey is sourced from pristine wild habitats.",
    items: [
      { name: "Pure Cow Ghee", detail: "Golden hue, essential nutrients, traditional craft" },
      { name: "Wild Forest Honey", detail: "Unprocessed, rich in enzymes and antioxidants" }
    ]
  },
  {
    category: "Traditional Cast Iron Utensils",
    image: "/traditional_cast_iron.png",
    description: "Handcrafted cast iron cookware that naturally fortifies your food with iron and offers unparalleled durability.",
    items: [
      { name: "Amboli & Dosa Tawa", detail: "Perfect heat distribution" },
      { name: "Kadai & Fry Pan", detail: "Heavy duty, natural non-stick over time" },
      { name: "Paddu Tawa", detail: "Traditional cavity pan" }
    ]
  }
];

export default function OrganicProducts() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/organic_oils.png" alt="Organic Products" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>100% Natural & Pure</div>
          <h1 className={styles.title}>Organic <br/>Wellness Range</h1>
          <p className={styles.subtitle}>Our curated collection of premium cold-pressed oils, ancient millets, natural sweeteners, and traditional cookware designed for a healthier lifestyle.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            {organicItems.map((section, idx) => (
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
