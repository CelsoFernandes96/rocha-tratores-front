import { Link } from 'react-router-dom'
import styles from './Conta.module.css'

export default function Conta() {
  return (
    <main className={styles.page}>
      <div className="container">
        <h1>Minha conta</h1>
        <p className={styles.desc}>
          Acesse sua conta para acompanhar pedidos e gerenciar seus dados.
        </p>
        <div className={styles.actions}>
          <Link to="/carrinho" className={styles.cta}>Ver carrinho</Link>
          <Link to="/contato" className={styles.ctaSecondary}>Contato</Link>
        </div>
      </div>
    </main>
  )
}
