import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import WishlistScreen from './Screens/WishlistScreen'
import Details from './Screens/detail'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/search/:keyword' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<SignupScreen />} />
            <Route path='/wishlist' element={<WishlistScreen />} />
            <Route path='/details' element={<Details />} />
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
