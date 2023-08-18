import {useEffect , useState} from 'react';
import './App.css';
import Recip from './components/Recip';

const App = () =>{

  const APP_ID = "5fe7ae4a";
  const APP_KEY = "d41a8471aaa71264f9662f447dd13fd5";

  const[recipes , setRecipes] = useState([]);
  const[search , setSearch] = useState("");
  const[query , setQuery] = useState('salad');
  useEffect(() => {
   getresponse();
  }, [query])

  const getresponse = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  } ;
  
  const changeHandler = (event) =>{
    const data = (event.target.value);
    setSearch(data);
  }

  const getsearch =(event) =>{
    event.preventDefault(); // prevent the page from the refresh 
    setQuery(search);
    setSearch(" ");
  }

  return(
    <div className='App' onSubmit={getsearch}>

    <form className='search-form'>
      <input className="search-bar" type='text'placeholder='Type here...' value={search} onChange={changeHandler}/>
      <button className="search-button" type='submit'>Search</button>
    </form>
    
    <div className='search_main'>
    {recipes.map(recipe =>(
      <Recip title ={recipe.recipe.label} calories={recipe.recipe.calories} 
      image ={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
    ))}
    </div>
    

    </div>
  )
}

export default App;
