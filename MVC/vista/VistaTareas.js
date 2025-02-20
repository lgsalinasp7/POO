export class VistaTareas {
    constructor() {
        this.listaTareas = document.getElementById("lista-tareas");
        this.btnAgregar = document.getElementById("btn-agregar");
        this.inputTarea = document.getElementById("nueva-tarea");
    }

    mostrarTareas(tareas) {
        this.listaTareas.innerHTML = "";
        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.textContent = `${tarea.nombre} ${tarea.completada ? "✅" : "❌"}`;
            li.onclick = () => this.marcarCompletada(index);
            this.listaTareas.appendChild(li);
        });
    }

    marcarCompletada(index) {
        this.onTareaCompletada(index);
    }

    setTareaCompletadaHandler(handler) {
        this.onTareaCompletada = handler;
    }

    setAgregarTareaHandler(handler) {
        this.btnAgregar.addEventListener("click", () => {
            const nombreTarea = this.inputTarea.value.trim();
            if (nombreTarea) {
                handler(nombreTarea);
                this.inputTarea.value = ""; // Limpiar input
            }
        });
    }
}