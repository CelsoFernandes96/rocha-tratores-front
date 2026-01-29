# Rocha Tratores – E-commerce

Site e-commerce em React para **Rocha Tratores**, inspirado no [Procampo](https://www.procampo.com.br/).  
Equipamentos e implementos agrícolas para o campo e jardim.

## Stack

- **React 18** + **Vite**
- **React Router** v6
- CSS Modules

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` – servidor de desenvolvimento
- `npm run build` – build para produção
- `npm run preview` – preview do build

## Estrutura

- `src/components/` – Header, Footer, ProductCard, Banner, Highlights, Layout
- `src/pages/` – Home, Products, ProductDetail, Cart, Contact, Sobre, Lojas
- `src/context/` – CartContext (carrinho)
- `src/data/` – produtos e categorias (mock)
- `src/utils/` – formatação (preço)

## Funcionalidades

- Home com banner rotativo, destaques e vitrine de lançamentos
- Listagem de produtos com filtro por categoria
- Página do produto com preço, parcelamento e “Comprar”
- Carrinho (adicionar, alterar quantidade, remover)
- Contato (formulário + telefone/WhatsApp/e-mail)
- Páginas Sobre e Nossas Lojas
