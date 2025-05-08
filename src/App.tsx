import { useState } from 'react'
import './App.css'
import Card  from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { useCategoryData } from './hooks/useCategoryData';
import { useFoodDataDelete } from './hooks/useFoodDataDelete';
import { CreateModal } from './components/create-modal/create-modal';
import { useCategoryDataDelete } from './hooks/useCategoryDataDelete';

function App() {
  const { categories } = useCategoryData(); 
  const { data } = useFoodData(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useFoodDataDelete();
  const { mutate: mutate2 } = useCategoryDataDelete();

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const deleteFoodButton = (id: number) => {
    if (!window.confirm('Você tem certeza que deseja excluir esse item?')) return;
    mutate(id);
  };

  const deleteCategoryButton = (id: number) => {
    if (!window.confirm('Você tem certeza que deseja excluir essa categoria?')) return;
    mutate2(id);
  };

  return (
    <div className="container">
      <h1>Cardápio</h1>

      {categories?.length > 0 ? (
        categories.map((item) => (
          <div key={item.id} className="category-section">
            <div className='initial-section'>
              <div className='category-title'>
                <h1>{item.name}</h1>
              </div>
              <div className='button'>
                <button className='delete-button-category' onClick={() => deleteCategoryButton(item.id ?? 0)}>Excluir</button>
              </div>
            </div>
            <div className="card-grid">
              {data
                ?.filter((food) => food.category?.id === item.id) 
                .map((food) => (
                  <Card
                    key={food.id}
                    id={food.id? food.id : 0}
                    price={food.price}
                    title={food.title}
                    image={food.image}
                    onDelete={deleteFoodButton}
                  />
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma categoria encontrada.</p>
      )}

      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button className="btn-novo" onClick={handleOpenModal}>
        {isModalOpen ? 'Fechar' : 'Novo'}
      </button>
    </div>
  );
}

export default App;