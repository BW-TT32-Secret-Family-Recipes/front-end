import Home from './components/Home'
import { Link, Route } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav />

      <Route path='/' component={Home} />
      {/* <Route path='/login' component={}/>
        <Route path='/new-user' component={}/>
        <Route path='/add-recipe' component={}/> */}
    </>
  )
}

export default App
