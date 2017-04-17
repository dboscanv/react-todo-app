import {extendObservable} from "mobx";

class ListaData {
  constructor() {
    extendObservable(this, {
      tareas: ['Aprender React', 'Realizar una todo-app React']
    });
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  eliminarTarea(index) {
    this.tareas.splice(index,1);
  }

}

var lista_data = new ListaData;
export default lista_data;
