import React from 'react'
import { Link } from 'react-router-dom';
import {asphaltNine,Valorant, title } from '../Home/index'
import "./navbar.css"
import { FaGear } from "react-icons/fa6";
import  { useEffect, useState } from 'react';





const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Handle form submission here
    window.alert("Changes saved successfully!"); // Show alert upon form submission
  };

  useEffect(() => {
    const scrollers = document.querySelectorAll(".image-slider");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".images");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        })
      });
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
        
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid " id="navbar">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/home'>
                <div className="nav-link" aria-current="page" >Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/forum'>
                <div className="nav-link" aria-current="page" >forums</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/chat'>
                <div className="nav-link" href="#" >chat</div>
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
               <Link to='/event'>
               <a className="nav-link" href="#" onClick={sound}>Event</a>
              
               </Link>
              </li> */}
              <li className="nav-item">
               <Link to='/feature'>
               <div className="nav-link" aria-disabled="true"  >features</div>
               </Link>
              </li>
              <li className="nav-item">
               <Link to='/profile'>
               <div className="nav-link" aria-disabled="true"  >Profile</div>
               </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="navbar-brand" >
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <img src={title} alt="" />
            </button>
          <FaGear className='icon' onClick={handleOpenModal} />

          </div>
          </div>
        </div>
      </nav>




                  
<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">Player Profile</h5>
    
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onclick="sound()"></button>
  </div>
  <div className="offcanvas-body"> 
        <div className="profile">
            <img src={asphaltNine}  alt="" />
          <span className="nameContainer">
            <h3 className="state-2">you</h3> 
            <input className="name" type="text" value="Aryan" readonly/> 
          </span>   
       </div>
        <div className="personal-details">
            <span className="stateCont">
              <h3 className="state"> Age</h3> 
              <p className="state-det">22</p>
            </span>
            <span className="stateCont" >
              <h3 className="state">Gender</h3> 
              <p className="state-det">Male</p>
            </span>
            <span className="stateCont"> 
              <h3 className="state">Work</h3> 
              <p className="state-det">full-time</p></span>
            <span className="stateCont"> 
              <h3 className="state">status</h3> 
              <p className="state-det"> living with partner</p>
            </span>
            <span className="stateCont"> 
              <h3 className="state">Spirit </h3> 
              <p className="state-det">raccon</p>
            </span>
            <span className="stateCont">
              <h3 className="state">device</h3> 
              <p className="state-det">Nintendo</p>
            </span>
        </div>

       <div className="game-details">
        <h3 className="state-2">Total play time  </h3>
        <p>8 hours 15 min</p>
         <h3 className="state-2">Downloads</h3> 
         <p> 11/161</p> 
         <h3 className="state-2">most played games</h3> 
         <span id="recentGame">
          <img src={Valorant} alt=""  />
          <img src={asphaltNine} alt="" />
        </span>
       </div>
{/* // </ul>   */}
  </div>
</div>  


{modalVisible && (
        <div className="modal">
          <div className="modal-content">
            {/* Your modal content */}
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form id="profileForm" onSubmit={handleSubmit}>
              {/* Your form content */}
              <h2>Profile Settings</h2>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required /><br />
              <span className="error" id="usernameError"></span><br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" /><br /><br />
              <h2>Privacy Preferences</h2>
              <label htmlFor="showEmail">Show Email:</label>
              <input type="checkbox" id="showEmail" name="showEmail" /><br />
              <label htmlFor="showProfilePicture">Show Profile Picture:</label>
              <input type="checkbox" id="showProfilePicture" name="showProfilePicture" /><br />
              <label htmlFor="indexInSearchEngines">Allow Search Engine Indexing:</label>
              <input type="checkbox" id="indexInSearchEngines" name="indexInSearchEngines" /><br /><br />
              <h2>Notification Preferences</h2>
              <label htmlFor="emailNotifications">Email Notifications:</label>
              <input type="checkbox" id="emailNotifications" name="emailNotifications" /><br /><br />
              <button type="submit" id='btn-save' className='text-sm font-medium bg-blue-600 text-red-900 hover:text-white  rounded-md px-3 py-2'>Save Changes</button>
            </form>
          </div>
        </div>
      )}





    </div>

    
  )
}

export default Navbar