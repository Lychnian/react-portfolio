import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About'); // Set 'About' as the initial page

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='body'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'About' && <About />}
      {currentPage === 'Portfolio' && <Portfolio />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Resume' && <Resume />}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
