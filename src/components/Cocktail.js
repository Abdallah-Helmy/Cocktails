import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './AppContext';
import Loading from './Loading';
import './style.css';
import './CocktailStyle.css';

function Cocktail() {
  const { cocktailsinfo, SearchValue, loading, SignleCoctail } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  let newItems = cocktailsinfo.filter(item => {
    const { strDrink: name } = item;
    return name.toLowerCase().search(SearchValue.toLowerCase()) >= 0;
  });

  if (newItems.length === 0) {
    return (
      <div className="not-match">
        <div className="container">
          <h1>No Matched Items Found</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="cocktail">
      <div className="container">
        <div className="heading">cocktails</div>
        <div className="main-content">
          {newItems.map(item => {
            const { idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass } = item;
            return (
              <div className="card" key={id}>
                <img src={image} alt="" />
                <div className="about-cocktail">
                  <h2>{name}</h2>
                  <h3>{glass}</h3>
                  <p>{info}</p>
                  <Link to={`/Cocktail/${id}`}>
                    <button onClick={() => SignleCoctail(id)}>details</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Cocktail;
