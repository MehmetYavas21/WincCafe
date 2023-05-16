
import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { Heading } from '@chakra-ui/react'


export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = 'Welcome to our cafe!';

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <Heading mb={8} fontSize="2xl" color="blue.400">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
