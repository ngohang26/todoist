import React from 'react'
import './task.css'
import {BsCheck2, } from 'react-icons/bs'
import {CgCalendarToday  } from 'react-icons/cg'
import {PiPencilSimpleLineDuotone, PiCalendarBlankDuotone, PiDotsThreeBold} from 'react-icons/pi'
import {GoComment} from 'react-icons/go'

export const Task = ({ label, checked, onChange }) => {
  return (
    <div className='task-container'>
      <div className="task-item">
        <label className='round-checkbox-label'>
          <input type='checkbox' className='round-checkbox' checked={checked} onChange={onChange}/>
          <span className='checkmark'>
            <i><BsCheck2/></i>
          </span>
          {label}
        </label>
        <div className="task-item-content">
          <span>Title: Meeting with team</span>
          <div className='date'>
            <CgCalendarToday fontSize={14} />
            3 Sep
          </div>
        </div>
      </div>
      <div className="task-item-action">
        <PiPencilSimpleLineDuotone className='icon-action'/>
        <PiCalendarBlankDuotone className='icon-action'/>
        <GoComment className='icon-action'/>
        <PiDotsThreeBold className='icon-action'/>
      </div>
    </div>
  )
}


// import React, { useState } from 'react';
// import RoundCheckbox from './RoundCheckbox';

// const TaskList = ({ tasks }) => {
//   const [checkedTasks, setCheckedTasks] = useState({});

//   const handleCheck = (taskId) => {
//     setCheckedTasks((prevCheckedTasks) => ({
//       ...prevCheckedTasks,
//       [taskId]: !prevCheckedTasks[taskId],
//     }));
//   };

//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <RoundCheckbox
//             label={task.label}
//             checked={checkedTasks[task.id]}
//             onChange={() => handleCheck(task.id)}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;
