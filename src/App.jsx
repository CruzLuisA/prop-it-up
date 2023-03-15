import React from 'react'
import PersonCard from './components/PersonCard';
import peeps from './data/peeps.js';

const App = () => {
  return (
    <div className="container mt-3">
        {
          peeps.map((peep, idx) => 
          <PersonCard
            name= {peep.name}
            age={peep.age}
            hairColor={peep.hairColor}
            image={peep.image}
          />)
        }
    </div>
  )
}

export default App;