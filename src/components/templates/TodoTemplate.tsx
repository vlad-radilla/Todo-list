import { ChangeEvent, useState } from "react"
import { Task } from "../../models/Todo.model"
import TaskList from "../organisms/TaskList"
import Button from "../atoms/Button"
import InputText from "../atoms/InputText"
import AddTask from "../molecules/AddTask"
import { LoadingSpinner } from "../atoms/LoadingSpinner"

const TodoTemplate = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAddTask = () => {
    setIsLoading(true)
    const newTask = { title: taskTitle, completed: false, isEditing: false }
    setTimeout(() => {
      setTasks([...tasks, newTask])
      setIsLoading(false)
    }, 3000)
    setTaskTitle("")
  }

  const handleDeleteTask = (index: number) => {
    setIsLoading(true)
    const newTasks = tasks.filter((_, i) => i !== index)
    setTimeout(() => {
      setTasks(newTasks)
      setIsLoading(false)
    }, 1000)
  }

  const handleToggleEdit = (index: number) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isEditing: !task.isEditing }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const handleEditSave = (index: number, title: string) => {
    setIsLoading(true)
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, title, isEditing: false }
      }
      return task
    })
    setTimeout(() => {
      setTasks(updatedTasks)
      setIsLoading(false)
    }, 1000)
  }

  const handleToggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="text-2xl font-semibold text-gray-800 text-left mb-5">Lista de tareas</div>
      <AddTask handleAddTask={handleAddTask} taskTitle={taskTitle} setTaskTitle={setTaskTitle} />
      {
        isLoading ?
          <LoadingSpinner /> :
          tasks.length ? <TaskList tasks={tasks} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} handleToggleEdit={handleToggleEdit} handleEditSave={handleEditSave} /> :
            <div className="text-gray-500 text-center">No hay tareas</div>

      }
    </>
  )
}

export default TodoTemplate