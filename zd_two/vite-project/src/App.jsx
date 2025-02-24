
import './App.css'

import Header from "./components/Header"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
