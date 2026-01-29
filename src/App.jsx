import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Conta from './pages/Conta'
import Sobre from './pages/Sobre'
import Lojas from './pages/Lojas'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produtos/:slug" element={<ProductDetail />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/lojas" element={<Lojas />} />
      </Route>
    </Routes>
  )
}
