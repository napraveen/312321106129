import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4MTc4NTEwLCJpYXQiOjE3MTgxNzgyMTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ2ZjlmNGQwLWZhNTAtNGY2Yi1hOGU1LTY4ZWM4NTBkNmQ0MSIsInN1YiI6Im5hcHJhdmVlbjAzQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZG1lZCIsImNsaWVudElEIjoiZDZmOWY0ZDAtZmE1MC00ZjZiLWE4ZTUtNjhlYzg1MGQ2ZDQxIiwiY2xpZW50U2VjcmV0IjoiQmRjZ1BWSnN5V21wRUh2byIsIm93bmVyTmFtZSI6IlByYXZlZW4gTiIsIm93bmVyRW1haWwiOiJuYXByYXZlZW4wM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIzMTIzMjExMDYxMjkifQ.kzL-FqMJ244HAx37ceQGhnHuPG9a9MMODo7NcGqRmrs',
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Datas:</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
