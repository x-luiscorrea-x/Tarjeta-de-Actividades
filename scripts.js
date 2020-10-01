const app = new Vue ({

    el: '#app',

    data: {
       titulo: 'Tarjetas de Actividades',
       tareas: [],
       nuevaTarea: '',
       nuevaDuracion: ''
    },

    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
                duracion: this.nuevaDuracion,
                estadito: 'Aun no realizas esta actividad.'
            });
            this.nuevaTarea = '';
            this.nuevaDuracion = '';
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },

        editarTarea: function(index){
            this.tareas[index].estado = true;
            this.tareas[index].estadito = '¡Muy bien! Has completado la actividad.';
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        }
    },

    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
        if(datosDB===null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }

    }

})