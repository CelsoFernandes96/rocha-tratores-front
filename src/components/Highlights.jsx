import styles from './Highlights.module.css'

const items = [
  {
    title: 'Cartão em até 12x',
    desc: 'Parcelamos suas compras em até 12x sem juros no cartão.',
    icon: 'card',
  },
  {
    title: 'Visite nossa loja',
    desc: 'Conheça nossos equipamentos e receba orientação técnica.',
    icon: 'store',
  },
  {
    title: 'Frete para todo Brasil',
    desc: 'Entregas em todo o país. Consulte valores no checkout.',
    icon: 'truck',
  },
  {
    title: 'Qualidade garantida',
    desc: 'Produtos originais e assistência técnica especializada.',
    icon: 'shield',
  },
  {
    title: 'Atendimento humanizado',
    desc: 'Fale com nossa equipe por telefone ou WhatsApp.',
    icon: 'chat',
  },
]

const icons = {
  card: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
    </svg>
  ),
  store: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  chat: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

export default function Highlights() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.item}>
              <span className={styles.icon}>{icons[item.icon]}</span>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
