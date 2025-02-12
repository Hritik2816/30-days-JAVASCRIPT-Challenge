document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input")
  const addTaskBtn = document.getElementById("add-todo-list")
  const Todolist = document.getElementById("todo-list")

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []

  tasks.forEach(task => renderTasks(task))

  addTaskBtn.addEventListener("click", () => {
    const textTask = todoInput.value.trim()
    if (textTask === "") return alert("Please enter a task")

    const newtasks = {
      id: Date.now(),
      text: textTask,
      completed: false
    }
    tasks.push(newtasks)
    saveTask()
    renderTasks(newtasks)
    todoInput.value = ""
    console.log(tasks)
  })
  function renderTasks(task) {
    console.log(task);
    const li = document.createElement("li");
    li.innerHTML = `<span>${task.text}</span> <button class="delete">Delete</button>`

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return
      task.completed = !task.completed;
      li.classList.toggle("completed")
      saveTask()
    })

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation() // prevent the toggle event from firing
      tasks = tasks.filter(t => t.id !== task.id)
      li.remove()
      saveTask()
    })
    Todolist.appendChild(li)
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

})