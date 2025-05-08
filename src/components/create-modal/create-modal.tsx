import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';
import { useCategoryData } from '../../hooks/useCategoryData'; 

import "./modal.css";
import { CategoryData } from '../../interface/CategoryData';
import { useCategoryDataMutate } from '../../hooks/useCategoryDataMutate';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const { categories } = useCategoryData();
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [image, setImage] = useState("");
    const [categoryId, setCategoryId] = useState(""); 
    const { mutate: mutate1, isSuccess } = useFoodDataMutate();
    const { mutate: mutate2, isSuccess: isSucess2 } = useCategoryDataMutate();
  
    const submitFood = () => {
      if (!title || !price || !image || !categoryId) {
        alert("Preencha todos os campos");
        return;
      } 
      const foodData: FoodData = {
        title,
        price,
        image,
        category: {
            id: Number(categoryId)
        },
      };

      if (categories?.length === 0) {
        alert("Cadastre uma categoria antes de cadastrar um item no cardápio");
        return;  
      }
  
      mutate1(foodData);
    };

    const submitCategory = () => {
        if (!category) {
            alert("Preencha todos os campos");
            return;
        }
        const categoryData: CategoryData = {
            name: category,
        };
        mutate2(categoryData);
    };
  
    useEffect(() => {
      if (isSuccess && isSuccess) {
        closeModal();
      }
    }, [isSuccess]);

    useEffect(() => {
      if (isSucess2 && isSucess2) {
        closeModal();
      }
    }, [isSucess2]);
  
    return (
      <div className="modal-overlay">
        <div className="modal-body-container">
          <div className="modal-body-1">
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container">
              <Input label="Título" value={title} updateValue={setTitle} />
              <Input label="Preço" value={price} updateValue={setPrice} />
              <Input label="Imagem em Link" value={image} updateValue={setImage} />
    
              <label>Categoria</label>
              <select
                value={categoryId}
                onChange={(event) => {
                  setCategoryId(event.target.value);
                }}
                className="select"
              >
                <option value="">Selecione uma categoria</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </form>
            <button onClick={submitFood} className="btn-secondary">
                Postar
            </button>
          </div>
    
          <div className="modal-body-2">
            <h2>Cadastre uma nova categoria no cardápio</h2>
            <form className="input-container">
              <Input label="Nome da Categoria" value={category} updateValue={setCategory} />
            </form>
            <button onClick={submitCategory} className="btn-secondary">
              Postar
            </button>
          </div>
        </div>
      </div>
    );
  }