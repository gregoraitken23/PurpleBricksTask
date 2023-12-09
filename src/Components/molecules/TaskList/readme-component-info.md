Interfaces:

Task: Describes the structure of a task with properties id, text, and completed.
TaskListProps: Specifies the props expected by the TaskList component, including an array of tasks (tasks), and three callback functions (onEdit, onComplete, onDelete).


in the absence of a wiki.
 this file is a great substitute for component information. documentation 


Functional Component:

TaskList: Accepts the TaskListProps as props.
Renders an unordered list (ul) with a class of "task-list".
Maps through the array of tasks and renders a TaskItem component for each task.


Mapped TaskItem Components:

Uses the map function to iterate over the array of tasks.
For each task, it renders a TaskItem component, passing down the task information and callback functions (onEdit, onComplete, onDelete) as props.

Props:

tasks: An array of tasks to be displayed.
onEdit: A callback function invoked when editing a task. It receives the taskId and the new text for the task as arguments.
onComplete: A callback function triggered when marking a task as complete. It receives the taskId as an argument.
onDelete: A callback function invoked when deleting a task. It receives the taskId as an argument.

TaskItem Component:

The TaskList component utilizes the TaskItem component to render individual tasks.
Each task is identified by its unique id and has associated edit, complete, and delete actions.