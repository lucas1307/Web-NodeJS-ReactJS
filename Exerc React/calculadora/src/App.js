import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      n1: 0,
      n2: 0,
      resultado: 0,
    };

    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaNum2 = this.pegaNum2.bind(this);
  }

  //pegando numero1
  pegaNum1(event) {
    this.setState({
      n1: Number(event.target.value),
    });
  }

  //pegando numero2
  pegaNum2(event) {
    this.setState({
      n2: Number(event.target.value),
    });
  }

  //fazendo o calculo
  multNum = () => {
    this.setState({
      resultado: this.state.n1 * this.state.n2,
    });
  }
  render() {
    return (

      <>

      <div className="tudo">
        
        <input className="entrada" value={this.state.n1} onChange={this.pegaNum1} />
        <br />
        <br />
        <input className="entrada" value={this.state.n2} onChange={this.pegaNum2} />
        <h1>{this.state.resultado}</h1>

        <br />

        <button onClick={this.multNum}>Calcular</button>
        
      </div>
        
      </>
     
    
    )
  } 
}



export default App;

