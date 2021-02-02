import Home from './components/Home'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute'
import RecipeList from './components/RecipeList'
import Recipe from './components/Recipe'
import RecipeForm from './components/RecipeForm'
import NewUserForm from './components/NewUserForm'
import LoginForm from './components/LoginForm'

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

const App = () => {
  return (
    <>
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/recipes' component={RecipeList} />
      <Route path='/add-recipe'>
        <RecipeForm />
      </Route>
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
