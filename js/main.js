const { createApp } = Vue;
createApp({
    data() {
        return {

            addTask: "",
            //Array di task 
            taskList: [
                {
                    text: "text task 1",
                    category: "to do it",
                }, {
                    text: "text task 2",
                    category: "home",
                }, {
                    text: "text task 3",
                    category: "work",
                }, {
                    text: "text task 4",
                    category: "work to do",
                }
            ],
            addTaskData: {
                text: "",
                category: "",
            }
        }
    },
    methods: {
        // funzione per aggiungere le task 
        // mettere un controllo con un alert
        // e se superato il controllo metto il ".push" e lo pusho nell'array
        onSubmit(){
            if (this.addTask === ""){
                alert("Add the task.")
                return
            }else {
                this.taskList.push(
                    {
                        text: this.taskList,
                        category: this.taskList,
            }
                );
            }
            this.addTask = "";
        },
        onDeleteBtn(i) {
            this.taskList.splice(i, 1);
        },
    }
}).mount('#app');