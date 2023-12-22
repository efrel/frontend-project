import '../styles/category-menu.css';
import Button from './Button';
import {useEffect, useState} from 'react';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./src/data/categories.json');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error al cargar los categorias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <aside className='category-menu'>
      {categories.map(category => (
        <Button variant='secondary' key={category.id} className='category-menu__item'>
          {category.name}
        </Button>
      ))}
    </aside>
  );
};

export default CategoryMenu;
