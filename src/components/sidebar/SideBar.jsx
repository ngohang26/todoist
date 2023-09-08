import React from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BsInboxFill, BsCalendar, BsCalendar3, BsGrid } from 'react-icons/bs'
import './sidebar.css'

export const SideBar = ({ collapsed }) => {
  return (
    <div className='sidebar'>
      <Sidebar collapsed={collapsed} >
        <Menu style={{ padding: "0 15px", }}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
              display: 'flex', 
              alignItems: 'center',
              height: 35,
              padding: "0px",
              borderRadius: "5px",
            },
          }}
        >

          <MenuItem icon={<BsInboxFill color='#246fe0' fontSize={16} />} component={<Link to="/inbox" />}> <span>Inbox</span></MenuItem>
          <MenuItem icon={<BsCalendar color='#4b9244' fontSize={16} />} component={<Link to="/today" />}> <span>Today</span></MenuItem>
          <MenuItem icon={<BsCalendar3 color='#692ec2' fontSize={16} />} component={<Link to="/upcoming" />}><span>Upcoming</span></MenuItem>
          <MenuItem icon={<BsGrid color='#c77100' fontSize={16} />} component={<Link to="/filters&labels" />}><span>Filters & Labels</span></MenuItem>

          <div>Workshop</div>
          <SubMenu label="Personal">
            <MenuItem>Home</MenuItem>
            <MenuItem>My work</MenuItem>
            <MenuItem>Education</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}
