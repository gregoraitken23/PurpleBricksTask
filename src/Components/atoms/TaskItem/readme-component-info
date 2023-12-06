Interfaces:

Task: Describes the structure of a task with properties id, text, and completed.
TaskItemProps: Specifies the props expected by the TaskItem component, including a task (task), and three callback functions (onEdit, onComplete, onDelete).

Functional Component:

TaskItem: Accepts the TaskItemProps as props.
Uses local state (editing and editedText) to manage the editing state and edited text.
Renders a list item (li) with the class "task-item" and additional "completed" class if the task is completed.
Conditionally renders the task information or an input field for editing based on the editing state.

Edit Handling:

When not editing, displays the task information along with complete, edit, and delete buttons.
When editing, shows an input field and a save (edit) button.

Icon Usage:

Utilizes various SVG icons for the complete, edit, delete, and save actions.
Event Handlers:

onComplete: Marks a task as complete.
onEdit: Edits the task text.
onDelete: Deletes the task.
handleEdit: Handles the edit action by calling onEdit if the edited text is not empty.
