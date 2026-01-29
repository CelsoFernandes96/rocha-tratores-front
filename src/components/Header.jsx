import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categories } from '../data/products'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className={styles.header}>
      <div className={styles.promoBar}>
        <div className="container">
          <p className={styles.promoText}>
            5% OFF com o cupom <strong>PRIMEIRACOMPRA5!</strong>
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.mainInner}>
            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <span /><span /><span />
            </button>
            <Link to="/" className={styles.logo} aria-label="Rocha Tratores - Início">
              <img src="/logo.svg" alt="Rocha Tratores" className={styles.logoImg} />
            </Link>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
              <NavLink to="/lojas" onClick={() => setMenuOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Nossa Loja
              </NavLink>
              <NavLink to="/conta" onClick={() => setMenuOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Conta
              </NavLink>
              <NavLink to="/carrinho" onClick={() => setMenuOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                Pedidos
              </NavLink>
              <NavLink to="/contato" onClick={() => setMenuOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contatos
              </NavLink>
            </nav>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.searchBtn}
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Buscar"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              </button>
              <Link to="/carrinho" className={styles.cartBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
        {searchOpen && (
          <div className={styles.searchBar}>
            <div className="container">
              <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
                <input type="search" placeholder="Buscar produtos..." autoFocus />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <nav className={styles.categories}>
        <div className="container">
          <div className={styles.categoriesInner}>
            <Link to="/produtos" className={styles.catLink}>Todos</Link>
            {categories.map((c) => (
              <Link key={c.id} to={`/produtos?cat=${c.id}`} className={styles.catLink}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
