import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getProductBySlug } from '../data/products'
import { formatPrice } from '../utils/format'
import { WHATSAPP_URL } from '../utils/contact'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <main className={styles.page}>
        <div className="container">
          <p>Produto não encontrado.</p>
          <Link to="/produtos">Voltar aos produtos</Link>
        </div>
      </main>
    )
  }

  const installments = product.installments ?? 10
  const installmentValue = product.price / installments

  const handleAdd = () => {
    addToCart({ ...product, sku: null }, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link to="/">Início</Link>
          <span>/</span>
          <Link to="/produtos">Produtos</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <div className={styles.layout}>
          <div className={styles.gallery}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.info}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>
              <span className={styles.current}>{formatPrice(product.price)}</span>
              <span className={styles.installments}>
                ou {installments}x de {formatPrice(installmentValue)} sem juros no cartão
              </span>
            </div>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.actions}>
              <div className={styles.qty}>
                <label>Quantidade</label>
                <div className={styles.qtyButtons}>
                  <button
                    type="button"
                    onClick={() => setQty((n) => Math.max(1, n - 1))}
                    aria-label="Diminuir"
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((n) => n + 1)}
                    aria-label="Aumentar"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                className={styles.addBtn}
                onClick={handleAdd}
              >
                {added ? 'Adicionado ✓' : 'Comprar'}
              </button>
            </div>
            <p className={styles.help}>
              Dúvidas? <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
