# Handling Events

In the module JavaScript in the DOM you have learned about event handlers to handle clicks and text input in a function. In React, you can also use event handlers to do so but the syntax is slightly different.
First, let’s give a brief summary of what an event handler is.
An event handler is a function designed to take input from the user through the browser. User input can be collected in various ways. The most common ways to collect user input are in text fields and buttons.

## Learning goals

After this lesson you will:
Be able to create an event handler for the user’s click and text input in React.
Be to use setState in an onClick event handler. 
Be able to use an event handler function in the onChange attribute for a text input component.

## Handling clicks

At the end of this lesson, you will be able to create an event handler for the user’s click input in React.
In React, we can use the onClick attribute on a button or any other element. It is of course, most commonly used on buttons. Inside the attribute, you define a callback function that gets triggered when the user clicks on the corresponding element. Here is an example of the syntax:


import {useState} from 'react';

export const DrinkButtons = ()=> {
    const [drinkSelected, setDrinkSelected]= useState(false);
    
    const clickHandler = ()=> {
        setDrinkSelected(true);
    };
    return (
        <>
            <div className= "Button-group">
                <button className="Button" onClick={clickHandler}>
                  Tea
                </button>
            </div>
        </>
        )
};

**Line 6**
On line 6, we create a function called clickHandler which gets triggered when the user clicks on the button. Inside the function, we change the drinkSelected state variable to be true.
**!! Line 13**
On line 13, we use the attribute onClick and pass the clickHandler function. 
Now whenever a user clicks on the button, clickHandler get’s activated and changes the state to true.

Notice how we do not include parentheses after the function. This is something we often do in plain JavaScript. As an event handler, we do not want to do this because it causes the function to execute after rendering the component. We want the function to execute on a click event instead, and therefore pass a reference to the function instead of calling it.

**GOOD** : 
                <button className="Button" onClick={clickHandler}>
                  Tea
                </button>
**BAD**:
                <button className="Button" onClick={clickHandler()}>
                  Tea
                </button>

## Calling an Inline Function and setState directly

If you only want to change the state in your event handler function, you might as well pass this function directly to the onClick attribute. To do so, we define the function inline using a similar arrow function syntax you have used in callback functions. Avoid using the parenthesis after the function name here as well.

Let’s have a look:

            import {useState} from 'react';

  export const DrinkButtons = ()=> {
      const [drinkSelected, setDrinkSelected]= useState(false);
    
      return (
          <>
              <div className= "Button-group">
                  <button className="Button" onClick={() => setDrinkSelected(true)}>
                      Tea
                  </button>
              </div>
          </>
        )
      };
      
## Exercise: selecting a drink

At the end of this exercise, you can use setState in an onClick event handler.
**Description**

We will finally use event handlers and useState to register your user's chosen option. The user should be able to choose any drink that is shown in the <DrinkList /> component. 

In our previous exercise, we have already created a state and setState (setUserDrink) function to track the user’s drink option in <App />. We want to keep on tracking this data (state) in this parent component because the data affects two children components: <DrinkSearch /> and <DrinkChoice />. The <DrinkSearch /> component contains the drink items that the user can click, so we want to pass the setUserDrink function to this component..

## Instructions

- Inside App.jsx, pass setUserDrink as clickFn prop to <DrinkSearch />: 

    <DrinkSearch clickFn={setUserDrink} />

- Inside <DrinkSearch />, we want to pass the clickFn prop to <DrinkList /> as we want the user to be able to click on each item. Don't forget to restructure the prop object:

    export const DrinkSearch = ({ clickFn }) => {

- Again pass the prop in DrinkList.jsx, but this time to the <DrinkItem />.

- In DrinkItem.jsx, You can replace the <div> with an <button> element, because we want it to behave more like a button.

- We now need to use the onClick attribute inside the <button> and make it trigger the clickFn prop when the user clicks on the button. We also want to set the userDrink state to the corresponding drink. As the clickFn is the state setter for userDrink, we need to pass the drink as an argument to change the state:

      <button className="drink-item" onClick={() => clickFn(drink)}>
        
   
! Stuck? Have a peak at: 
        import './DrinkItem.css';

          export const DrinkItem = ({ drink, clickFn }) => {
              return (
                      <button className="drink-item" onClick={() => clickFn(drink)}>
                          <img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
                          <p>{drink.name}</p>
                      </button>
                      );
            };

- Now run your app to test if it's working.

        
## Exercise: resetting our choice
        
At the end of this exercise, you can use setState in an onClick event handler.

**Description**

Let’s continue where we left off from the previous exercise. We would like you to build a new feature where we can reset the selected option in case the user changes their mind. This time, however, we will provide less detailed instructions to help you practice event handlers a bit more.

## Instructions

Implement the following requirements:
        
- Users can click on a new button to reset their choice once they have selected a drink. 
- Use the already existing UI <Button /> and expand its code to be able to as necessary. 
- Once the user has clicked this button we would like to display the <DrinkButtons /> and <DrinkSearch /> components again. 
        
## Handling text input

In React, we can use the onChange attribute on text input fields to handle changes to the field. This essentially happens when the user starts typing something. Similar to handling clicks, we pass or define a callback function to handle the event change. The event change gets triggered once the input field changes. This change happens usually after the user types something, removes a letter/symbol/number, or, for example, pastes something in the field.

You can also use the onKeyDown attribute, which gets triggered as soon as you press a key on your keyboard. The onChange attribute can also be used in any input form field such as checkboxes, radio buttons, dropdowns, etc.

        import {useState} from 'react';
                
                export const GreetHeader = ()=> {
                    const [name, setName]= useState('Kumiko!');
                    const handleChange = event => setName(event.target.value);
                    
                    return (
                            <div>
                                <h1>Hello</h1>
                                <input type="text" value={name} onKeyDown={handleChange}>
                            </div>
                        );
                };
        
When working with text input, we need to retrieve the value that the user is typing into the field. Inside the attribute onChange, you define a callback function that receives a synthetic React event that holds the value of the input text field. This value can be found in the event.target object which can be retrieved by using “event.target.value”.
        
## Exercise: search function
        
At the end of this exercise, you can use an event handler function in the onChange attribute for a text input component.
        
**Description**

Let’s start making our app a bit more complex by adding a search function so that the user can find his or her desired drink more quickly. To accomplish this, we will need to add a user input component and create an event handler function that searches for potential matches in the available drinks. 

Let’s start expanding on our previously built <TextInput /> component.
        
## Instructions

- Give <TextInput /> an changeFn prop and return a <input> element that uses this function prop in an onChange attribute:

    export const TextInput = ({ changeFn }) => {
          return <input className="input" onChange={changeFn}></input>;
    };

- In DrinkSearch.jsx, create a handleChange function – above the return statement but still inside the component – that has an event object as parameter.

- Inside the function, we want to change the searchField state to the users’ input by retrieving the value from “event.target.value”.
  
        **A Hint**
               const handleChange = (event) => {
                    setSearchField(event.target.value);
                };

- Now pass the handleChange function as changeFn prop to <TextInput />.

- Next up, we want to use a filter method that compares if the items from availableDrink includes content from the searchField. We want to use the toLowerCase() method so that capitalized letters won't affect the results. At last, we assign the results to a variable:

            const matchedDrinks = availableDrinks.filter((drink) => {
                  return drink.name.toLowerCase().includes(searchField.toLowerCase());
            });
  
- Pass matchedDrinks as drinks prop to <DrinkList /> instead of availableDrinks.

- Initialise the searchField state variable with an empty string.

- Run your app, start typing, and check if it returns some matches.
  
  **GET Stuck**
  
              import { useState } from 'react';
                import { availableDrinks } from '../utils/data';
                import { DrinkList } from './DrinkList';
                import { TextInput } from './ui/TextInput';
                
                export const DrinkSearch = ({ clickFn }) => {
                    
                    const [searchField, setSearchField] = useState('test drink');
                    
                    const matchedDrinks = availableDrinks.filter((drink) => {
                        return drink.name.toLowerCase().includes(searchField.toLowerCase());
                    });
                    
                    const handleChange = (event) => {
                        setSearchField(event.target.value);
                    };
                    
                  return (
                    <>
                      <label>Search for drinks:</label>
                      <TextInput changeFn={handleChange} />
                      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
                    </>
                  );
                };
  
  ### Grow!

Good job on completing this exercise! You might wonder why we are not doing anything with our search results yet. This is because we need to do some checks on our results before we can render the results on screen. Otherwise, the app will crash because it wants to render an item while there are no results.
  
