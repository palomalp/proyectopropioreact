import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
import TaskList from "./components/task-list";
import Title from "./components/title";
import Layout from "./components/layout"

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

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

render() {
  return (
    <Layout>
      <Title/>
      <Input
        handleSubmit={this.handleSubmit}
        handleTaskChange={this.handleTaskChange}
        value={this.state.newTask}
        />
  {/* //this.handleTaskChange es la funcion que se va a ejecutar cada vez que cambiemos el contenido del input */}
      <TaskList
        tasks={this.state.tasks} 
        handleDelete={this.handleDelete}
        //esto sería el map (que está en el task-list.js)
        />
    </Layout>
    );
  }
}

export default App;
