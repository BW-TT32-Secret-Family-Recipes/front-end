import Home from './components/Home'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import NewUserForm from './components/NewUserForm'
import EditRecipe from './components/EditRecipe'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <>
      <Nav />

      <Route exact path='/' component={Home} />
      <PrivateRoute exact path='/:userId/home' component={Home}/>
      <PrivateRoute exact path='/:userId/recipes' component={RecipeList} />
      <PrivateRoute path='/:userId/recipes/:recipeId/edit-recipe' component={EditRecipe}/>
      <PrivateRoute path='/:userId/add-recipe' component={RecipeForm} />
        {/* <RecipeForm /> */}
      {/* </PrivateRoute> */}
      <Route path='/new-user' component={NewUserForm} />
      <Route path='/login' component={LoginForm} />

      {/* 
        <Route path='/login' component={}/>
        <Route path='/new-user' component={}/>
        <PrivateRoute path='/add-recipe' component={}/>
        <PrivateRoute path='/my-recipes' component={}/>
        */}
    </>
  )
}

export default App
