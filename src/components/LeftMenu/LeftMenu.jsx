import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import {BsInboxFill, BsCalendar, BsCalendar3, BsGrid} from 'react-icons/bs'
import './leftMenu.css'

export const LeftMenu = () => {
  
  const menuItems = [
    {tab: "inbox", icon: <BsInboxFill color='#246fe0'/>, text: "Inbox"},
    {tab: "today", icon: <BsCalendar color='#4b9244'/>, text: "Today"},
    {tab: "upcoming", icon: <BsCalendar3 color='#692ec2'/>, text: "Upcoming"},
    {tab: "filters&labels", icon: <BsGrid color='#c77100'/>, text: "Filter & Labels"}
  ];
  return (
    <div className="content-wrapper">
      <div className='left-menu' style={{flex:2}}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.tab} data-tab={item.tab} >
                <ListItemIcon style={{fontSize: 20}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
      </div>
      <div className="account-container" style={{flex: 8}}>

      </div>
    </div>
    
  )
}
