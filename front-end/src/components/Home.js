import React from 'react';
import family from '../assets/images/family-cooking.jpg';
import recipeCard from '../assets/images/recipe-card.jpg';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <section id='left-side'>

      </section>
      <section id='content'>
          <img src={logo} alt='secret family recipes cookbook' className='header-img' />
        <h3>Your place for generation after generation of tradition</h3>
        
        <section id='why-us'>
          <div className='why'>
            <div className='pic-container'>
              <img src={family} alt='family cooking' />
            </div>
            <h2>
              Anyone can go out and buy a cookbook these days, but you want a place to store all your secret family recipes.
            </h2>
          </div>
          <div className='why'>
            <h2>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep those recipes with you forever!</h2>
            <div className='pic-container'>
              <img src={recipeCard} alt='family cooking' />
            </div>
          </div>
          <Link to='/new-user' id='register-btn'>Register</Link>
        </section>

      </section>
    </div>
  )
}

export default Home