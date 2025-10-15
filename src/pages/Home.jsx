import { useState, useEffect } from "react";
import Section from "../components/Section";

export default function Home() {
  const [eletricProducts, setEletricProducts]  = useState([])
  const [mensProducts, setMensProducts]  = useState([])
  const [jeweleryProducts, setJeweleryProducts]  = useState([])
   const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}men's%20clothing`)
    .then(response => response.json())
    .then(data => setMensProducts(data))
    .catch(error => console.error(error))
    
  })

  useEffect(() => {
    fetch(`${API}electronics`)
    .then(response => response.json())
    .then(data => setEletricProducts(data))
    .catch(error => console.error(error))
    
  })
  useEffect(() => {
    fetch(`${API}jewelery`)
    .then(response => response.json())
    .then(data => setJeweleryProducts(data))
    .catch(error => console.error(error))
    
  })

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <Section title="Eletrônicos">
          {eletricProducts.map(product => {
            return(
              <p>{product.title}</p>
            )
          })}
        </Section>
        
         <Section title="Joias">
          {jeweleryProducts.map(product => {
            return(
              <p>{product.title}</p>
            )
          })}
        </Section>

        <Section title="Roupas Masculinas">
          {mensProducts.map(product => {
            return(
              <p>{product.title}</p>
            )
          })}
        </Section>
    </div>
  );
}
