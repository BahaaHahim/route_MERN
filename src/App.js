import React from 'react';
import { Router } from '@reach/router';
import NumberComponent from './components/NumberComponent';
import HomeComponent from './components/HomeComponent';
import WordComponent from './components/WordComponent';
function App(){
  return (
      <div className="App">
          <Router>
              <HomeComponent path="/home" />
              <NumberComponent path="/:id" />
              <WordComponent path="/:w/:c/:bc" />
          </Router>
      </div>
  )
}
export default App;
