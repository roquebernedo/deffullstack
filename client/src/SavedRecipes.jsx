import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useGetUserID } from './Hooks/useGetUserID'
import "./Styles/Profile.scss"
import { Link } from 'react-router-dom'

const SavedRecipes = () => {

  const [savedRecipes, setSavedRecipes] = useState([])

  const userID = useGetUserID()

  useEffect(() => {

    const fetchSavedRecipe = async () => {
      try{
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/${userID}`)
        setSavedRecipes(response.data.savedRecipes)
        console.log(response.data)
      }catch(err){
        console.error(err)
      }
    }

    
    fetchSavedRecipe()
  }, [])


  return (
    <div className='profile'>
      <div className='profile-main'>
        <h1>Profile</h1>
        <p>Here are my recipes</p>
        <Link className='follow'>Follow</Link>
        <h2>Ideas Created</h2>
      
        <ul className='list'>
          {savedRecipes.map((recipe, index) => (
            <li key={recipe._id}>
              <div className='recipes'>
                <h2 className='name-recipe'>{recipe.name}</h2>
                <img className='img-recipe' src={recipe.imageUrl} alt={recipe.name} />
              </div>         
            </li>
            
          ))}
        </ul>

        <p className='inspired'>Get inspired by a new idea</p>
        <Link to="/createRecipe" className='create'>Create</Link>
      </div>

      
    </div>
  )
}

export default SavedRecipes