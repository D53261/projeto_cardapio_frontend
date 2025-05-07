import React from 'react';
import './card.css';

interface CardProps {
  id: number;
  price: number;
  title: string;
  image: string;
  onDelete(id: number): void;
}

function Card({ id, price, title, image, onDelete }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p><b>Valor:</b> R${price.toFixed(2)}</p>
      <button className='delete-button' onClick={() => onDelete(id)}>Excluir</button>
    </div>
  );
}

export default Card;
