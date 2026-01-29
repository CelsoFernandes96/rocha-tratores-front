import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, getProductsByCategory } from '../data/products'
import styles from './Products.module.css'

export default function Products() {
  const [params] = useSearchParams()
  const cat = params.get('cat') || ''
  const products = getProductsByCategory(cat || null)
  const currentCategory = categories.find((c) => c.id === cat)

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.head}>
          <h1>{currentCategory ? currentCategory.name : 'Todos os produtos'}</h1>
          <p className={styles.count}>{products.length} produto(s)</p>
        </div>
        <nav className={styles.filters}>
          <Link to="/produtos" className={!cat ? styles.active : ''}>
            Todos
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/produtos?cat=${c.id}`}
              className={cat === c.id ? styles.active : ''}
            >
              {c.name}
            </Link>
          ))}
        </nav>
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} showCategory />
          ))}
        </div>
        {products.length === 0 && (
          <p className={styles.empty}>Nenhum produto encontrado nesta categoria.</p>
        )}
      </div>
    </main>
  )
}
