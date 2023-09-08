import { Button, IconButton } from '@mui/material'
import React from 'react'
import { IoOptionsOutline } from 'react-icons/io5'
import { GoComment } from 'react-icons/go'
import { PiDotsThreeOutlineLight } from 'react-icons/pi'
import './inbox.css'
import { Task } from '../components/task/Task'

export const Inbox = () => {
  return (
    <div className='inbox-container'>
      <header>
        <div className="header-content">
          <span>Inbox</span>
          <div className='header-actions'>
            <Button variant='text' startIcon={<IoOptionsOutline color='#666' />}>View</Button>
            <Button variant='text' startIcon={<GoComment color='#666' />}>Comments</Button>
            <IconButton aria-label="delete" style={{ borderRadius: '5px' }}>
              <PiDotsThreeOutlineLight style={{ width: 18, height: 18, fontSize: 21 }} />
            </IconButton>
          </div>

        </div>
      </header>
      <div className='list-task'>
        <Task />
      </div>
    </div>
  )
}

