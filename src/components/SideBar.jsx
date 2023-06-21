import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import {GrClose} from 'react-icons/gr'
function SideBar() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
  const toogleModal =()=>{
    setmodalIsOpen(!modalIsOpen)
  }
  return (
    <>
        <aside className="sidebar">
        <div className="logo">
        <a>Brand<b>Colors</b></a>
    </div>
    <div className="description">
        The biggest collection of offical bran colors code around. Curated by @brandcolors and friends
    </div>
    <nav className="menu">
        <ul>
            <li>
                <a onClick={toogleModal}>About BrandColors</a>
            </li>
        </ul>
    </nav>
        </aside>
        <Modal isOpen={modalIsOpen}
        appElement={document.getElementById('root')}
        className="about-modal"
        overlayClassName="about-modal-overlay"
        onRequestClose={toogleModal} >
        <button className='modal-close-btn' onClick={toogleModal}>
          <GrClose/>
        </button>
        <h3>About BrandColors</h3>
        <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
      </Modal>
    </>
  )
}

export default SideBar