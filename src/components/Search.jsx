import Button from './Button';

import '../styles/search.css';

const Search = () => {
  return (
    <div className='search'>
      <div className='search__box'>
        <input type='text' placeholder='Busca tus productos aquí' className='search__box--input' />
        <Button className='search__box--btn' variant='primary'>
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default Search;
