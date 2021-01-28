import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) { //el constructor crea los objetos de la clase.
    super(props) //forma estandar de llamar al constructor
    this.state = {
      newTask: "",
      tasks: []
    };
  }

//esta es la función que luego le paso a onChange. Aqui se define la funcion y abajo en el input se llama.
  handleTaskChange = (event) => {
    this.setState ({newTask: event.target.value, //this.setState es para poder cambiar los estados que son inmutables.
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault(); //esto es para que no se recargue la página cuando le doy al enter.
    let newTasks = this.state.tasks;
    newTasks.push (this.state.newTask) //mete lo que hay dentro de newTask en el array tasks
    this.setState ({
      newTask: "", //quiero que newTask se quede vacio y que dentro de tasks se acumule lo que había ahí antes.
      tasks: newTasks
    })
    console.log (newTasks)
  }

render() {
  return (
    <div className="container">
      <h1 className="title">To do list<span aria-label="emoji" role="img">🔥</span></h1>
      <form onSubmit= {this.handleSubmit}> 
        <input onChange={this.handleTaskChange} value= {this.state.newTask} type = "text" className= "new-task"/> {/* //a onChange se le asigna una funcion que sera llamada cada vez que cambie algo en el input */}
      </form>
  {/* //this.handleTaskChange es la funcion que se va a ejecutar cada vez que cambiemos el contenido del input */}
      <h2 className = "test-label"> {this.state.newTask}</h2> 
      {
        this.state.tasks.map (task =>
          <div className= "task-container">
            <h3 className = "task">{task}</h3>
            </div>
        )
      }
    </div>
    );
  }
}

export default App;
