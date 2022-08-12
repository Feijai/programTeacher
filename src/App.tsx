import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <Routes>
        <Route path="/" element={< Home />} />

      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
