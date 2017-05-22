


var app = new Vue({
    el: '#root',

    data: {
        newTask: { description: '', completed: false, archived: false },
        tasks: [
            // { description: 'Go to the store', completed: false, archived: false },
            // { description: 'Go to the bank', completed: false, archived: false },
            // { description: 'Go to the gym', completed: false, archived: false },
            // { description: 'Go to the stalingrad', completed: false, archived: false },
            // { description: 'Go to the couch', completed: false, archived: false }
        ]
    },
    methods: {

        addTask() {
            if (this.newTask.description == '') {
                return;
            }
            this.tasks.push(this.newTask);
            this.newTask = { description: '', completed: false, archived: false };
        },

        removeCompleted() {
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].completed) {
                    this.tasks[i].archived = true;
                }
            }
        }
    },

    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => ! task.archived);
        },
        completeTasks() {
            return this.tasks.filter(task => task.completed && ! task.archived);
        }

    }

});
