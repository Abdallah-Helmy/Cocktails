import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../components/AppContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import '../components/style.css';
import './SinglepageStyle.css';

function SignleCoctails() {
  const { itemid } = useParams();
  const navigate = useNavigate();
  const { id } = useGlobalContext();
  const [singleItem, setsingleItem] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemid}`)
      .then(res => {
        setsingleItem(res.data.drinks);
        setloading(false);
      })
      .catch(() => console.log('error'));
  }, [itemid]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="single-item">
      <div className="container">
        <div className="back">
          <span onClick={() => navigate(-1)}>Back Home</span>
        </div>
        {singleItem.map(item => {
          const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = item;
          return (
            <div className="info" key={id}>
              <h1>{name}</h1>
              <div className="more-info">
                <img src={image} alt={name} />
                <div className="about">
                  <h2>
                    <span>name : </span>
                    {name}
                  </h2>
                  <h2>
                    <span>Category : </span>
                    {category}
                  </h2>
                  <h2>
                    <span>Info : </span>
                    {info}
                  </h2>
                  <h2>
                    <span>Glass : </span>
                    {glass}
                  </h2>
                  <h2>
                    <span>Instructons : </span>
                    {instructions}
                  </h2>
                  <h2>
                    <span>Ingredients :</span>
                    {strIngredient1} {strIngredient2} {strIngredient3} {strIngredient4} {strIngredient5}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SignleCoctails;
