import { useState, useEffect } from "react";
import Section from "../components/Section";
import Card from "../components/Card"

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

        <Section title="Eletrônicos">
          {eletricProducts.map(product => {
            return(
              <Card  title={product.title} image={product.image} price={product.price} />
            )
          })}
        </Section>
        
         <Section title="Joias">
          {jeweleryProducts.map(product => {
            return(
              <Card  title={product.title} image={product.image} price={product.price} />
            )
          })}
        </Section>

        <Section title="Roupas Masculinas">
          {mensProducts.map(product => {
            return(
              <Card  title={product.title} image={product.image} price={product.price} />
            )
          })}
        </Section>
    </div>
  );
}
