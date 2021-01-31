import Home from './components/Home'
import { Link, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to='/'> Home</Link>
        <Link to='/add-recipe'>Add Recipe</Link>
        <Link to='/login'>Login</Link>
        <Link to='/new-user'>Sign Up</Link>
      </nav>

      <Route path='/' component={Home} />
      {/* <Route path='/login' component={}/>
        <Route path='/new-user' component={}/>
        <Route path='/add-recipe' component={}/> */}
    </>
  )
}

export default App
