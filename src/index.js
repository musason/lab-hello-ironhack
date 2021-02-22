

import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends React.Component{
    render() {
        return (
          <React.Fragment>
            <div className="menu-background">
              <div className="logos">
                <img src="/images/ironhack-logo.svg"></img>
                <img src="/images/menu-top.svg"></img>
              </div>
              <h1 id="main-h1">Say hello to ReactJS</h1>
              <p id="first-p">
                You will learn how to use the most popular fronted library, and
                become a super Ninja developer.
              </p>
              <div className="button-awesome">
                <h4>Awesome!</h4>
              </div>
            </div>
            <div className="lower-section">
              <div>
                <img src="../images/icon1.png"></img>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
              </div>
              <div>
                <img src="../images/icon2.png"></img>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
              </div>
              <div>
                <img src="../images/icon3.png"></img>
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the component's</p>
              </div>
              <div>
                <img src="../images/icon4.png"></img>
                <h1>JSX</h1>
                <p>Statically-typed, designed to run on modern browsers.</p>
              </div>
            </div>
          </React.Fragment>
        );
    }
}


export default App
ReactDOM.render(<App />, document.querySelector('#myApp'))