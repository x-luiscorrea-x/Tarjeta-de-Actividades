const app = new Vue ({

    el: '#app',

    data: {
       titulo: 'Tarjetas de Actividades',
       tareas: [],
       nuevaTarea: ''
    },

    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
                estadito: 'Aun no realizas esta actividad.'
            });
            this.nuevaTarea = '';
        },

        editarTarea: function(index){
            this.tareas[index].estado = true;
            this.tareas[index].estadito = '¡Muy bien! Has completado la actividad.';
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
        }
    }

})