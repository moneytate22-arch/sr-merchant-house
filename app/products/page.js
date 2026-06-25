import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: "Product Catalog | SR Merchant House",
  description: "Explore our comprehensive global export catalog.",
};

const categories = [
  {
    id: 'hdpe-pipes',
    title: 'HDPE Pipes & Fittings',
    description: 'Premium pressure pipes for water and gas. All SDR ratings and PE grades (PE100/PE80) available for UAE and global markets.',
    image: '/hdpe_pipes.png'
  },
  {
    id: 'organic-products',
    title: 'Organic Products',
    description: 'Cold-pressed oils, Millets, Jaggery, Pure Cow Ghee, and Traditional Iron Utensils. Sustainably sourced for health and wellness.',
    image: '/organic_oils.png'
  },
  {
    id: 'jute-packaging',
    title: 'Eco-Friendly Packaging',
    description: 'Sustainable jute shopping bags, cotton canvas totes, and custom textiles manufactured with fair trade practices.',
    image: '/jute_bags.png'
  },
  {
    id: 'agro-commodities',
    title: 'Agro Commodities & Spices',
    description: 'Premium Indian spices including Turmeric and Chilli powder, along with fine rice varieties like Basmati and Rajamudi.',
    image: '/agro_spices.png'
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    description: 'High-grade Laminates and Plywood (MR, BWR, BWP, Marine grade) for modern interior and architectural needs.',
    image: '/wood_laminates.png'
  },
  {
    id: 'agriculture',
    title: 'Agricultural Equipment',
    description: 'Advanced irrigation solutions including water sprinklers, rain guns, lay-flat hoses, and LLDPE Drip Lateral Pipes.',
    image: '/agri_equipment.png'
  }
];

export default function ProductsCatalog() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerArea}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Global Catalog</h1>
          <p className={styles.pageSubtitle}>Premium products manufactured and sourced for the world.</p>
        </div>
      </div>

      <div className={`container ${styles.catalogContainer}`}>
        {categories.map((cat, index) => (
          <div key={cat.id} className={`${styles.categoryRow} ${index % 2 !== 0 ? styles.rowReverse : ''}`}>
            <div className={styles.imageCol}>
              {cat.image ? (
                <Image src={cat.image} alt={cat.title} fill style={{ objectFit: 'cover' }} />
              ) : (
                <div className={styles.fallbackIcon}>{cat.icon}</div>
              )}
            </div>
            <div className={styles.contentCol}>
              <h2 className={styles.catTitle}>{cat.title}</h2>
              <p className={styles.catDesc}>{cat.description}</p>
              <Link href={`/products/${cat.id}`} className={styles.exploreBtn}>
                Explore Category <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
