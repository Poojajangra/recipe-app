import { React } from 'react';
import './Recip.css';

const Recip =({title , calories , image , ingredients}) =>{
    return(
        <div className='recipemain'>
            <img className='recp_image' src={image} />
            <h1 className='recipe_title'>{title}</h1>
            <p className='recipe_cal'>{calories}</p>
            <h3>INGREDIENTS</h3>
            <ol className='recipe_ing'>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
            ))}
            </ol>
        </div>
    )
}

export default Recip;
