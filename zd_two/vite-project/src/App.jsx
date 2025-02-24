
import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import BlogPage from './pages/Blog'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
