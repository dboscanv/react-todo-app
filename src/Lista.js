import React, {Component} from "react";
import lista_data from "./ListaData";
import { observer } from 'mobx-react'


class Lista extends Component {

  agregar() {
    if (this.input.value == "") {
      alert("Tienes que introducir una tarea");
    } else {
      lista_data.agregarTarea(this.input.value);
      this.input.value = "";
    }
  }

  render(){
    let listaDiv = lista_data.tareas.map((item, index) => {
      return(
        <li className="list-group-item" key={index} onClick={() => lista_data.eliminarTarea(index)}>{item}</li>
      );
    });

    return(
      <div className="container">
        <h2>React TODO-APP</h2>
        <p>Pequeña aplicación para agregar y eliminar tareas, para eliminarlas haz click en ellas</p>
        <input type="text" placeholder="Introduzca la nueva tarea" ref={(input)=> this.input = input}/>
        <button onClick={this.agregar.bind(this)}>Agregar</button>
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              {listaDiv}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Lista);
