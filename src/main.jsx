import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductSection from './components/ProductSection/ProductSection.jsx'
import SearchBar from "./components/SearchBar/SearchBar.jsx"
import Produto from "./components/Products/produto.jsx"

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class = "divona">
      <h1>7 Pontos</h1>
      <SearchBar/>
      <ProductSection isVertical = {true}/>
      <Produto/>
    </div>

    <div>
      <h1>Cliente +</h1>
      <div class = "divVermelha">Promo</div>
      <ProductSection isVertical={false} isPromo={true}/>

      <h1>Outros</h1>
      <div class = "divVerde">Saudável</div>
      <ProductSection isVertical={false} isPromo={false}/>
    </div>
  </StrictMode>,
)
