import React from 'react'
import "./app.css"
import Cards from './components/cards'


const App = () => {
  return (
    <>
    {/* creating navbar */}
     <nav> <span>Basic Crud App </span>   </nav>

     <Cards />
    


     {/* creating footer */}
      <footer className="footer"> <span> @grow global stratergies pvt ltd  </span>  </footer>
    </>
  )
}

export default App
