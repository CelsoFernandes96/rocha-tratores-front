import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <main className={styles.page}>
      <div className="container">
        <h1>Sobre a Rocha Tratores</h1>
        <div className={styles.content}>
          <p>
            A Rocha Tratores atua no mercado de equipamentos e implementos agrícolas,
            oferecendo tratores, implementos, peças e acessórios para o campo e jardim.
          </p>
          <p>
            Nossa missão é levar qualidade, durabilidade e um atendimento próximo
            aos produtores e profissionais do setor.
          </p>
          <div className={styles.services}>
            <h2>Nossos Serviços</h2>
            <ul>
              <li>Venda de tratores e implementos agrícolas</li>
              <li>Peças e acessórios para máquinas agrícolas</li>
              <li><strong>Manutenção de máquinas agrícolas</strong></li>
              <li>Assistência técnica especializada</li>
            </ul>
          </div>
          <p>
            Entre em contato conosco para orçamentos e dúvidas.
          </p>
        </div>
      </div>
    </main>
  )
}
