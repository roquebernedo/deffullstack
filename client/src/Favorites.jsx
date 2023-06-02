import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useGetUserID } from './Hooks/useGetUserID'
import { useCookies } from 'react-cookie'
import './Styles/Recipes.scss'

const Favorites = () => {

  const [recipes, setRecipes] = useState([])
  const [savedRecipes, setSavedRecipes] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies(["access_token"])

  const userID = useGetUserID()

  useEffect(() => {
    const fetchRecipe = async () => {
      try{
        const response = await axios.get("http://localhost:3001/recipes")
        setRecipes(response.data)
      }catch(err){
        console.error(err)
      }
    }

    const fetchSavedRecipe = async () => {
      try{
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/ids/${userID}`)
        setSavedRecipes(response.data.savedRecipes)
        console.log(response.data)
      }catch(err){
        console.error(err)
      }
    }

    fetchRecipe()
    fetchSavedRecipe()
  }, [userID])

  

  const saveRecipe = async (recipeID) => {
    try{
      const response = await axios.put("http://localhost:3001/recipes", { 
        recipeID, userID}, 
        { headers: { authorization : cookies.access_token}})
      setSavedRecipes(response.data.savedRecipes)
    }catch(err){
      console.error(err)
    }
  }

  const isRecipeSaved = (id) => savedRecipes.includes(id) 

  return (
    <div className='recipes-main'>
      <h1 className='recipes-title'>Recipes</h1>
      <div className='looking'>Looking to save any ideas?</div>
      <ul className='recipes-list'>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div className='recipes'>
                <h2 className='name-recipe'>{recipe.name}</h2>
                <img className='img-recipe' src={recipe.imageUrl} alt={recipe.name} />
                <button className='button-recipefood' onClick={() => saveRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}>
                  {isRecipeSaved(recipe._id) ?  "Saved" : "Save"}
                </button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites