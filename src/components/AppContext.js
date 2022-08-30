import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [cocktailsinfo, setcocktailsinfo] = useState([]);
  const [SearchValue, setSearchValue] = useState('');
  const [id, setid] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setcocktailsinfo(res.data.drinks);
        setloading(false);
      })
      .catch(err => {
        console.log('Error in Fetching');
      });
  }, []);

  const SignleCoctail = id => {
    setid(id);
  };

  return <AppContext.Provider value={{ cocktailsinfo, SearchValue, setSearchValue, loading, SignleCoctail, id }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
