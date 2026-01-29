import { useState, useEffect } from 'react'
import styles from './Brands.module.css'

const brands = [
  {
    name: 'Branco',
    logo: '/logo-branco.png'
  },
  {
    name: 'Kawashima',
    logo: '/logo-kawashima.png'
  },
  {
    name: 'Chiaperini',
    logo: '/logo-chiaperini.png'
  },
  {
    name: 'Briggs & Stratton',
    logo: '/logo-briggs-stratton.png'
  },
  {
    name: 'Jacto',
    logo: '/logo-jacto.png'
  },
  {
    name: 'Kärcher',
    logo: '/logo-karcher.png'
  },
  {
    name: 'Tramontina',
    logo: '/logo-tramontina.png'
  },
  {
    name: 'Nakashi',
    logo: '/logo-nakashi.png'
  },
]

// Split brands into groups of 4
const BRANDS_PER_SLIDE = 4
const slides = []
for (let i = 0; i < brands.length; i += BRANDS_PER_SLIDE) {
  slides.push(brands.slice(i, i + BRANDS_PER_SLIDE))
}

export default function Brands() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Marcas que trabalhamos</h2>
        <div className={styles.carousel}>
          <div className={styles.slidesWrapper}>
            {slides.map((slideGroup, slideIdx) => (
              <div
                key={slideIdx}
                className={`${styles.slide} ${slideIdx === index ? styles.active : ''}`}
              >
                <div className={styles.grid}>
                  {slideGroup.map((brand) => (
                    <div key={brand.name} className={styles.item}>
                      <div className={styles.logoWrapper}>
                        {brand.logo ? (
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className={styles.logo}
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <span
                          className={styles.fallbackName}
                          style={{ display: brand.logo ? 'none' : 'flex' }}
                        >
                          {brand.name}
                        </span>
                      </div>
                    </div>
                  ))}
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
        </div>
      </div>
    </section>
  )
}
