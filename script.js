document.getElementById("add-task").addEventListener("click", function () {
    var taskInput = document.getElementById("task-value");
      // alert("User entered: " + taskInput.value);
      // addTask(taskValue);
    if(taskInput.value != ""){addTask(taskInput.value)}
    else{
      alert("User entered again: " );
    };
    taskInput.value = "";
  });
  function addTask(taskValue) {
    var task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("fill");
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
  
    var taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerText = taskValue;
  
    var trash = document.createElement("div");
    trash.classList.add("trash");
    trash.innerHTML = "&times;";
    trash.addEventListener("click", removeTask);
  
    task.appendChild(taskContent);
    task.appendChild(trash);
  
    var tasks = document.getElementById("tasks-added");
    tasks.insertBefore(task, tasks.childNodes[0]);
  }
  task.addEventListener("dragstart", dragStart);
task.addEventListener("dragend", dragEnd);
// ...
trash.addEventListener("click", removeTask);

function removeTask(event) {
    // event represents the remove button
    // Access the <ul> list by moving 2 levels up
    var tasks = event.target.parentNode.parentNode;
    // Access the <li> element which is the direct parent
    var task = event.target.parentNode;
    tasks.removeChild(task);
  }
  
  // DRAG & DROP
  
  // A global variable to store the selected task
  var task;
  
  function dragStart(event) {
    event.target.classList.add("hold");
    task = event.target;
    setTimeout(function () {
      event.target.classList.add("invisible");
    }, 0);
  }
  
  function dragEnd(event) {
    event.target.classList.remove("invisible");
  }
  function dragEnter(event) {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.add("hovered");
    }
  }
  
  function dragOver(event) {
    event.preventDefault(); // https://stackoverflow.com/a/35428657
  }
  
  function dragLeave(event) {
    event.target.classList.remove("hovered");
  }
  
  function dragDrop(event) {
    event.target.classList.remove("hovered");
    // event represents the column
    // Add the task to the right child. Inspect the element to find the ul is index 3 in childnodes.
    event.target.childNodes[3].append(task);
  }
  
  var dropzones = document.getElementsByClassName("dropzone");
  
  for (var index = 0; index < dropzones.length; index++) {
    const dropzone = dropzones[index];
    dropzone.addEventListener("dragenter", dragEnter);
    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("dragleave", dragLeave);
    dropzone.addEventListener("drop", dragDrop);
  }

//   Add a Fontawesome icon to replace the "X" of the remove button.
// Make the Add Task input to accept pressing Enter on the keyboard as a confirmation (the same behavior like click the Add button). Ref: MDN KeyboardEvent.key
// Allow users to edit the task in the column. Hint: add an edit button/icon (similar to the remove button). When user clicks the button, replace the task value text with an input box. After user types something and hit Enter to confirm, remove the input box with the new task value.
// Add buttons/icons that move the task to specific columns automatically.
// And any other awesome ideas that you have. –>