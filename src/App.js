import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

import './styles.css';


function App() {

  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
  <div className='h-105'>
    <Header handlePageChange={ handlePageChange }/>
    <Project currentPage={ currentPage }/>
    <Footer />
  </div>
  );
}

export default App;
