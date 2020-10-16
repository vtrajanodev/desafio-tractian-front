import React from 'react';
import Header from './components/header'
import './styles.css'
import Routes from './routes'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
