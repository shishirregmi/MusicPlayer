import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';

const Header = () => {
  let [dropdownOpen, setDropdownOpen] = useState(false);
  let { user,logoutUser } = useContext(AppContext)
  let navigate = useNavigate()
  return (
    <section className="header">
        <div className="page-flows">
          <span className="flow">
            <i className="ion-chevron-left"></i>
          </span>

          <span className="flow">
            <i className="ion-chevron-right disabled"></i>
          </span>
        </div>

        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="user">
          <div className="user__notifications">
          </div>
          <div className="user__inbox">
          </div>

          <div className="user__info">
            <span className="user__info__img">
              <img
                src={user.profile_pic}
                alt="Profile Picture"
                className="img-responsive"
              />
            </span>
            
            <span className="user__info__name">
              <span className="first">{user.fullname}</span>
            </span>
          </div>

          <div className="user__actions">
            <div className={dropdownOpen?"dropdown open":"dropdown"}>
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={()=>{
                  setDropdownOpen(!dropdownOpen)
                }}
              >
                <i className="ion-chevron-down"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenu1"
              >
                <li>
                  <a href="#">Private Session</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="" onClick={logoutUser}>Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Header