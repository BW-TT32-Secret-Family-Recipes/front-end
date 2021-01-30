import Home from './components/Home'
import {Link, Route}  from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <div className='nav-bar'>
        <Link to ='/'> Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/new-user'>Sign Up</Link>
        <Link to ='/add-recipe'>Add Recipe</Link>

        <Route path='/' component={Home}/>
        {/* <Route path='/login' component={}/>
        <Route path='/new-user' component={}/>
        <Route path='/add-recipe' component={}/> */}
      </div>
    </div>
  )
}

export default App
