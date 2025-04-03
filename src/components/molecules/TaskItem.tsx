import React, { useState } from 'react'
import { Task } from '../../models/Todo.model';
import Button from '../atoms/Button';
import { FaCheck, FaPen, FaTrashCan } from 'react-icons/fa6';
import InputText from '../atoms/InputText';
import { FaTimes } from 'react-icons/fa';
import { ButtonVariant } from '../../enums/todo.enum';


interface TaskItemProps {
  task: Task;
  index: number;
  handleToggleTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
  handleToggleEdit: (index: number) => void;
  handleEditSave: (index: number, title: string) => void;
}

const TaskItem = ({ task, index, handleToggleTask, handleDeleteTask, handleToggleEdit, handleEditSave }: TaskItemProps) => {
  const [editingInput, setEditingInput] = useState<string>(task.title);
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDeleteTask(index);
  }
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEditingInput(task.title);
    handleToggleEdit(index);
  }

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleEditSave(index, editingInput);
  }


  return (
    <div className='flex justify-between transition cursor-pointer shadow-md flex items-center gap-2 px-4 py-5 border-b border-gray-200 bg-purple-50 hover:bg-purple-100' onClick={() => handleToggleTask(index)}>
      <div className='flex items-center gap-2 w-full'>
        <input className='cursor-pointer' type="checkbox" checked={task.completed} value={index} />
        {
          task.isEditing ?
            <InputText value={editingInput} onChange={(e) => setEditingInput(e.target.value)} onClick={(e) => e.stopPropagation()} />
            :
            <span className={`text-gray-800 ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
        }
      </div>
      <div className='flex gap-2'>
        {
          task.isEditing ?
            <>
              <Button label="" onClick={handleSave} icon={<FaCheck />} />
              <Button label="" variant={ButtonVariant.WARNING} onClick={handleEdit} icon={<FaTimes />} />
            </>
            :
            <>
              <Button label="" onClick={handleEdit} icon={<FaPen />} />
              <Button variant={ButtonVariant.WARNING} label="" onClick={handleDelete} icon={<FaTrashCan />} />
            </>
        }
      </div>
    </div>
  )
}

export default TaskItem