import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left">
          <img className="image" alt="profile"
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopD7XpAM7xI5YDXZZ07j6l6lYrMptwx6iZmzfzeebvy0IV-CPnA'} />
         
         <div>
          <h1>Chonlakorn Punphopthaworn</h1>
          </div>

          <div className="title">About</div>
         <div>
           <p>I'm programmer</p>
           </div>
         <div>
           <p>Bangkok</p>
           </div>
        </div>

        <div className="app-right">
          <div className="title">Experience</div>
          <div className="details">
            <div className="name">M. Water Company Limited.</div>
            <div className="year">August 2017 - Present</div>
          </div>
          
          <div className="title">Education</div>
          <div className="details">
            <div className="name">M.SC. (Master of Science Programme), Business Information System, <br/>King Mongkut’s University of Technology Thonburi</div>
            <div className="year">2013 to 2017</div>
          </div> 

          <div className="details">
            <div className="name">B.B.A.(Bachelor of Business Administration), Information System, <br/>Rajamangala University of Technology Krungthep</div>
            <div className="year">2008 - 2011</div>
          </div>

          <div className="title">Hobby</div>
          <div className="details">
            <div className="name">Watch the Movie</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
