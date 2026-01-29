import { WHATSAPP_URL, TEL_URL } from '../utils/contact'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.info}>
            <h1>Fale conosco</h1>
            <p>
              Estamos à disposição para tirar dúvidas sobre produtos, orçamentos e entrega.
            </p>
            <ul className={styles.contactList}>
              <li>
                <strong>Telefone</strong>
                <a href={TEL_URL}>(19) 99989-9436</a>
              </li>
              <li>
                <strong>WhatsApp</strong>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  (19) 99989-9436
                </a>
              </li>
              <li>
                <strong>E-mail</strong>
                <a href="mailto:vendas@rochatratores.com.br">vendas@rochatratores.com.br</a>
              </li>
              <li>
                <strong>Horário</strong>
                <span>Segunda a sexta, das 08:00 às 17:30</span>
              </li>
            </ul>
            <div className={styles.address}>
              <h2>Nossa loja</h2>
              <p>
                Rua Dona Eglantina Botaccini Duarte, 35<br />
                Campinas, SP, Brazil
              </p>
            </div>
          </div>
          <div className={styles.formWrap}>
            <h2>Envie uma mensagem</h2>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" required placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="phone">Telefone</label>
                <input id="phone" type="tel" placeholder="(19) 99999-9999" />
              </div>
              <div>
                <label htmlFor="msg">Mensagem</label>
                <textarea id="msg" rows={4} required placeholder="Como podemos ajudar?" />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
