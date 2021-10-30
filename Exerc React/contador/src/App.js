import React, { Component } from 'react';
import './App.css';

 
class App extends Component {
  constructor(){
    super();
    this.state = {
      contador: 0,
    };
  }
  
  incrementar(){
    this.setState({
      contador: this.state.contador + 1,
    });
  }
 
  decrementar(){
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render(){
    return(
      <div className = "tudo">
          <h2>Contador de pessoas</h2>

          <div >
          <h2>{this.state.contador}</h2>
          </div>
          
          <br/>
          <button className="bot2" onClick={this.incrementar.bind(this)}><h1>+</h1></button>
          <br/>
          <br/>
          <button className="bot1" onClick={this.decrementar.bind(this)}><h1>-</h1></button>
      </div>
    )
  }
}
 
export default App;