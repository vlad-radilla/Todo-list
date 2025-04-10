import Button from "../atoms/Button"
import InputText from "../atoms/InputText"

interface AddTaskProps {
  handleAddTask: () => void
  taskTitle: string
  setTaskTitle: (title: string) => void
}

const AddTask = ({handleAddTask, taskTitle, setTaskTitle}: AddTaskProps) => {

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskTitle) {
      handleAddTask()
    }
  }
  return (
    <div className="flex gap-2 flex-wrap mb-5">
      <InputText onEnter={handleEnter} onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} placeholder='Nueva tarea' />
      <Button onClick={handleAddTask} label="Agregar tarea" disabled={!taskTitle} />
    </div>
  )
}

export default AddTask