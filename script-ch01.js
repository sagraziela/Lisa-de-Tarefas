const task = document.getElementById('task');
const tlist = document.getElementById('tasklist');
const addbtn = document.getElementById('addbutton');

    function addtask() {
        if (task.value === "") {
            window.alert("[ERRO} Preencha o campo para adicionar uma tarefa!")
        } else {
            const item = document.createElement("li")

            const chbox = document.createElement("input")
            chbox.setAttribute("type", "checkbox")
            chbox.setAttribute("class", "chbox")

            const taskText = document.createElement("span")
            taskText.innerText = task.value

            const container = document.createElement('div')
            container.appendChild(chbox)
            container.appendChild(taskText)

            const removebtn = document.createElement('button')
            removebtn.classList.add("remove-btn")
            removebtn.innerText = "Remover"

            removebtn.addEventListener("click", () => {
                item.remove()
            })

             chbox.addEventListener("change", () => {
                 console.log("Oi")
                if (chbox.checked) {
                    taskText.classList.add("marcada") 
                } else {
                    taskText.classList.remove("marcada")
                }
            })
           

            item.appendChild(container)
            item.appendChild(removebtn)

            tlist.appendChild(item)
            task.value = '';
            }
    }

    




  