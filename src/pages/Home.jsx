import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import Brands from '../components/Brands'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts } from '../data/products'
import styles from './Home.module.css'

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <>
      <Banner />
      <Highlights />
      <section className={styles.products}>
        <div className="container">
          <div className={styles.head}>
            <h2>Confira nossos lançamentos</h2>
            <Link to="/produtos" className={styles.link}>Ver todos</Link>
          </div>
          <div className={styles.grid}>
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} showCategory />
            ))}
          </div>
        </div>
      </section>
      <Brands />
    </>
  )
}
