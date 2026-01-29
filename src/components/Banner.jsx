import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Banner.module.css'

const slides = [
  {
    title: 'Rocha Tratores',
    subtitle: 'Equipamentos e implementos agrícolas para o campo',
    cta: 'Ver produtos',
    href: '/produtos',
    bg: 'linear-gradient(135deg, #2d5a27 0%, #1e3d1a 100%)',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop',
  },
  {
    title: 'Tratores e Implementos',
    subtitle: 'Qualidade e durabilidade para sua lavoura',
    cta: 'Tratores',
    href: '/produtos?cat=tratores',
    bg: 'linear-gradient(135deg, #c47f2a 0%, #a3661f 100%)',
    image: 'https://images.unsplash.com/photo-1625245488192-273a83784f5b?w=1200&h=500&fit=crop',
  },
  {
    title: 'Peças e Acessórios',
    subtitle: 'Tudo que você precisa para manutenção',
    cta: 'Peças',
    href: '/produtos?cat=pecas',
    bg: 'linear-gradient(135deg, #3d6b35 0%, #2d5a27 100%)',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop',
  },
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[index]

  return (
    <section className={styles.banner}>
      <div className={styles.slides}>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === index ? styles.active : ''}`}
            style={{ background: s.bg }}
          >
            <div className={styles.bgImage} style={{ backgroundImage: `url(${s.image})` }} />
            <div className={styles.overlay} />
            <div className="container">
              <div className={styles.content}>
                <h2 className={styles.title}>{s.title}</h2>
                <p className={styles.subtitle}>{s.subtitle}</p>
                <Link to={s.href} className={styles.cta}>{s.cta}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
