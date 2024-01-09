import React, { useEffect } from 'react';
import './Treninzi.css';

function Treninzi() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example categories and services - modify as needed
  const categories = {
    'Stomak': [
      { service: 'Trbusnjaci', price: '4 x 10' },
      { service: 'Biciklica', price: '3 x 2min' }
    ],
    'Ramena': [
      { service: 'Propadanja', price: '4 x 10' },
      { service: 'Sprava', price: '4 x 10' }
    ],
    'Ledja': [
      { service: 'Veslanje', price: '2 x 5min' },
      { service: 'Plivanje', price: '10 x duzina' }
    ],
    // Add more categories and services here
  };

  return (
    <div className="treninzi">
      <h1> Treninzi </h1>
      <div className="pricing-grid">
        {Object.keys(categories).map(category => (
          <div className="category-table" key={category}>
            <h2>{category}</h2>
            <table>
              <tbody>
                {categories[category].map(({ service, price }) => (
                  <tr key={service}>
                    <td>{service}</td>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treninzi;
