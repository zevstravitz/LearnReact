import React, { useEffect, useState } from 'react';
import Item from './components/Item'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="products-page">
        <div className="products-filter">
          Test
        </div>
        <div className="products-grid">
          {products.map((product, i) => (
            <Item product={product} key={i}></Item>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;