import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import styles from './Cart.module.css'

export default function Cart() {
  const { cart, cartTotal, cartCount, removeFromCart, updateQty } = useCart()

  if (cart.length === 0) {
    return (
      <main className={styles.page}>
        <div className="container">
          <div className={styles.empty}>
            <h1>Carrinho vazio</h1>
            <p>Adicione produtos para continuar.</p>
            <Link to="/produtos" className={styles.cta}>Ver produtos</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Carrinho ({cartCount} {cartCount === 1 ? 'item' : 'itens'})</h1>
        <div className={styles.layout}>
          <div className={styles.items}>
            {cart.map((item) => (
              <div key={`${item.id}-${item.sku ?? 'x'}`} className={styles.item}>
                <Link to={`/produtos/${item.slug}`} className={styles.thumb}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className={styles.details}>
                  <h3><Link to={`/produtos/${item.slug}`}>{item.name}</Link></h3>
                  <div className={styles.qty}>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, item.sku, item.qty - 1)}
                      aria-label="Diminuir"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, item.sku, item.qty + 1)}
                      aria-label="Aumentar"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeFromCart(item.id, item.sku)}
                  >
                    Remover
                  </button>
                </div>
                <div className={styles.priceCol}>
                  <span className={styles.unit}>{formatPrice(item.price)} un.</span>
                  <span className={styles.total}>{formatPrice(item.price * item.qty)}</span>
                </div>
              </div>
            ))}
          </div>
          <aside className={styles.summary}>
            <h2>Resumo</h2>
            <div className={styles.line}>
              <span>Subtotal ({cartCount} itens)</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className={styles.totalLine}>
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <p className={styles.note}>Frete e pagamento calculados no checkout.</p>
            <Link to="/produtos" className={styles.keep}>Continuar comprando</Link>
            <button type="button" className={styles.checkout} disabled>
              Finalizar compra (em breve)
            </button>
          </aside>
        </div>
      </div>
    </main>
  )
}
