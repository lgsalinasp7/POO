
import { Tarea } from "../modelo/Tarea.js";
import { VistaTareas } from "../vista/VistaTareas.js";

export class ControladorTareas {
    constructor() {
        this.model = { tareas: [] };
        this.view = new VistaTareas();

        this.view.setTareaCompletadaHandler((index) => this.completarTarea(index));
        this.view.setAgregarTareaHandler((nombre) => this.agregarTarea(nombre));
    }

    agregarTarea(nombre) {
        this.model.tareas.push(new Tarea(nombre));
        this.view.mostrarTareas(this.model.tareas);
    }

    completarTarea(index) {
        this.model.tareas[index].completada = !this.model.tareas[index].completada;
        this.view.mostrarTareas(this.model.tareas);
    }
}
