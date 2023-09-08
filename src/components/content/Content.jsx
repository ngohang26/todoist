import React, {useState} from 'react'
import { SideBar } from '../sidebar/SideBar'
import { Inbox } from '../../inbox/Inbox'
import './content.css'
import { TopBar } from '../topbar/TopBar'
export const Content = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    
    <div className='content-container'>
      <TopBar handleCollapse={handleCollapse} />
      <div className="content">
        <SideBar collapsed={collapsed}/>
        <Inbox/>

      </div>
    </div>
  )
}
