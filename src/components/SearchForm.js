import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './AppContext';
import './style.css';
import './SearchFormStyle.css';

function SearchForm() {
  const { SearchValue, setSearchValue } = useGlobalContext();
  const inputRef = useRef();

  const ChangeHandler = () => {
    setSearchValue(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="search">
          <h2>Search Your Favorite Cocktail</h2>
          <form action="">
            <input type="text" onChange={ChangeHandler} ref={inputRef} value={SearchValue} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
