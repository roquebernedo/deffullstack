import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useGetUserID } from './Hooks/useGetUserID'
import { useNavigate } from 'react-router-dom'
import './Styles/CreateRecipe.scss'

const CreateRecipe = () => {

  const userID = useGetUserID()

  const [recipe, setRecipe] = useState({
    name: "",
    ingredient: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setRecipe({...recipe, [name]: value })
  }

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target
    const ingredient = recipe.ingredient
    ingredient[idx] = value
    setRecipe({...recipe, ingredient })
  }

  const addIngredient = () => {
    setRecipe({...recipe, ingredient: [...recipe.ingredient, ""] })
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    try{
        await axios.post("http://localhost:3001/recipes", recipe)
        alert("Recipe created")
        navigate("/")

    } catch (err){
        console.error(err)
    }
  }

  return (
    <div className='create-recipe'>
        <h2 className='create-title'>Create Recipe</h2>
        <form className='create-form' onSubmit={onSubmit}>
            <label className='create-name' htmlFor='name'>Name</label>
            <input placeholder='Add a title' className='create-input' type='text' id='name' name='name' onChange={handleChange}/>
            <label className='create-ingre' htmlFor='ingredients'>Ingredients</label>
            {recipe.ingredient.map((ingredient, idx)=> (
                <input
                    className='create-add'
                    key={idx}
                    type='text'
                    name='ingredients'
                    value={ingredient}
                    onChange={(event) => handleIngredientChange(event, idx)}
                />
            ))}
            <button className='create-button' onClick={addIngredient} type='button'>Add Ingredient</button>
            
            <label className='create-inst' htmlFor='instructions'>Instructions</label>
            <textarea placeholder='Add instructions' className='create-textarea' id='instructions' name='instructions' onChange={handleChange}></textarea>

            <label className='create-img' htmlFor='imageUrl'>Image URL</label>
            <input placeholder='Find the image you like the most' className='create-inputurl' type='text' id='imageUrl' name='imageUrl' onChange={handleChange}/>
            <label className='create-cook' htmlFor='cookingTime'>Cooking Time (minutes)</label>
            <input placeholder='Select an estimated time' className='create-cooktime' type='number' id='cookingTime' name='cookingTime' />
            <button className='button-createrecipe' type='submit'>Create Recipe</button>
        </form>
    </div>
  )
}

export default CreateRecipe