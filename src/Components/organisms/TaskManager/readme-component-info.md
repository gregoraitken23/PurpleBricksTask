State Variables:
tasks: An array of tasks, each represented by an object with id, text, and completed properties.
newTaskText: The text input for adding a new task.
buttonActive: A boolean state to determine the activation of the "Add Task" button.
openTitle: A boolean state to toggle the visibility of the task input.

useEffect:
The first useEffect is used to load tasks from local storage when the component mounts.
The second useEffect saves tasks to local storage whenever the tasks state changes.

Functions:
addTask: Adds a new task to the list if the input is not empty.
openInput: Toggles the visibility of the task input.
handleKeyDown: Handles the "Enter" key event to add a task.
editTask: Edits the text of a task based on the provided taskId.
handleInputChange: Updates the newTaskText state as the input field changes.
completeTask: Toggles the completion status of a task based on the provided taskId.
deleteTask: Removes a task from the list based on the provided taskId.

Render:
The component renders a title, an input field, an "Open Title" button, an "Add Task" button, and a TaskList component.
The TaskList component is provided with props to handle task editing, completion, and deletion.

Additional Notes:
Icons are used for the "Open Title" and "Add Task" buttons.
The "Add Task" button is conditionally styled based on the buttonActive state.
The input field and buttons are conditionally rendered based on the openTitle state.
