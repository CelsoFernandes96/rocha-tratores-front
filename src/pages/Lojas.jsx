import { WHATSAPP_URL, GOOGLE_MAPS_URL } from '../utils/contact'
import styles from './Lojas.module.css'

function GoogleMapsIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Lojas() {
  return (
    <main className={styles.page}>
      <div className="container">
        <h1>Nossas lojas</h1>
        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Rocha Tratores – Campinas</h2>
            <p>Rua Dona Eglantina Botaccini Duarte, 35</p>
            <p>Campinas, SP, Brazil</p>
            <p className={styles.hours}>Segunda a sexta, das 08:00 às 17:30</p>
            <div className={styles.actions}>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                <GoogleMapsIcon className={styles.mapIcon} />
                Ver no Google Maps
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
