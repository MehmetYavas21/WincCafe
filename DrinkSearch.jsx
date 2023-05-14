import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState('test drink');
  const handleChange = e => setSearchField(e.target.value);
  

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput changeFn={handleChange}/>
      <DrinkList clickFn={clickFn} drinks={availableDrinks} />
    </>
  );
};
