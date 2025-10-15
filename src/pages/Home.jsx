import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts]  = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error))
    
  })

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        
    </div>
  );
}
