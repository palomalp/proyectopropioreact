import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor(props) { //el constructor crea los objetos de la clase.
    super(props) //forma estándar de llamar al constructor
    this.state = {
      newTask: "",
    }
  }

//esta es la función que luego le paso a onChange. Aquí se define la función y abajo en el input se llama.
  handleTaskChange = (event) => {
    this.setState ({newTask: event.target.value, //this.setState es para poder cambiar los estados que son inmutables.
    })
  }

render() {
  return (
    <div className="container">
      <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
      <input onChange={this.handleTaskChange} type = "text" className= "new-task"/> {/* //a onChange se le asigna una funcion que será llamada cada vez que cambie algo en el input */}
  {/* //this.handleTaskChange es la función que se va a ejecutar cada vez que cambiemos el contenido del input */}
      <h2 className = "test-label"> {this.state.newTask}</h2> 
    </div>
    );
  }
}

export default App;
