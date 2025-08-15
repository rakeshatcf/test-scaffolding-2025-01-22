import React from 'react';
import DashboardPage from './pages/DashboardPage';
import ProductCatalogPage from './pages/ProductCatalogPage';
import MainLayout from './layouts/MainLayout';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="App">
      <DashboardPage />
    </div>
  );
}

export default App;
