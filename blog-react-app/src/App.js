import './App.css';
import Meal from './Meal.js';
import { useEffect, useState } from "react";
import Menu from './Menu'

function App() {
 //useState retourne 2 éléménst : 
    //1 variable qui contient la valeur du state
    // et 1 fonction qui modifie la valeur
    const [meal, setMeal] = useState(null);
    
    useEffect(() => {
        (async function() {
            const url = "https://www.themealdb.com/api/json/v1/1/random.php";

            const response = await fetch(url);
            const mealsFromApi = await response.json();
            setMeal(mealsFromApi.meals[0]);

        }) ();
    }, []);

  return (
    <div className="App">
      <header className='App-header'>
      <Menu/>
      <div>
        <Meal meal={meal} />
      </div>
      </header>
    </div>
  );
}

export default App;