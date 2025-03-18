import React, { useState } from 'react';
import { Button } from '../components/Button';

function AddItem({ isOpen, onClose, onAddItem }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !price.trim()) {return;}
    if (isNaN(price)) {return;}

    onAddItem({ title, description, price });
    setTitle('');
    setDescription('');
    setPrice('');

  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {setPrice(value);}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Цена" value={price} onChange={handlePriceChange} className="block w-full p-2 mb-2 border rounded"/>
          <div className="flex">
            <Button type="submit" size="medium" color="secondary" title="Добавить" onClick={handleSubmit}/>
            <Button size="medium" color="primary" title="Закрыть" onClick={onClose} className="ml-2"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;