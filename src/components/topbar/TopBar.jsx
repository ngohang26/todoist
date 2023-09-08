import React from 'react'
import './topbar.css'
import {GoHome, GoQuestion} from 'react-icons/go'
import {HiOutlineMenu, HiUserCircle} from 'react-icons/hi'
import {BsPlusLg} from 'react-icons/bs'
import {IoNotificationsOutline} from 'react-icons/io5'
import {FiSearch} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

export const TopBar = ({handleCollapse}) => {
  return (
    <div className='topbar-container'>
      <div className="left-control">
        <HiOutlineMenu className='icon-topbar' onClick={handleCollapse}/>
        <GoHome className='icon-topbar'/>
        <div className="search-container">
          <FiSearch className='icon-search' />
          <input type='text' placeholder='Search'/>
          <GoQuestion className='icon-help'/>
          <GrClose className='icon-x'/>
        </div>

      </div>
      <div className="right-control">
        <BsPlusLg className='icon-topbar'/>
        <GoQuestion className='icon-topbar'/>
        <IoNotificationsOutline className='icon-topbar'/>
        <HiUserCircle className='icon-topbar'/>
      </div>
    </div>
  )
}
