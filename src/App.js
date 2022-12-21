import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, Products, About, ErrorPage } from './pages'
import logo from './logo.svg'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
