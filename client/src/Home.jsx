import "./Styles/Home.scss"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useGetUserID } from './Hooks/useGetUserID'
import { useCookies } from 'react-cookie'


const Home = () => {


    const [recipes, setRecipes] = useState([])
    const [savedRecipes, setSavedRecipes] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [cookies, _] = useCookies(["access_token"])
  
    const userID = useGetUserID()
    console.log(savedRecipes)
    console.log(cookies)
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
  
    
  
    // const saveRecipe = async (recipeID) => {
    //   try{
    //     const response = await axios.put("http://localhost:3001/recipes", { 
    //       recipeID, userID}, 
    //       { headers: { authorization : cookies.access_token}})
    //     setSavedRecipes(response.data.savedRecipes)
    //   }catch(err){
    //     console.error(err)
    //   }
    // }
  
    // const isRecipeSaved = (id) => savedRecipes.includes(id) 

  return (
    <div className='main-home'>
        <div className='info-food'>
            <h1 className='title-h1'>Foods</h1>
            <div className='info-main'>Here you will find a selection of the world's finest dishes. From exquisite international gastronomy to 
                delicious traditional recipes, we are committed to providing you with an unparalleled culinary experience.
                <br/>
                <br/>
                Explore our extensive collection of recipes, all tested and approved by expert chefs. Whether you're looking
                for ideas to surprise your loved ones, learn new cooking techniques, or simply enjoy a delicious meal, our 
                application has everything you need
            </div>
        </div>
        <div className='cuisine'>
            <h2 className='find-international'>Find international recipes</h2>
            <div className='international-recipes'>
                <div className='Peruvian recip'>
                    <img src='https://static.wixstatic.com/media/8fb78d_c77b22a3f89744a4bb1329a8d5c4e2a5~mv2.jpg/v1/fill/w_640,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8fb78d_c77b22a3f89744a4bb1329a8d5c4e2a5~mv2.jpg' alt='' className='inter'/>
                    <h3 className='name-recipe'>Peruvian Recipes</h3>
                </div>
                <div className='Mexican recip'>
                    <img src='https://cdn.shopify.com/s/files/1/0406/8229/1356/files/antojate-comida-mexicana-tortillas-corridas-4.jpg?v=1599254320' alt='' className='inter'/>
                    <h3 className='name-recipe'>Mexican Recipes</h3>
                </div>
                <div className='French recip'>
                    <img src='https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2017/09/4.-Ratatouille.jpg' alt='' className='inter'/>
                    <h3 className='name-recipe'>French Recipes</h3>
                </div>
                <div className='Italian recip'>
                    <img src='https://tipsparatuviaje.com/wp-content/uploads/2020/03/lasana-comida.jpg' alt='' className='inter'/>
                    <h3 className='name-recipe'>Italian Recipes</h3>
                </div>
                <div className='Greek recip'>
                    <img src='https://www.conociendogrecia.com/wp-content/uploads/2019/04/comida-tipica-griega.jpg' alt='' className='inter'/>
                    <h3 className='name-recipe'>Greek Recipes</h3>
                </div>
            </div>
        </div>

        <h2 className='main-ideas'>Main Ideas</h2>
        <ul className='recipes-list'>
        {recipes.map((recipe) => (
          <li key={recipe._id} className="li-recipe">
            <div className='recipes'>
                <h2 className='name-recipe'>{recipe.name}</h2>
                <img className='img-recipe' src={recipe.imageUrl} alt={recipe.name} />
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home