import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './Page';

const pages = ["", "", "Contact", "Resume"];

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div className="wrapper">
      <Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
 