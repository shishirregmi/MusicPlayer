import React from 'react'
import { Link } from 'react-router-dom'

const SideBrowserMain = () => {
  return (
    <div className="navigation__list">
              <div
                className="navigation__list__header"
                role="button"
                data-toggle="collapse"
                href="#main"
                aria-expanded="true"
                aria-controls="main"
              >
                Main
              </div>

              <div className="collapse in" id="main">
                <Link to="/home" className="navigation__list__item">
                  <i className="ion-ios-browsers"></i>
                  <span>Browse</span>
                </Link>

                <a href="#" className="navigation__list__item">
                  <i className="ion-person-stalker"></i>
                  <span>Activity</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-radio-waves"></i>
                  <span>Radio</span>
                </a>
              </div>
            </div>
  )
}

export default SideBrowserMain