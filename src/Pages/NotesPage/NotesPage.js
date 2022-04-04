import React from 'react';
import './NotesPage.css';
import PinImg from '../../Images/pin.svg';
import PinLight from '../../Images/pin-light.png';
import { NavLink } from 'react-router-dom'

export default function NotesPage() {
    const activeStyle = ({isActive}) =>  {
        return {fontWeight : isActive ? "600" : "500"}
    }
    

  return (
    <>
    <div className="notepage-container">
    <div className="sidebar">
      <NavLink to='' style={activeStyle} className='sidebar-link'><i className="lni lni-home"></i>  Home</NavLink>
      <NavLink to='/archive' style={activeStyle} className='sidebar-link'><i className="lni lni-archive"></i>  Archive</NavLink>
      <NavLink to='/trash' style={activeStyle} className='sidebar-link'><i className="lni lni-trash-can"></i>  Trash</NavLink>
      <NavLink to='/label' style={activeStyle} className='sidebar-link'><i className="lni lni-tag"></i>  Label</NavLink>
      <NavLink to='/account' style={activeStyle} className='sidebar-link'><i className="lni lni-user"></i>  Account</NavLink>
      <button className='create-note-btn'>Create New Note</button>
    </div>
    <div className="notes-container">
        <input className='search-bar' type="search" name="search" id="search" placeholder='Search...' />
        <h3>PINNED</h3>
        <div className="pinned-notes">

          <div className="note">
              <div className="pinned-icon"><img className='pin-icon' src={PinImg} alt="pin-tag" /></div>
              <div className="title">Title of the note</div>
              <div className="desc">Body of the Note</div>
              <div className="note-date">Created on 26/12/2021</div>
              <div className="note-icons">
                  <div className="note-icon"><i className="note-icon-paint lni lni-paint-roller"></i></div>
                  <div className="note-icon"><i className="note-icon-archive lni lni-archive"></i></div>
                  <div className="note-icon"><i className="note-icon-label lni lni-tag"></i></div>
                  <div className="note-icon"><i className="note-icon-trash lni lni-trash-can"></i></div>
              </div>
          </div>

        </div>
        <h3>OTHERS</h3>
        <div className="other-notes">
        <div className="note">
              <div className="pinned-icon"><img className='pin-icon' src={PinLight} alt="pin-tag" /></div>
              <div className="title">Title of the note</div>
              <div className="desc">Body of the Note</div>
              <div className="note-date">Created on 26/12/2021</div>
              <div className="note-icons">
              <i className="note-icon lni lni-paint-roller"></i>
              <i className="note-icon lni lni-archive"></i>
              <i className="note-icon lni lni-tag"></i>
              <i className="note-icon lni lni-trash-can"></i>
              </div>
          </div>

          <div className="note">
              <div className="pinned-icon"><img className='pin-icon' src={PinLight} alt="pin-tag" /></div>
              <div className="title">Title of the note</div>
              <div className="desc">Body of the Note</div>
              <div className="note-date">Created on 26/12/2021</div>
              <div className="note-icons">
              <i className="note-icon lni lni-paint-roller"></i>
              <i className="note-icon lni lni-archive"></i>
              <i className="note-icon lni lni-tag"></i>
              <i className="note-icon lni lni-trash-can"></i>
              </div>
          </div>


        </div>
    </div>
    </div>
    </>
  )
}
