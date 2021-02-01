import Home from './components/Home'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import RecipeList from './components/RecipeList'

const App = () => {
  return (
    <>
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/recipes' component={RecipeList} />

      {/* <Route path='/login' component={}/>
        <Route path='/new-user' component={}/>
        <Route path='/add-recipe' component={}/> */}
    </>
  )
}

export default App
