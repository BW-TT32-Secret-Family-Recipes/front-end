import Home from './components/Home'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import NewUserForm from './components/NewUserForm'
import EditRecipe from './components/EditRecipe'
import LoginForm from './components/LoginForm'
import SharedRecipe from './components/SharedRecipe'
import OnSuccess from './components/OnSuccess'

const App = () => {
  return (
    <>
      <Nav />

      <Route exact path='/' component={Home} />
      <PrivateRoute exact path='/:userId/recipes' component={RecipeList} />
      <PrivateRoute path='/:userId/recipes/:recipeId/edit-recipe' component={EditRecipe} />
      <PrivateRoute path='/:userId/add-recipe' component={RecipeForm} />
      <Route path='/new-user' component={NewUserForm} />
      <Route path='/login' component={LoginForm} />
      <Route path='/recipes/:recipeId' component={SharedRecipe}/>
      <Route path='/success' component={OnSuccess} />

    </>
  )
}

export default App
