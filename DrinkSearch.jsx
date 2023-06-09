import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState('');
  
  const handleChange = e => setSearchField(e.target.value);
  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
});
  searchField="";
  

  return (
    <>
      <label>Find your best drinks:</label>
      <TextInput changeFn={handleChange} w={300} mb={10}/>
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};

