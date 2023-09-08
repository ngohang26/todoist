import React from 'react'
import { Task } from '../components/task/Task'

export const TaskList = ({task}) => {
  return (
<ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}
