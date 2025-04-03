import { Task } from "../../models/Todo.model"
import TaskItem from "../molecules/TaskItem"

interface Tasks {
  tasks: Task[]
  handleToggleTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
  handleToggleEdit: (index: number) => void;
  handleEditSave: (index: number, title: string) => void;
}
const TaskList = ({ tasks, handleToggleTask, handleDeleteTask, handleToggleEdit, handleEditSave }: Tasks) => {
  return (
    <div className="flex flex-col gap-2">
      {
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleToggleTask={handleToggleTask}
            handleDeleteTask={handleDeleteTask}
            handleToggleEdit={handleToggleEdit}
            handleEditSave={handleEditSave}
          />
        ))
      }
    </div>
  )
}

export default TaskList